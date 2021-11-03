const db = require("../config/db.config");

//Database
var mongo = require('mongodb').MongoClient;
var url = `mongodb://${db.HOST}:${db.PORT}/${db.DB}`;
var _db;

module.exports = {
    connect: function() {
        mongo.connect(url, 
        {useNewUrlParser: true, useUnifiedTopology: true}, 
        function(err, client) {
            if (err) throw err;
            console.log("Database created");
            _db = client.db('weather-api');
        });
    },

    getDb: function() {
        return _db;
    },
};
