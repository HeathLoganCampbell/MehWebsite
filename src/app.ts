import express from "express";
import templateEngine from "express-handlebars";

import basicRouters from "./routers/index"

const port = process.env.PORT || 3000;

// Create a new express application instance
const app: express.Application = express();

//View Engine - Handlebars : https://handlebarsjs.com/
app.engine('.hbs', templateEngine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

//Routes
app.get('/', function (req, res) {
    res.render('index', { layout: "main" });
});

app.use("/api/v1", basicRouters);

app.listen(port, () => {
    console.log(`Personal Website listening on port ${port}!`);
});