const db = require("./db");
db.connect();

function insertData(city, city_url, week_url, link_url, city_data, week_data, day_data)
{
    var c = db.getDb().collection("cities");
    c.findOne({city: city}, function(err, res)
    {
        if (!res)
        {
            c.insertOne({
                city: city,
                city_url: city_url,
                week_url: week_url,
                day_url: link_url,
                city_data: city_data,
                week_data: week_data,
                day_data: day_data,
            }, (err, r) => {
                    if (err) throw err;
            });
        }
        else
        {
            var u = { $set: {city_data: city_data, week_data: week_data, day_data: day_data} };
            c.updateOne({city: city}, u, function(err, res) {
                if (err) throw err;
            });
        }
    });
}

module.exports = insertData;
