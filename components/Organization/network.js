const express = require('express')//importamos el módulo nativo de nodeJs: express 
const response = require('../../network/response')//importamos la response de manera que hacemos lo mismo
const controller = require('./controller')//importamos el controlador de este components
const router = express.Router(); //y inicializamos el router, módulo de express encargadod de las rutas

router.post('/', function(req, res){
controller.addChat(req.body.users) //esta es la petición del "router.post"
.then(data => {
response.success(req, res, data, 201) //
})
.catch(e =>{
response.error(req, res, 'internal Error',500, e)
})
})
router.get('/:userId', function(req, res){
    controller.listChats(req.params.userId) //esta es la petición del router de obtención "router.get"
    .then(users => {
response.success(req, res, users, 200)
    })
    .catch(e =>{
        response.error(req, res, 'chats Not Found', 500, e )
    })
})
module.exports = router;