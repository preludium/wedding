# ── Origin Access Control ──────────────────────────────────────────────────
# Ensures the S3 bucket is only reachable through this CloudFront
# distribution, not via its direct S3 URL.
resource "aws_cloudfront_origin_access_control" "images" {
  name                              = "oac-${aws_s3_bucket.images.bucket}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# ── CloudFront Distribution ────────────────────────────────────────────────
resource "aws_cloudfront_distribution" "images" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = var.cloudfront_price_class
  tags                = var.tags

  origin {
    domain_name              = aws_s3_bucket.images.bucket_regional_domain_name
    origin_id                = local.s3_origin_id
    origin_access_control_id = aws_cloudfront_origin_access_control.images.id
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = local.s3_origin_id
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    # Managed policies — free tier compatible
    cache_policy_id          = data.aws_cloudfront_cache_policy.managed_caching_optimized.id
    origin_request_policy_id = data.aws_cloudfront_origin_request_policy.managed_cors_s3_origin.id

    # Deny direct access; S3 bucket is private and only accessible through CF
    response_headers_policy_id = data.aws_cloudfront_response_headers_policy.managed_simple_cors.id
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # Prevent destroy of a live distribution from failing on an in-progress
  # deployment. If you ever tear this down, disable the distribution in the
  # AWS console first (or set this to true and accept the delay).
  retain_on_delete = false
}

# ── Managed policy data sources (built into every AWS account, free) ──────
data "aws_cloudfront_cache_policy" "managed_caching_optimized" {
  name = "Managed-CachingOptimized"
}

data "aws_cloudfront_origin_request_policy" "managed_cors_s3_origin" {
  name = "Managed-CORS-S3Origin"
}

data "aws_cloudfront_response_headers_policy" "managed_simple_cors" {
  name = "Managed-SimpleCORS"
}
