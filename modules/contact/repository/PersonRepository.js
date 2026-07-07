const BaseRepository = require("../../../core/framework/BaseRepository");
const query = require("../../../core/database/query");

class PersonRepository extends BaseRepository {

    constructor() {

        super("orang");

    }

    async create(nama) {

        return await query.run(
            "INSERT INTO orang(nama) VALUES(?)",
            [nama]
        );

    }

    async update(id, nama) {

        return await query.run(
            "UPDATE orang SET nama=? WHERE id=?",
            [nama, id]
        );

    }

}

module.exports = new PersonRepository();
