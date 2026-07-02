terraform {
  required_version = ">= 1.5.0"

  backend "s3" {
    # bucket and region are passed via -backend-config (CI) or backend.hcl (local).
    # See README for the one-time state bucket setup.
    key     = "infrastructure/terraform.tfstate"
    encrypt = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
  }
}
