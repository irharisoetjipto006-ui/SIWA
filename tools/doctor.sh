#!/bin/bash

cd "$(dirname "$0")/.."

echo ""
echo "======================================="
echo "          SIWA DOCTOR"
echo "======================================="
echo ""

echo -n "Node       : "
node -v

echo -n "NPM        : "
npm -v

echo -n "Git        : "
git --version

echo -n "IP Linux   : "
hostname -I | awk '{print $1}'

echo ""
echo "Folder penting"

for dir in data web database modules tools logs
do
    if [ -d "$dir" ]; then
        echo "[OK] $dir"
    else
        echo "[X ] $dir"
    fi
done

echo ""
echo "======================================="
echo "      DIAGNOSA SELESAI"
echo "======================================="