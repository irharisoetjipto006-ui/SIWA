const config = require("../config/config");

function connect() {

    console.log("Database :", config.database);

}

module.exports = { connect };