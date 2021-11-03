const db = require("./db");
db.connect();

const getCityData = async(cities, res) => {
    var data = [];

    const result = await db.getDb().collection("cities").find({city: { $in : cities }}).toArray();
    for (let i = 0; i < result.length; i++)
    {
        console.log(result[i].city_data);
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
