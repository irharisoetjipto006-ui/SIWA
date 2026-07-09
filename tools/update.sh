#!/bin/bash

cd "$(dirname "$0")/.."

if [ -z "$1" ]; then
    echo ""
    echo "Cara pakai:"
    echo "./tools/update.sh \"Pesan commit\""
    exit 1
fi

echo ""
echo "======================================="
echo "         UPDATE KE GITHUB"
echo "======================================="
echo ""

git add .

git commit -m "$1"

git push origin main

echo ""
echo "======================================="
echo "           SELESAI"
echo "======================================="