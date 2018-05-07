
// Add the application routes

var connection = require('./connection.js');

//==================== ORM ============================

module.exports = {
    selectall: (tableName) => {
        console.log("Hey I got here")

        // var query = "INSERT INTO burgers (burgers_name,devoured) VALUES ('triple cheese',0);" 
        var queryString = "SELECT * FROM " + tableName + ";";
        return new Promise((resolve, reject) => {
            connection.query(queryString, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    },
    insertone: (tableName, id) => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })

    }, //sql querying 
        updateone: (tableName, id) => {
            return new Promise((resolve, reject) => {
                resolve(data)
            })

        } //sql querying 

}
//===========================================================


