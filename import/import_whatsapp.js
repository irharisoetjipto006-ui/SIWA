const fs = require("fs");
const path = require("path");

const source = process.argv[2];

if (!source) {
    console.log("");
    console.log("Usage:");
    console.log("node import/import_whatsapp.js /path/export_whatsapp");
    process.exit();
}

const target = "./storage/whatsapp";

const folders = {
    chat: path.join(target, "chat"),
    image: path.join(target, "image"),
    video: path.join(target, "video"),
    audio: path.join(target, "audio"),
    document: path.join(target, "document")
};

Object.values(folders).forEach(dir=>{
    fs.mkdirSync(dir,{recursive:true});
});

const imageExt=[".jpg",".jpeg",".png",".gif",".webp",".heic"];
const videoExt=[".mp4",".mov",".avi",".mkv",".3gp"];
const audioExt=[".mp3",".ogg",".opus",".m4a",".aac",".wav"];
const docExt=[".pdf",".doc",".docx",".xls",".xlsx",".ppt",".pptx",".txt"];

let total=0;

for(const file of fs.readdirSync(source)){

    const src=path.join(source,file);

    if(fs.statSync(src).isDirectory()) continue;

    const ext=path.extname(file).toLowerCase();

    let dest=null;

    if(file.toLowerCase().endsWith(".txt"))
        dest=folders.chat;

    else if(imageExt.includes(ext))
        dest=folders.image;

    else if(videoExt.includes(ext))
        dest=folders.video;

    else if(audioExt.includes(ext))
        dest=folders.audio;

    else if(docExt.includes(ext))
        dest=folders.document;

    if(dest){

        fs.copyFileSync(src,path.join(dest,file));

        console.log("✓",file);

        total++;

    }

}

console.log("");
console.log("Imported :",total,"files");
