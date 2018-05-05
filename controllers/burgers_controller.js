
// Dependencies
// =============================================================
var express = require('express');
const Orm = require("../models/burger.js")


const Burger = require('../config/orm.js')
module.exports = {
    index: () => {
        Burger.all()
    },
    create: (data) => {},
    read: (id) => {
        Burger.get_by_id(id);
    },
    update: (data) => {},
    delete: (data) => {},
}

//index is all 
//should have a new controller and model for every different type of http call. 


