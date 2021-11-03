const db = require("./db");
db.connect();

global.data = []

const getCityData = (cities, res) => {
        db.getDb().collection("cities").find({city: { $in : cities }}, function(err, r) {
            console.log(r);
        });
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
