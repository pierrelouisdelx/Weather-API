const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const search = require('./app/scraper/search');

const data = require('./app/controllers/getData');
const refreshData = require('./app/controllers/refreshData');

app.use(express.static(__dirname+'/assets/images/'));

app.get("/refresh", (req, res, next) => {
    refreshData();
});

app.post("/city", (req, res, next) => {
    if (req.body.cities != null)
        data.getCityData(req.body.cities, res);
});

app.get("/week/:city", (req, res, next) => {
    data.getWeekData(req.params.city, res);
});

app.get("/day/:city", (req, res, next) => {
    data.getDayData(req.params.city, res);
});

app.get("/search/:city", (req, res, next) => {
    console.log(req.params.city);
    search(req.params.city);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
