const service = require("../service/PersonService");

module.exports = {

    list : () => service.listPersons(),

    get : (id) => service.getPerson(id),

    add : (nama) => service.addPerson(nama),

    update : (id,nama) => service.updatePerson(id,nama),

    delete : (id) => service.deletePerson(id)

};
