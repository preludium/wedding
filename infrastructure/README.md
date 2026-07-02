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

## One-time bootstrap

Before CI can deploy, you need to run these steps once locally:

### 1. Create the state backend bucket

Terraform stores state remotely in S3 so both local and CI share the same view.

```bash
aws s3api create-bucket \
  --bucket wedding-tfstate-<unique-suffix> \
  --region eu-north-1 \
  --create-bucket-configuration LocationConstraint=eu-north-1

aws s3api put-bucket-versioning \
  --bucket wedding-tfstate-<unique-suffix> \
  --versioning-configuration Status=Enabled

aws s3api put-public-access-block \
  --bucket wedding-tfstate-<unique-suffix> \
  --public-access-block-configuration \
    BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
```

Pick any unique suffix — e.g. your initials + random digits: `wedding-tfstate-ms482`.

### 2. Copy and fill in variables

```bash
cp terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars` — set `budget_alert_email` and verify `github_org` / `github_repo`.

### 3. Run the initial apply locally

```bash
terraform init \
  -backend-config="bucket=wedding-tfstate-<unique-suffix>" \
  -backend-config="region=eu-north-1"

terraform apply
```

This creates **all** resources, including:
- S3 bucket + CloudFront distribution
- OIDC IAM role for GitHub Actions
- Budget alerts

### 4. Store CI credentials in GitHub

After `terraform apply`, run:

```bash
terraform output -raw github_actions_role_arn
```

Then add these to your GitHub repo (**Settings → Secrets and variables → Actions**):

**Secrets** (encrypted, not visible in logs):

| Secret | Value |
|---|---|
| `AWS_ROLE_ARN` | The role ARN from the output above |
| `TF_STATE_BUCKET` | `wedding-tfstate-<unique-suffix>` |
| `TF_BUDGET_ALERT_EMAIL` | Your email for budget alerts |
| `GH_PAT` | Classic personal access token with `repo` scope |

To create `GH_PAT`: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token → check `repo` → copy the token.

**Variables** (non-sensitive):

| Variable | Value |
|---|---|
| `AWS_REGION` | `eu-north-1` |
| `TF_BUCKET_NAME_PREFIX` | `wedding-photos` |
| `TF_CLOUDFRONT_PRICE_CLASS` | `PriceClass_100` |
| `TF_TAGS` | `{"Project":"wedding-site","ManagedBy":"terraform"}` |
| `TF_CORS_ALLOWED_ORIGINS` | `["https://preludium.github.io","http://localhost:5173"]` |

`CF_DOMAIN` is set automatically by `infra.yml` — no need to create it manually.

## How it works

### Local development

```bash
terraform plan    # preview changes
terraform apply   # apply (uploads images defined in terraform.tfvars)
```

`terraform.tfvars` is gitignored — it contains your email and local-only settings (like images to upload).

### CI workflows

| Workflow | File | Trigger | Does |
|---|---|---|---|
| PR Checks | `pr.yml` | Pull request to `main` | `fmt` → `validate` → `tflint` → `trivy` security scan |
| Infra | `infra.yml` | Every push to `main` | Detects infra changes → conditionally applies Terraform → always triggers Pages |
| Pages | `pages.yml` | Triggered by Infra only | Builds Vite site → deploys to GitHub Pages |

`infra.yml` is the single orchestrator. Terraform only runs when `infrastructure/**` files changed. Pages always deploys — but only once per push. `CF_DOMAIN` is auto-set from Terraform output.

### Image management

Images are **gitignored** and uploaded locally:

```bash
just upload-images
```

Filenames use generic slot IDs (`couple.jpg`, `venue-1.jpg`, `venue-2.jpg`) — nothing personal in the repo. The Pages workflow constructs full URLs at build time from `CF_DOMAIN` + filename, so if you rename or add images, update `pages.yml` accordingly.

## Outputs

| Output | Description |
|---|---|
| `cloudfront_domain_name` | CloudFront domain (e.g. `d123.cloudfront.net`) |
| `s3_bucket_name` | S3 bucket name |
| `cloudfront_distribution_id` | Distribution ID for CLI operations |
| `image_urls` | Full `https://` URLs for uploaded images |
| `github_actions_role_arn` | ARN of the IAM role for GitHub Actions OIDC |

## Budget alerts

A $1/month budget is enforced. Alerts fire at **50%**, **85%** (actual spend), and **100%** (forecasted). After the first `terraform apply`, check your inbox for an SNS subscription confirmation email — you **must click the link** to start receiving alerts.

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
