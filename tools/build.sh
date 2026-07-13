#!/bin/bash

cd "$(dirname "$0")/.."

echo ""
echo "======================================="
echo "        SIWA BUILDER"
echo "======================================="
echo ""

mkdir -p \
data/fkkp \
data/import \
database \
logs \
web/public \
web/views/fkkp \
web/views/layouts \
web/views/partials \
modules \
tools

touch data/fkkp/current.json

echo "[OK] Folder dipastikan ada."
echo "[OK] File dasar dipastikan ada."

echo ""
echo "======================================="
echo "      BUILD SELESAI"
echo "======================================="