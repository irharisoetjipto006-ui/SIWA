const fs = require("fs");
const path = require("path");
const engine = require("./engine");

function migrate() {

    const db = engine.open();

    const sqlFile = path.join(
        __dirname,
        "../../database/migrations/001_master.sql"
    );

    if (!fs.existsSync(sqlFile)) {
        console.log("⚠ Migration file tidak ditemukan.");
        return;
    }

    const sql = fs.readFileSync(sqlFile, "utf8");

    db.exec(sql, (err) => {

        if (err) {
            console.log("❌ Migration gagal");
            console.log(err.message);
            return;
        }

        console.log("✅ Database Migration Success");

    });

}

module.exports = {
    migrate
};