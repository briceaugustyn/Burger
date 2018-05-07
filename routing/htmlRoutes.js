// Dependencies
// =============================================================
const router = require("express").Router()
const burgercontroler= require("../controllers/burgers_controller.js")
// =============================================================

router.get("/",(req,res,next)=>{
    //res.send("yolo");
burgercontroler.index()
    .then(data=>res.render("index",{burgers:data}))
    .catch (err=> console.log((err)))
})

module.exports=router;