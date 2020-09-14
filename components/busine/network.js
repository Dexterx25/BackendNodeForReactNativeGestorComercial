const express = require('express');
const multer = require('multer');
const response = require('../../network/response'); //importamos el archivo local que tenemos con las funciones de response
                                            //y vamos de carpeta en carpeta hasta llegar al archivo "response" ../.
const controller = require('./controller');//exportamos el archivo controller dentro de nuestro
   const router = express.Router();                                              //archivo de capa de red de funciones http: network.js                                           
const upload = multer({ //asigamos a la función multer una contate y dentro le vamos a decir cómo queremos o qué
                          //queremos hacer con el multer y dónde quiero que me guarde el archivo
dest: 'public/files/'                         //dest de detino. y le vamos a asignar una dirección 
                                      //en este caso la carpeta uploads
});
   router.get("/", function(req, res){//Hacemos un get al controlador "router" del módulo de express.
const filterBusine = req.query.nameBusine || null;
controller.getBusines(filterBusine)//filtramos del controlador getMessages, la constante filterMessages que tenga la petición apuntada a
                                       //la query "user" de manera que el protocolo get lo filtraremos por nombre de usuarios.
.then((businessList)=>{
response.success(req, res, businessList, 200 )
})
.catch(e=>{//y generaremos una acción de estado cuando la promesa no se cumplió correctamente.
response.error(req, res, 'unexpected', 500, e)
});

// console.log(req.headers);//las cabeceras (headers), estarán en el request de manera
// // que a la hora de que le hagan un get en algún medio, 
// //entonces mandará datos del usuario y del software o entorno
// res.header({ //también podemos darle una respuesta header al cliente y como vemos sería como un
//     "custum-header": "Nuestro valor personalizado",//archivo Json de manera que podremos hacer 
// });
// //res.send('lista de mensajes');//aquí le damos un envio (send) al response (respuesta ) del método get.
// response.success(req, res, "lista de mensajes")//y aquí establecemos dicha función succes la cual tendrá el texto plano en el res del
// //archivo de donde la exportamos y así podemos controlar dichas respuestas desde afuera. y ya que le pasamos un tercer parámetro desde 
// //el arvhico response, acá en server lo podemos inicializar
})
router.post("/", upload.single('logo'), function(req, res){//hacemos uso del método get desde el controlador del módulo
   console.log(req.logo) 
   controller.addBusine( req.body.userPerson, req.body.nameBusine, req.body.value, req.body.closeDate, req.body.state, req.body.description)//debido a que los parámetros que tiene la función original estándo en el controller, 
   //creamos un parámetro nuevo en el componente de message el cual será 
   //req.body.chat para poder así sincronizar el chat con el mensaje y el usuario

   //son user y body, pues dentro de un envío de datos "post", vendrían en el cuerpo de la
                                                 //petición así que daríamos req.body.primerparam y req.body.secondParam
   .then((fullMessage)=>{  //then en la promesa será las acciones para cuando la promesa se cumpla.
 response.success(req, res, fullMessage, 201)//donde emularemos la función de exito
                                           //then veremos que la acción será la req, res el mensaje y el código de estado
   })   
   .catch(()=>{//catch en la promesa son las acciones para cuando la promsea no se cumpla.
response.error(req, res, "error interno", 400, "error en el controlador") //etonces acá mandaremos el mensaje de error del archivo response
                                                     //de la función error producto de la petición del controlador
                           //pasamos en catch, pues abrá un error en la promsa, toda la acción de error en caso de un mal post                          

   })
   //  console.log(req.query); //si le asignamos al request el query, ya podríamos hacer los parámetros por Query
   //  console.log(req.body);
   //  //res.status(201).send({error: '', body: 'creado correctamente'});
   //                      //podemos hacer un request en dodne mostramos el código de estado que, como es el de
                           //enviado "post", en donde mostraremos así que fue un estado de enviado (201) en el cual
                           //responderá al cliente un cuerpo vacio pero un mensaje de "llenado correctamnte".
// if(req.query.error == "ok"){ //si el query error del request da "ok"

// }else{ //pero sino, entonces daremos un mensaje de exito 
   
// }                       
})                       
router.patch("/:id", function(req, res){//aquí asignamos parámetros de la ruta ":id"
controller.updateBusineDates(
   req.params.id,
    req.body.description,
     req.body.nameBusine,
      req.body.value,
       req.body.closeDate,
        req.body.state,
         req.body.logo) //de los parámetros de la url "params" tomamos la "id"
                                                        //y para actualizar el mensaje (modificarlo), aparte del
                                                        //"id", necesitamos además el texto que será tomado del
                                                        //body
.then((data)=>{
   response.success(req, res, data, 200)
})
.catch(e=>{
   response.error(req, res, "error al actualizar datos", 500, e)
})

})
router.delete("/:id", function(req, res){//genereremos un router que tenga por parámetro la id
   controller.deleteMessage(req.params.id, req.params.body)//y de acuerdo a la petición por id, vamos a generar a controller los parámetro
                                                         //de acuerdo a la petición del parámetro por id "/:id" y el requerimeinto del cuerpo
   .then(()=>{ //debido a que esto es una petición protocolo delete, generaremos el .then para pasarle las respuestas indicadas.
     response.success(req, res, `usuario${req.params.id} eliminado`)// responderemos para el caso de que salga bien la acción, el "succes",
                                                  //de acuerdo para generar una respeusta
   })
   .catch(e =>{
     response.error(req, res, "error al tratar de eliminar usuario", 500, e) //y aquí catch para dar un error
   })

}) 
module.exports = router;