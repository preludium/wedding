variable "aws_profile" {
  description = "AWS CLI profile to use for authentication."
  type        = string
}

variable "aws_region" {
  description = "AWS region for the S3 bucket and Terraform's AWS API calls. CloudFront itself is a global service."
  type        = string
}

variable "bucket_name_prefix" {
  description = "Prefix for the S3 bucket name. A random suffix is appended since S3 bucket names must be globally unique across all AWS accounts."
  type        = string
}

variable "cloudfront_price_class" {
  description = "CloudFront price class. PriceClass_100 (US, Canada, Europe) is the cheapest option."
  type        = string
}

variable "tags" {
  description = "Common tags applied to all resources."
  type        = map(string)
}

variable "budget_alert_email" {
  description = "Email address to receive budget alerts."
  type        = string
  sensitive   = true
}

variable "images" {
  description = "Images to upload to S3. Key = short name, path = relative to the infrastructure folder."
  type = map(object({
    path = string
    type = string
  }))
}

variable "cors_allowed_origins" {
  description = "List of origins allowed to make cross-origin requests to the S3 bucket via CloudFront."
  type        = list(string)
}
