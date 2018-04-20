module.exports = (app) => {
    app.get('/arrangementer', function(req, res) {
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
                res.render('pages/arrangementer', {arrangement: results});
                // res.send(results);
            }
        });
    });

    app.get('/arrangementer/:typer', function(req, res) {
        db.query(`SELECT * FROM arrangementer
        INNER JOIN typer
        ON typer.id=arrangementer.fk_type
        INNER JOIN sal
        ON sal.id=arrangementer.fk_sal
        INNER JOIN steder
        ON steder.id=arrangementer.fk_sted
        WHERE fk_type = ${req.params.typer}
        ORDER BY arrangementer.dato_tid ASC`, function (err, results) {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
                res.render('pages/arrangementer', {arrangement: results});
            }
        });
    });

};