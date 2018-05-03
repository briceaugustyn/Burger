//====================Router ======================
//const CatController = require('controller.js')

module.exports = (router) => {
    router.get('/:id', (req, res) => {
        console.log("reach router")
        // CatController.read(req.params.id)
        //     .then((data) => {
        //         res.render('index', data)
        //     })
    })
}

//render only in here
//=====================================================