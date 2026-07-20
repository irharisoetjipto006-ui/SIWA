const client = require("../engine/WhatsAppClient");


class WhatsappService {


    async connect() {

        const page = await client.getPage();

        console.log(
            "✓ WhatsApp siap digunakan"
        );

        return page;

    }


}


module.exports = new WhatsappService();
