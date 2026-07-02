set positional-arguments := true

default:
    @just --list

# ── Frontend ────────────────────────────────────────────────────────────

# Start dev server
dev:
    pnpm dev

# Build for production
build:
    pnpm build

# Preview production build
preview:
    pnpm preview

# Type-check only
typecheck:
    pnpm typecheck

# Lint everything
lint:
    pnpm lint

# Auto-fix lint issues
lint-fix:
    pnpm lint:fix

# Format code
format:
    pnpm format

# Install dependencies
install:
    pnpm install

# ── Images ──────────────────────────────────────────────────────────────

# Upload images/ to S3 and print CloudFront URLs
upload-images:
    @scripts/upload-images.sh

# ── Infra ───────────────────────────────────────────────────────────────

# Preview Terraform changes
plan:
    cd infrastructure && terraform plan

# Apply Terraform changes (local only)
apply:
    cd infrastructure && terraform apply

# Show Terraform outputs
outputs:
    cd infrastructure && terraform output

# Destroy all infrastructure
destroy:
    cd infrastructure && terraform destroy
