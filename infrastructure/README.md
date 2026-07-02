# Infrastructure

Terraform configuration to provision an S3 bucket + CloudFront distribution for serving images on the wedding website.

## Architecture

```
User ──▶ CloudFront (OAC) ──▶ S3 (private, no public access)
```

The S3 bucket has **Block all public access** enabled and is accessible only through the CloudFront distribution via Origin Access Control (OAC).

## Prerequisites

- [Terraform](https://developer.hashicorp.com/terraform/downloads) >= 1.5.0
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) installed and configured with the `terraform` profile (`aws configure --profile terraform`)

## Setup

1. Copy and edit `terraform.tfvars` — insert your email for budget alerts and adjust any values as needed:

   ```hcl
   budget_alert_email = "you@example.com"
   ```

   All variables are declared in `variables.tf` and populated from this file. `terraform.tfvars` is gitignored and stays local.

2. Add images to the `images` map in `terraform.tfvars`. Point `path` relative to the `infrastructure/` folder:

   ```hcl
   images = {
     name = { path = "../images/file.jpg", type = "image/jpeg" }
   }
   ```

## Deployment

```bash
# 1. Initialize Terraform (downloads providers)
terraform init

# 2. Preview the changes
terraform plan

# 3. Apply
terraform apply
```

Type `yes` when prompted. Terraform uploads the images defined in `terraform.tfvars` and outputs their CloudFront URLs.

## Outputs

| Output | Description |
|---|---|
| `cloudfront_domain_name` | CloudFront domain (e.g. `d123.cloudfront.net`) |
| `s3_bucket_name` | S3 bucket name |
| `cloudfront_distribution_id` | Distribution ID for CLI operations |
| `image_urls` | Full `https://` URLs for every uploaded image |

Show them with:

```bash
terraform output
terraform output -json image_urls
```

## Budget alerts

A $1/month budget is enforced. Alerts fire at **50%**, **85%** (actual spend), and **100%** (forecasted). After the first `terraform apply`, check your inbox for an SNS subscription confirmation email — you **must click the link** in that email to start receiving alerts.

## Cleanup

```bash
terraform destroy
```

> If the S3 bucket has objects in it, empty it first via the AWS console or CLI before running destroy.

## Free Tier Notes

- CloudFront Free Tier includes **1 TB data transfer** and **10M HTTP requests** per month for the first 12 months.
- S3 Free Tier includes **5 GB storage** and **20K GET requests** per month for the first 12 months.
- Price class is set to `PriceClass_100` (US, Canada, Europe only) to minimize costs.
- Versioning is disabled to avoid extra storage costs.
- Budget is set at $1/month with alerts before it's reached.
