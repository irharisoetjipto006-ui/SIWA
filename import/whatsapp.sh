#!/bin/bash
DIR="$HOME/SIWA/data/import/whatsapp/eksport_wa"

echo "=================================="
echo "       SIWA Import WhatsApp"
echo "=================================="

if [ ! -d "$DIR" ]; then
    echo "Directory not found: $DIR"
    exit 1
fi

ZIP_FILE=$(find "$DIR" -maxdepth 1 -name "*.zip" | head -n 1)

if [ -n "$ZIP_FILE" ]; then
    TMP_DIR=$(mktemp -d)
    unzip -q "$ZIP_FILE" -d "$TMP_DIR"
    TXT_FILE=$(find "$TMP_DIR" -name "*.txt" | head -n 1)
    
    RAW_NAME=$(basename "$TXT_FILE" .txt)
    GROUP_NAME=${RAW_NAME#"Chat WhatsApp dengan "}
    
    CHAT_CNT=$(grep -c "^[0-9]" "$TXT_FILE" 2>/dev/null | tr -d nr || echo 0)
    AUD_CNT=$(grep -c "AUD-" "$TXT_FILE" 2>/dev/null | tr -d nr || echo 0)
    IMG_CNT=$(grep -c "IMG-" "$TXT_FILE" 2>/dev/null | tr -d nr || echo 0)
    DOC_CNT=$(grep -c "DOC-\|PDF\|DOCX" "$TXT_FILE" 2>/dev/null | tr -d nr || echo 0)
    STK_CNT=$(grep -c "STK-\|webp" "$TXT_FILE" 2>/dev/null | tr -d nr || echo 0)
    
    echo "Grup    : $GROUP_NAME"
    echo "Chat    : $CHAT_CNT"
    echo "Audio   : $AUD_CNT"
    echo "Gambar  : $IMG_CNT"
    echo "Dokumen : $DOC_CNT"
    echo "Sticker : $STK_CNT"
    echo "Status  : BERHASIL"
    
    rm -rf "$TMP_DIR"
else
    echo "Tidak ditemukan file .zip di $DIR"
fi
