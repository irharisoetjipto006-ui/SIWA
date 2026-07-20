const client = require("./WhatsAppClient");


class Scanner {


    async getChats() {

        const page = await client.getPage();


        const chats = await page.evaluate(() => {

            const rows = [];

            document
            .querySelectorAll("div[role='listitem']")
            .forEach(item => {

                const text = item.innerText;

                if (text) {
                    rows.push(text);
                }

            });


            return rows;

        });


        return chats;

    }


}


module.exports = new Scanner();
