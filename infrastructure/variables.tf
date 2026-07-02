variable "aws_profile" {
  description = "AWS CLI profile for local development. Leave unset in CI (OIDC)."
  type        = string
  default     = null
}

variable "aws_region" {
  description = "AWS region for the S3 bucket and Terraform's AWS API calls. CloudFront itself is a global service."
  type        = string
  default     = "eu-north-1"
}

variable "bucket_name_prefix" {
  description = "Prefix for the S3 bucket name. A random suffix is appended since S3 bucket names must be globally unique across all AWS accounts."
  type        = string
  default     = "wedding-photos"
}

variable "cloudfront_price_class" {
  description = "CloudFront price class. PriceClass_100 (US, Canada, Europe) is the cheapest option."
  type        = string
  default     = "PriceClass_100"
}

variable "tags" {
  description = "Common tags applied to all resources."
  type        = map(string)
  default = {
    Project   = "wedding-site"
    ManagedBy = "terraform"
  }
}

variable "budget_alert_email" {
  description = "Email address to receive budget alerts."
  type        = string
  sensitive   = true
}

variable "github_org" {
  description = "GitHub organization or username for the OIDC trust policy."
  type        = string
}

variable "github_repo" {
  description = "GitHub repository name for the OIDC trust policy."
  type        = string
}

variable "cors_allowed_origins" {
  description = "List of origins allowed to make cross-origin requests to the S3 bucket via CloudFront."
  type        = list(string)
  default     = ["https://preludium.github.io", "http://localhost:5173"]
}
