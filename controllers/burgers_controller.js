
// Dependencies
// =============================================================

const Burger = require("../models/burger.js")

module.exports = {
    index: () =>Burger.all(),
    create: (data) => {},
    read: (id) => {console.log("in the read")
        return Burger.get_by_id(id);
    },
    update: (data) => {},
    delete: (data) => {},
}

//index is all 
//should have a new controller and model for every different type of http call. 


// 