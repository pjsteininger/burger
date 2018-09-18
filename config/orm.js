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
    insertOne: function (burger_name, callback) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + burger_name + "')";
        connection.query(queryString, [burger_name], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });

    },
    updateOne: function (burger_id, callback) {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        var queryArray = [
            { devoured: true },
            { id: burger_id }
        ]
        connection.query(queryString, queryArray, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    deleteThis: function (burger_id, callback) {
        var queryString = "DELETE FROM burgers WHERE ?";
        connection.query(queryString, [{ id: burger_id }], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
}

module.exports = orm;
