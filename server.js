const express = require("express");
const cors = require("cors");

const routes = require("./api/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

const PORT = 3000;

app.listen(PORT, () => {

    console.log("");
    console.log("===============================");
    console.log("SIWA REST API");
    console.log("===============================");
    console.log("Listening : http://localhost:3000");
    console.log("");

});