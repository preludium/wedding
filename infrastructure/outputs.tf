output "cloudfront_domain_name" {
  description = "Domain name of the CloudFront distribution. Point a CNAME record at this if you bring your own domain, or use it directly."
  value       = aws_cloudfront_distribution.images.domain_name
}

output "s3_bucket_name" {
  description = "Name of the S3 bucket storing the images."
  value       = aws_s3_bucket.images.bucket
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID (useful for CLI commands and invalidation)."
  value       = aws_cloudfront_distribution.images.id
}

output "image_urls" {
  description = "CloudFront URLs for all uploaded images. Ready to paste as environment variables."
  value = {
    for name, obj in aws_s3_object.image : name => "https://${aws_cloudfront_distribution.images.domain_name}/${obj.key}"
  }
}
