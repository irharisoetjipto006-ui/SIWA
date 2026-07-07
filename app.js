const config = require("./core/config/config");

const engine = require("./core/database/engine");
const migration = require("./core/database/migration");

const router = require("./core/cli/router");

async function start() {

    console.log("========================================");
    console.log(config.appName);
    console.log("========================================");

    engine.open();

    migration.migrate();

    await router.run();

}

start();