const engine = require("./engine");

function run(sql, params = []) {

    const db = engine.open();

    return new Promise((resolve, reject) => {

        db.run(sql, params, function(err) {

            if (err) {
                reject(err);
                return;
            }

            resolve({
                id: this.lastID,
                changes: this.changes
            });

        });

    });

}

function all(sql, params = []) {

    const db = engine.open();

    return new Promise((resolve, reject) => {

        db.all(sql, params, (err, rows) => {

            if (err) {
                reject(err);
                return;
            }

            resolve(rows);

        });

    });

}

function get(sql, params = []) {

    const db = engine.open();

    return new Promise((resolve, reject) => {

        db.get(sql, params, (err, row) => {

            if (err) {
                reject(err);
                return;
            }

            resolve(row);

        });

    });

}

module.exports = {

    run,
    all,
    get

};