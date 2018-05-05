

const Orm = require("../models/orm.js")

//==================== Model ==========================


module.exports = {
    all: Orm.all('TableName'),
    get_by_id: (id) => { Orm.one('Cats(table)', id) }
}
//=====================================================