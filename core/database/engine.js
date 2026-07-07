const sqlite3 = require("sqlite3").verbose();
const config = require("../config/config");

let db = null;

function open() {

    if (db) return db;

    db = new sqlite3.Database(config.database, (err) => {

        if (err) {

            console.error("❌ Tidak dapat membuka database");
            console.error(err.message);
            process.exit(1);

        }

        console.log("✅ SQLite Connected");

    });

    return db;

}

function close() {

    if (!db) return;

    db.close();

    db = null;

}

module.exports = {

    open,
    close

};