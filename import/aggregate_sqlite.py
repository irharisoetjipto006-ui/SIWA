import os, glob, json, sqlite3

db_path = os.path.expanduser("~/SIWA/data/db/siwa.db")
parsed_dir = os.path.expanduser("~/SIWA/data/import/whatsapp/parsed")

conn = sqlite3.connect(db_path)
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS whatsapp_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    group_name TEXT,
    datetime TEXT,
    sender TEXT,
    message TEXT
)
""")

# Bersihkan data lama jika ada untuk menghindari duplikasi
cursor.execute("DELETE FROM whatsapp_messages")

total_inserted = 0
for json_file in glob.glob(os.path.join(parsed_dir, "*.json")):
    with open(json_file, "r", encoding="utf-8") as f:
        data = json.load(f)
        group = data.get("group_name", "Unknown")
        for msg in data.get("messages", []):
            cursor.execute(
                "INSERT INTO whatsapp_messages (group_name, datetime, sender, message) VALUES (?, ?, ?, ?)",
                (group, msg.get("datetime"), msg.get("sender"), msg.get("message"))
            )
            total_inserted += 1

conn.commit()
conn.close()

print(f"=== Sprint 5A: Agregasi SQLite Selesai ===")
print(f"Database: {db_path}")
print(f"Total Pesan Masuk DB: {total_inserted}")
