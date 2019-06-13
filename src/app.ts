import express from "express";
import templateEngine from "express-handlebars";
import path from "path";

import basicRouters from "./routers/index"
import projectRouters from "./routers/projects"

const port = process.env.PORT || 3000;

// Create a new express application instance
const app: express.Application = express();

//View Engine - Handlebars : https://handlebarsjs.com/
app.engine('.hbs', templateEngine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

//Allow access to static files, s stands for statics
const staticsPath = path.join(__dirname, '..', 'statics');
app.use("/s", express.static(staticsPath));

//Routes
app.get('/', function (req, res) {
    res.render('index', { layout: "main" });
});

app.use("/projects", projectRouters);
app.use("/api/v1", basicRouters);

app.listen(port, () => {
    console.log(`Personal Website listening on port ${port}!`);
});