const db = require("./db");
db.connect();

function newCity(city, city_url, week_url, link_url)
{
    var c = db.getDb().collection("cities");
    c.insertOne({
        city: city,
        city_url: city_url,
        week_url: week_url,
        day_url: link_url,
        city_data: [],
        week_data: [],
        day_data: [],
    }, (err, r) => {
            if (err) throw err;
    });
}

module.exports = newCity;
