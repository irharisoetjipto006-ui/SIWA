const help = require("./help");
const personService = require("../../modules/contact/service/PersonService");

async function run() {

    const command = process.argv[2];

    switch (command) {

        case "add":

            const name = process.argv[3];

            if (!name) {

                console.log("Nama belum diisi.");
                return;

            }

            await personService.addPerson(name);

            console.log("✓ Person berhasil ditambahkan.");

            break;

        case "list":

            const persons = await personService.listPersons();

            console.table(persons);

            break;

        case "version":

            console.log("SIWA Version 1.0.0");

            break;

        default:

            help.show();

    }

}

module.exports = {

    run

};