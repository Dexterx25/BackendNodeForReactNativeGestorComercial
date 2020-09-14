const socketIO = require('socket.io');//hay que hacer un requerimiento a el módulo
                                 //externo llamado "socket.io"
const socket = {}; //hacemos un objeto llamado "socket" para tenerlo como referencia, como un puntero en C
 //cada vez que cualquier cosa dentro del objeto cambie, nuestra variable 
 //socket va a estar actualizada
function connect(server){//hacemos una función llamada "connect" a la cual le pasamos el parámetro server
                      //será una función para manejar nuestra conexión
   socket.io = socketIO(server)//y para socketIO le pasamos el server, el servidor.
//inicializamos io dentro de la variable "socket" y lo que vamos a hacer con esto
//es guardar el servidor dentro de socket en donde se inicializó io

}
module.exports = {
    connect, //exportamos la función que maneja la conexión a el servido
    socket,//y el objeto que al macena la generación del servidor
}