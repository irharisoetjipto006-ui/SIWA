const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./web/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("web/public"));

// =========================
// Membaca data FKKP
// =========================

function getCurrentFKKP() {
    const file = path.join(__dirname, "data", "fkkp", "current.json");

    if (!fs.existsSync(file)) {
        return {
            book: "Belum ada buku",
            author: "",
            week: 1,
            day: 1,
            title: ""
        };
    }

    return JSON.parse(fs.readFileSync(file, "utf8"));
}

// =========================
// ROUTES
// =========================

app.get("/", (req, res) => {
    res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {

    const fkkp = getCurrentFKKP();

    res.render("dashboard", {
        fkkp
    });

});

app.get("/fkkp", (req, res) => {

    const fkkp = getCurrentFKKP();

    res.render("fkkp/day", fkkp);

});

// =========================

const PORT = 3000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {

    console.log("");
    console.log("=================================");
    console.log(" SIWA SERVER BERJALAN");
    console.log(` http://${HOST}:${PORT}`);
    console.log("=================================");

});