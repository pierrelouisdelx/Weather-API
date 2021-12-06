const browse = require('../scraper/browse');
const db = require("./db");
db.connect();

const appendCity = (city) => {
    db.getDb().collection("cities").findOne({city: city}, function(err, res) {
        browse(res.city, res.city_url, res.week_url, res.day_url);
    });
}

module.exports = appendCity;
