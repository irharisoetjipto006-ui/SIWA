const query = require("../../../core/database/query");

async function create(name) {

    return await query.run(

        "INSERT INTO orang(nama) VALUES(?)",

        [name]

    );

}

async function getAll() {

    return await query.all(

        "SELECT * FROM orang ORDER BY id"

    );

}

module.exports = {

    create,
    getAll

};