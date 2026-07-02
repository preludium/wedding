# Random suffix keeps the bucket name globally unique without you having to
# guess an available one.
resource "random_id" "bucket_suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "images" {
  bucket = "${var.bucket_name_prefix}-${random_id.bucket_suffix.hex}"
  tags   = var.tags

  # Prevents `terraform destroy` from failing on a non-empty bucket, but also
  # means destroy will permanently delete every photo in it. Leave this false
  # (default) and empty the bucket yourself first if you ever tear this down.
  # force_destroy = false
}

# "Block all public access" - all four settings enabled.
resource "aws_s3_bucket_public_access_block" "images" {
  bucket = aws_s3_bucket.images.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Disables ACLs entirely (modern S3 best practice); access is controlled
# exclusively through the bucket policy below.
resource "aws_s3_bucket_ownership_controls" "images" {
  bucket = aws_s3_bucket.images.id

  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket_versioning" "images" {
  bucket = aws_s3_bucket.images.id

  versioning_configuration {
    status = "Disabled"
  }
}

# Only the CloudFront distribution below (via its Origin Access Control) may
# read objects. The `AWS:SourceArn` condition scopes this to that one
# distribution specifically - not "any CloudFront distribution in the
# account" - so the bucket stays inaccessible by any other path: no direct
# S3 URL, no other distribution, no public ACL.
data "aws_iam_policy_document" "images_cloudfront_read" {
  statement {
    sid     = "AllowCloudFrontServicePrincipalReadOnly"
    effect  = "Allow"
    actions = ["s3:GetObject"]

    resources = ["${aws_s3_bucket.images.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.images.arn]
    }
  }
}

resource "aws_s3_bucket_cors_configuration" "images" {
  bucket = aws_s3_bucket.images.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = var.cors_allowed_origins
    max_age_seconds = 3600
  }
}

resource "aws_s3_bucket_policy" "images" {
  bucket = aws_s3_bucket.images.id
  policy = data.aws_iam_policy_document.images_cloudfront_read.json
}
