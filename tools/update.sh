#!/bin/bash
SIWA_HOME="$HOME/SIWA"
cd "$SIWA_HOME"
git add .
git commit -m "${1:-Update SIWA}"
git push
