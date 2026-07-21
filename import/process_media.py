import os, glob, shutil, zipfile

zip_dir = os.path.expanduser("~/SIWA/data/import/whatsapp/eksport_wa")
media_out_dir = os.path.expanduser("~/SIWA/data/import/whatsapp/media")
os.makedirs(media_out_dir, exist_ok=True)

media_extensions = (".jpg", ".jpeg", ".png", ".webp", ".mp4", ".3gp", ".m4a", ".opus", ".mp3", ".pdf", ".docx", ".xlsx", ".vcf")

total_extracted = 0
for zip_file in glob.glob(os.path.join(zip_dir, "*.zip")):
    group_raw = os.path.basename(zip_file).replace("Chat WhatsApp dengan ", "").replace(".zip", "")
    safe_group = "".join(c if c.isalnum() else "_" for c in group_raw).strip("_")
    group_media_dir = os.path.join(media_out_dir, safe_group)
    
    with zipfile.ZipFile(zip_file, "r") as z:
        for member in z.infolist():
            if member.filename.lower().endswith(media_extensions):
                os.makedirs(group_media_dir, exist_ok=True)
                z.extract(member, group_media_dir)
                total_extracted += 1

print("=== Sprint 5B: Pengolahan Media Selesai ===")
print(f"Folder Media  : {media_out_dir}")
print(f"Total File Media Extracted: {total_extracted}")
