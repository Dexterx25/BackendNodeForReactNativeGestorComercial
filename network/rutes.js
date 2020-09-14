
const express = require('express');
const message = require('../components/busine/network')//importamos el archivo de rutas
const user =  require('../components/user/network')//importamos el archivo network y lo señalaremos como user
const chat = require('../components/chat/network')
const routes = function(server){//hacemos una función de rutas en donde vamos 
                                //a necesitar el servidor de express para añadir
server.use('/busine', message); //nuestra ruta se llama "message" y lo que vamos a hacer es que
server.use('/userPerson', user);  //de manera que aquí haremos la ruta para el usuario
server.use('/chat', chat);
//queremos que se traiga el mensaje pasándolo a través del uso 
                         //de la ruta "message" 
}
module.exports = routes;//exportamos el módulo "routes"  