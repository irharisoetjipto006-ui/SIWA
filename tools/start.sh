#!/bin/bash

cd "$(dirname "$0")/.."

IP=$(hostname -I | awk '{print $1}')

echo ""
echo "======================================="
echo "       MENJALANKAN SIWA"
echo "======================================="
echo ""

echo "Dashboard : http://$IP:3000/dashboard"
echo "FKKP      : http://$IP:3000/fkkp"
echo ""

node server.js