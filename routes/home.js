module.exports = (app) => {
    app.get('/', function(req, res) {
        db.query(`SELECT * FROM arrangementer`, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                // console.log(results);
            }
        });
        res.render('pages/index');
    });
};