const service = require('../services/arrangementer.js');

module.exports = (app) => {

    //Hent Alle
    app.get('/arrangementer', async (req, res, next) => {
        try {
            allArrangementer = await service.getAll();
            res.render('pages/arrangementer', {
                    "title": "arrangementer",
                    "data": allArrangementer
            });
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    });
};