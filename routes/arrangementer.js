module.exports = (app) => {
    app.get('/arrengermenter', function(req, res) {
        db.query(`SELECT 
        arrangementer.title,
        arrangementer.dato_tid,
        arrangementer.varighed,
        arrangementer.pris,
        typer.type,
        sal.sal
        FROM arrangementer
        INNER JOIN typer
        ON typer.id=arrangementer.fk_type
        INNER JOIN sal
        ON sal.id=arrangementer.fk_sal
        ORDER BY arrangementer.dato_tid`, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                 console.log(results);
                res.render('pages/arrengermenter', {arrangement: results});
                // res.send(results);
            }
        });
    });

    app.get('/arrengermenter/:typer', function(req, res) {
        db.query(`SELECT * FROM arrangementer WHERE fk_type = ?`, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
                res.render('pages/arrengermenter', {arrangement: results});
            }
        });
    });

};