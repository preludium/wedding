#!/usr/bin/env bash
set -euo pipefail

BUCKET=$(cd infrastructure && terraform output -raw s3_bucket_name)
DOMAIN=$(cd infrastructure && terraform output -raw cloudfront_domain_name)
PROFILE="${AWS_PROFILE:-terraform}"

echo "Uploading to s3://$BUCKET/ ..."
aws s3 sync images/ "s3://$BUCKET/" --profile "$PROFILE" --exclude ".DS_Store"

echo ""
echo "URLs:"
for f in images/*; do
  name=$(basename "$f")
  [ "$name" = ".DS_Store" ] && continue
  echo "  https://$DOMAIN/$name"
done
