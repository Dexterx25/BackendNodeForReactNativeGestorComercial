const db = require('mongoose');//traemos la base de datos del módulo "mongoose"
const Model = require('./model');
  


function addBusinee(Thebusine){ //creamos la función de addMessage que recogerá mensajes por haber colocado el 
                       //parámetro de esta función como "message"
const myBusine = new Model(Thebusine);//asignamos una constante instanciando  la clase Model con parámetro 
                                     //message, de los mensajes de añadidura "addMessage"
myBusine.save();//y guardamos el instanciamiento del Model
//y esta función lo unico que hará es introducir (push) dentro de la lista (list) de mensajes, un mensaje (message)

}
async function getBusine(filterBusine){ //ahora haremos una función asincrona para la obtención de mensajes filtrando por el 
                                       //parámetro "filterChat"
 return new Promise((resolve, reject) => { //hacemos una promesa a el recuperamiento de datos, la busqueda
                                        //filtrada
  let filter = {}; //de manera que haremos una variable "let"  llamada "filter" asignándole un objeto inicializado en vacio Json
  if(filterBusine !== null){ //hacemos un condicional en donde si el filterChat es diferente a nulo, entonces vamos a asignarle a filter
filter = {busine: filterBusine}; //el usuario por el filter user
 }
 
 Model.find(filter)//hacemos una constante de messages con una espera a la busqueda del model
                                          //de los mensajes pero sin parámetro
.populate('userPersone')//utilizamos la función pupulate para poder popular un campo, de manera que le traemos todos los datos
                   //o elemntos que tenga
 .exec((error, populated)=>{//y sólo esto puede funcionar por medio de la ejecución que será ".exec()"
 //el ejecutador de la petición populate, va a tener una arrow functión que va a tener dos parámetros, uno de error y uno de populated
  //populatedate
if(error){//de manera que si hay un error con la base de datos, entonces pasaremos un reject para manejar el error  
  reject(error)
  return false;
}//y si no etonces resolveremos
  resolve(populated)

 });
});                                    

  }
async function updateBusine(id, nameBusine){//aquí haremos una función asincrona para la modifiación del texto 
                                      //teniendo en cuenta los parámetros como el id y el mensaje que serán los 
                                      //parámetros de filtrado
const foundBusine = await Model.findOne({ //luego asignaremos una constante a la petición asincrona de la busqueda
                                        //de un objeto del model 

  _id: id,                             //el cual tenga el id requerido igual al id almacenado
})
foundBusine.nameBusine = nameBusine; //para el mensaje del fullMessage encontrado lo asignaremos al mensaje de la 
                             //función updateText
const newBusine = foundBusine.save() 

return newBusine; //y retornamos el nuevo mensaje
}
function deleteBusine(id){ //aquí generaremos la función que tenga por parámetro la id y le pasaremos por ejecución, como en todas las demas
                         //la eliminación de uno, dependiendo de la ID
 return Model.deleteOne({
    _id: id
  });
}
  module.exports = { //creamos el código de exportación del archivo en que estamos cuyo cuerpo será la asignación
                  //de los nombres que tiene cada función
    add: addBusinee,//señalamos "add" para la función de "addMessage"
    list: getBusine,//señalamos "list" para la función de "getMessage" y lo utilizaremos así en controller.js
    updateBusineDates: updateBusine,
    remove:deleteBusine,
    //get
    //update
    //delete
}
