const repository = require("../repository/PersonRepository");

async function addPerson(name) {

    return await repository.create(name);

}

async function listPersons() {

    return await repository.getAll();

}

module.exports = {

    addPerson,
    listPersons

};