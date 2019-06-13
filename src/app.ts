import express from "express";
import templateEngine from "express-handlebars";

const port = process.env.PORT || 3000;

// Create a new express application instance
const app: express.Application = express();

app.engine('.hbs', templateEngine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index', { layout: "main" });
});

app.listen(port, () => {
    console.log(`Personal Website listening on port ${port}!`);
});