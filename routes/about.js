module.exports = (app) => {
    app.get('/about', function(req, res) {
        res.render('pages/about');
    });
};