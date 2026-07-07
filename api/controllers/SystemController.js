function home(req, res) {

    res.json({

        application: "SIWA",

        version: "1.0.0",

        status: "Running"

    });

}

function health(req, res) {

    res.json({

        database: "Connected",

        api: "OK"

    });

}

module.exports = {

    home,

    health

};