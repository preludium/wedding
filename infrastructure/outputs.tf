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

output "github_actions_role_arn" {
  description = "ARN of the IAM role for GitHub Actions OIDC. Copy this to the AWS_ROLE_ARN GitHub Secret."
  value       = aws_iam_role.github_actions.arn
}
