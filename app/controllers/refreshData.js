const browse = require('../scraper/browse');
const db = require("./db");
db.connect();

const refreshData = () => {
    db.getDb().collection("cities").find({}).toArray(function(err, res) {
        for (data of res)
        {
            browse(data.city, data.city_url, data.week_url, data.day_url);
        }
    });
}

module.exports = refreshData;
