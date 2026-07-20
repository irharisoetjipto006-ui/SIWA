#!/bin/bash
DIR="$HOME/SIWA/data/import/whatsapp/eksport_wa"
OUT_DIR="$HOME/SIWA/data/import/whatsapp/parsed"
mkdir -p "$OUT_DIR"

echo "=================================="
echo "    SIWA Import & Parse WhatsApp  "
echo "=================================="

if [ ! -d "$DIR" ]; then
    echo "Directory not found: $DIR"
    exit 1
fi

TOTAL_ZIP=$(find "$DIR" -maxdepth 1 -name "*.zip" | wc -l)

if [ "$TOTAL_ZIP" -eq 0 ]; then
    echo "Tidak ditemukan file .zip di $DIR"
    exit 1
fi

echo "Ditemukan $TOTAL_ZIP file ekspor. Memproses ke JSON..."
echo "----------------------------------"

for ZIP_FILE in "$DIR"/*.zip; do
    [ -e "$ZIP_FILE" ] || continue
    
    TMP_DIR=$(mktemp -d)
    unzip -q "$ZIP_FILE" -d "$TMP_DIR"
    TXT_FILE=$(find "$TMP_DIR" -name "*.txt" | head -n 1)
    
    if [ -f "$TXT_FILE" ]; then
        RAW_NAME=$(basename "$TXT_FILE" .txt)
        GROUP_NAME=${RAW_NAME#"Chat WhatsApp dengan "}
        SAFE_NAME=$(echo "$GROUP_NAME" | tr -s " " "_" | tr -cd "[:alnum:]_")
        JSON_OUT="$OUT_DIR/${SAFE_NAME}.json"
        
        python3 "$HOME/SIWA/import/parse_wa.py" "$TXT_FILE" "$JSON_OUT" "$GROUP_NAME"
        echo "----------------------------------"
    fi
    
    rm -rf "$TMP_DIR"
done
