const express = require("express");

const app = express();

// ======================================
// Konfigurasi
// ======================================

app.set("view engine", "ejs");
app.set("views", "./web/views");

// Folder public (CSS, JavaScript, gambar)
app.use(express.static("web/public"));

app.use(express.urlencoded({ extended: true }));

// ======================================
// Routing
// ======================================

// HOME
app.get("/", (req, res) => {
    res.redirect("/dashboard");
});

// Dashboard
app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

// Data Orang
app.get("/person", (req, res) => {
    res.render("person");
});

// FKKP
app.get("/fkkp", (req, res) => {
    res.render("fkkp/day");
});

// ======================================
// Jalankan Server
// ======================================

app.listen(3000, () => {
    console.log("==================================");
    console.log(" SIWA SERVER BERJALAN");
    console.log(" http://localhost:3000");
    console.log("==================================");
});