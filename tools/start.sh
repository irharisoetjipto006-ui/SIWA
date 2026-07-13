#!/bin/bash

cd "$(dirname "$0")/.."

IP=$(hostname -I | awk '{print $1}')
PORT=3000

clear

echo "======================================="
echo "           SIWA START"
echo "======================================="
echo ""
echo "Dashboard : http://$IP:$PORT/dashboard"
echo "FKKP      : http://$IP:$PORT/fkkp"
echo ""

./tools/doctor.sh

echo ""
echo "======================================="
echo "      MENJALANKAN SERVER"
echo "======================================="
echo ""

node server.js