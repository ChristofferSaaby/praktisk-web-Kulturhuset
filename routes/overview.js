module.exports = function (app) {
    require('./home')(app);
    require('./arrangementer')(app);
    require('./login')(app);
};