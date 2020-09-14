const express = require('express'); //importamos el módulo nativo de express para comenzar a hacer el servidor
//Otra forma de importar el módulo de express:
const app = express();//aquí inicializamos la app, de esta manera.
const server = require('http').Server(app) //lo que haremos será importar el módulo nativo 
                                       //servidor HTTP el cual anidaremos a la app express.
const config = require('./config');

const cors = require('cors')
const bodyParser = require('body-parser');//lo traemos del requerimiento de la extensión de express: "body-parser"
                                           //para poder así manejar el body de la petición
const socket = require('./socket')//importamos el objeto sockent en donde se genera el servidor de webSocket
//const router = require('./components/message/network')
const routes = require('./network/rutes'); //y ahora lo que hacemoes es importar un archivo de rutas nuevas que va a venir 
//del que hicimos recientemente en el cual le controlamos el estado de las rutas de nuestra aplicación

const db = require('./db') //inicializamos la base de datos
app.use(bodyParser.json());//Usamos el módulo "bodyParser" de la app express de manera que lo tendremos listo el cual será relacionado con
                           // el formato Json
app.use(bodyParser.urlencoded({extended: false}))//Este urlEcoded es un método que tendrá por parámetro un 
                                     //extended igual a false dependiendo de si queremos hacer objetos complejos
                                     //o no
db(config.dbURL)                            
// app.use(router); //la manera de poder añadir el módulo router a la plicación de express es por medio de esto. 
                   //para añadirlo en las necesidades que tengamos como por ejemplo el método Json para el body
app.use(cors());
    socket.connect(server); //aquí le pasamos el servidor http a socket dentro de la función connect, dentro de su parámetro

                   routes(app)//y aquí le asignamos las rutas a la app de js, al servidor de js que hemos instanciado aquí en este servidor.
app.use('/'+config.publicRoute, express.static('public'));//aquí, desde la aplicación de express, usamos una ruta "/app" que hará
//un archivo estatico de express dede la carpeta "public"

server.listen(config.port, function(){ //vemos que el servidor unificado de http con express, lo ponemos en el 
                              //puerto 3000 local
    console.log('http://localhost:3000')
})
console.log(`la aplicación está en el ${config.host}:${config.port}`);