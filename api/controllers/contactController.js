const personService = require("../../modules/contact/service/PersonService");

async function list(req, res) {

    try {

        const data = await personService.listPersons();

        res.json(data);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

}

async function add(req, res) {

    try {

        const { nama } = req.body;

        if (!nama) {

            return res.status(400).json({
                error: "Nama wajib diisi."
            });

        }

        await personService.addPerson(nama);

        res.json({
            success: true
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

}

module.exports = {

    list,
    add

};