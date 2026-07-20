const browser = require("./Browser");

class WhatsAppClient {

    constructor() {
        this.page = null;
    }


    async connect() {

        if (this.page) {
            return this.page;
        }

        this.page = await browser.getPage();

        console.log(
            "WhatsApp Client Connected"
        );

        return this.page;
    }


    async getPage() {

        return this.connect();

    }


}


module.exports = new WhatsAppClient();
