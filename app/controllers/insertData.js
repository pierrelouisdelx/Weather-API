const db = require("./db");
db.connect();

const getBg = (weather) =>
{
    var url = "http://192.168.1.93:3000/";
    switch(weather)
    {
        case 'weather-sunny':
            url += "sunny.jpg"
        case 'weather-partly-cloudy':
        case 'weather-hazy':
        case 'weather-cloudy':
        case 'weather-fog':
        case 'weather-rainy':
        case 'weather-partly-rainy':
        case 'weather-lightning':
        case 'weather-partly-lightning':
        case 'weather-pouring':
        case 'weather-snowy':
        case 'weather-partly-snowy':
        case 'weather-snowy-heavy':
        case 'weather-hail':
        case 'weather-windy':
        case 'weather-night':
        case 'weather-night-partly-cloudy':
    }

    return url;
}


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
