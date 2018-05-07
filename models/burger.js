

const Orm = require("../config/orm.js")

//==================== Model ==========================


module.exports = {
    // all: Burger.all('TableName'),
     all: () => Orm.selectall('Burgers')
}
//=====================================================