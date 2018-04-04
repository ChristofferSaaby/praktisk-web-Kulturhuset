const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session    = require('express-session');
const port = 3000


app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 5 * 60 * 1000 } // 5 minutter
}));

require("./api/routes/overview") (app);

app.listen(port);
console.log(`Express server started http://localhost:${port}/`);