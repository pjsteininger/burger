var connection = require("connection.js");
var orm = {
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function (burger, callback) {
        var queryString = "INSERT INTO burgers VALUES (burger_name) ?;";
        connection.query(queryString, burger, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });

    },
    updateOne: function (callback) {

    }
}

module.exports = orm;
