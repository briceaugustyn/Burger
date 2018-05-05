//====================Router ======================
const BurgerController = require('../controllers/burgers_controller.js')

module.exports = (router) => {
    router.get('/:id', (req, res) => {
        console.log("reach router")
        res.render("index", { wishes: res })
        // BurgerController.read(req.params.id)
        //     .then((data) => {
        //          res.render('index', data)
        //      })
    })
   
}

//render only in here
//=====================================================