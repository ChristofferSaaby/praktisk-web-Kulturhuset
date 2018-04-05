var express = require('express');
var app = express();
const port = 3000
const path = require('path');
const session = require('express-session');
const bodyParser = require("body-parser");

require("./api/config/sql");

app.set('view engine', 'ejs');
app.set('port', port);
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 5 * 60 * 1000 } // 5 minutter
}));


require('./api/routes/overview')(app);
require('./api/api')(app);

app.listen(port);
console.log(`port ${port} is now live on http://localhost:${port}`);