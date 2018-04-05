module.exports = (app) => {
    app.get('/api/allevents', function(req, res) {
        db.query(`SELECT * FROM arrangementer`, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
            }
            res.send(results);
        });
    });
    // app.get('/api/allImages/:cat', function(req, res) {
    //     db.query(`SELECT * FROM billede WHERE fk_kategori = ${req.params.cat}`, function (err, results) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log(results);
    //         }
    //         res.send(results);
    //     });
    // });
}