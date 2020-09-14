exports.success = function(req, res, message, status){
res.status(status || 200).send({  //para los mensajes de la función http, vamos a hacer un mensaje no plano:
    "error": "", //si está todo bien, habrá un error vacio
"body": message}); //y el mensaje que controlamos aquí pero instanciamos en el serverJs.


//respondemos con texto plano aquí en este archivo response.js
//y de igual forma le pasaremos la respuesta.send a la función exportada señalada con "success"
//el cual será el texto plano
};
exports.error = function(req, res, message, status, details){
    console.error(details)//
    res.status(status || 500).send({  //para los mensajes de la función http, vamos a hacer un mensaje no plano:
        error: message, //si está todo bien, habrá un error vacio
    body:""}); //y el mensaje que controlamos aquí pero instanciamos en el serverJs.
    
    
    //respondemos con texto plano aquí en este archivo response.js
    //y de igual forma le pasaremos la respuesta.send a la función exportada señalada con "success"
    //el cual será el texto plano
    }

