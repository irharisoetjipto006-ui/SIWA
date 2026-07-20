const { chromium } = require("playwright");
const path = require("path");

class Browser {

    constructor() {
        this.context = null;
        this.page = null;
    }

    async start() {

        if (this.page) {
            return this.page;
        }

        const sessionPath = path.join(
            process.cwd(),
            "storage",
            "whatsapp",
            "session"
        );

        this.context = await chromium.launchPersistentContext(sessionPath, {
            headless: false,
            viewport: {
                width: 1280,
                height: 900
            }
        });

        const pages = this.context.pages();

        if (pages.length > 0) {
            this.page = pages[0];
        } else {
            this.page = await this.context.newPage();
        }

        await this.page.goto("https://web.whatsapp.com");

        return this.page;
    }

    async getPage() {
        return this.start();
    }

    async close() {
        if (this.context) {
            await this.context.close();
            this.context = null;
            this.page = null;
        }
    }

}

module.exports = new Browser();
