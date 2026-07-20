import sys, json, re

txt_path, json_path, group_name = sys.argv[1], sys.argv[2], sys.argv[3]
messages = []

# Regex fleksibel untuk format tanggal & waktu WhatsApp
pattern = re.compile(r"^(?:\[)?(\d{1,4}[/\.-]\d{1,2}[/\.-]\d{1,4}[,\s]+\d{1,2}[\.:]\d{2}(?:[\.:]\d{2})?(?:\s*[AP]M)?)(?:\])?\s*(?:-\s*)?([^:]+):\s*(.*)$", re.IGNORECASE)

with open(txt_path, "r", encoding="utf-8", errors="ignore") as f:
    current_msg = None
    for line in f:
        line = line.strip()
        if not line:
            continue
        match = pattern.match(line)
        if match:
            if current_msg:
                messages.append(current_msg)
            date_time, sender, text = match.groups()
            current_msg = {
                "datetime": date_time,
                "sender": sender.strip(),
                "message": text.strip()
            }
        elif current_msg:
            current_msg["message"] += "\n" + line

    if current_msg:
        messages.append(current_msg)

output_data = {
    "group_name": group_name,
    "total_messages": len(messages),
    "messages": messages
}

with open(json_path, "w", encoding="utf-8") as f:
    json.dump(output_data, f, ensure_ascii=False, indent=2)

print(f"Grup    : {group_name}")
print(f"Parsed  : {len(messages)} pesan -> {json_path}")
