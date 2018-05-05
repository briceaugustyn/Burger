

const Burger = require("../config/orm.js")

//==================== Model ==========================


module.exports = {
    // all: Burger.all('TableName'),
     get_by_id: (id) => { Burger.one('Cats(table)', id) }
}
//=====================================================