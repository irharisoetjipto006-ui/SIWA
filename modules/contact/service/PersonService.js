const repository = require("../repository/PersonRepository");

class PersonService {

    async addPerson(nama) {

        return await repository.create(nama);

    }

    async listPersons() {

        return await repository.findAll();

    }

    async getPerson(id) {

        return await repository.findById(id);

    }

    async updatePerson(id, nama) {

        return await repository.update(id, nama);

    }

    async deletePerson(id) {

        return await repository.delete(id);

    }

}

module.exports = new PersonService();
