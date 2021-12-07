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

const getCityData = async(cities, res) => {
    var data = [];

    const result = await db.getDb().collection("cities").find({city: { $in : cities }}).toArray();
    for (let i = 0; i < result.length; i++)
    {
        result[i].city_data.id = i;
        data.push(result[i].city_data);
    }
    res.json(data);
}

const getWeekData = (city, res) => {
    db.getDb().collection("cities").findOne({city: city}, function(err, r) {
        res.json(r.week_data);
    });
}

const getDayData = (city, res) => {
    db.getDb().collection("cities").findOne({city: city}, function(err, r) {
        res.json(r.day_data);
    });
}

module.exports = {
    getCityData,
    getWeekData,
    getDayData,
};
