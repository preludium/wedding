resource "aws_s3_object" "image" {
  for_each = var.images

  bucket       = aws_s3_bucket.images.bucket
  key          = "${each.key}.jpg"
  source       = "${path.module}/${each.value.path}"
  content_type = each.value.type
  etag         = filemd5("${path.module}/${each.value.path}")
  tags         = var.tags
}
