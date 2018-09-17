var connection = require("./connection.js");
var orm = {
    selectAll: function (callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function (burger, callback) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (burger)";
        connection.query(queryString, burger, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });

    },
    updateOne: function (callback) {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        var queryArray = [
            { devoured: true },
            { id: burgerID }
        ]
        connection.query(queryString, queryArray, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
}

module.exports = orm;
