module.exports = (app) => {
    app.get('/api/allEvents', function(req, res) {
        db.query(`SELECT * from arrangementer
        `, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                // console.log(results);
            }
            res.send(results);
        });
    });
    app.get('/api/allEvents/:typer', function(req, res) {
        var sql = `SELECT * FROM arrangementer WHERE fk_type = ${req.params.typer}`
        db.query(sql, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
            }
            res.send(results);
        });
    });
}