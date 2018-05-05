
// Add the application routes

require('./connection.js');

//==================== ORM ============================


module.exports = {
   
    selectall: (tableName) => { "INSERT INTO burgers (burgers_name,devoured) VALUES ('triple cheese',0);" }, //sql shit in that function
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


