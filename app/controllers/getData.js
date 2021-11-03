const db = require("./db");
db.connect();

const getCityData = async(cities, res) => {
    var data = [];

    const result = await db.getDb().collection("cities").find({city: { $in : cities }}).toArray();
    for (r of result)
        data.push(r.city_data);
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
