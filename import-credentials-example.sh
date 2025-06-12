#!/bin/bash
# Usage: source ./import-credentials-example.sh

set -a
source ./import-credentials.env
set +a
echo "Credentials loaded from .env file."
