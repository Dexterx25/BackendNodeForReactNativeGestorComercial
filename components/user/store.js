
const Model = require('./model')  //importamos el model del que viene del archivo model en donde está nuestro
                                    //componente donde tenemos todos estos archivos

function addUserPerson(UserPerson){ //creamos función para poder agregar un usuario, de manera que le pasamos por parámetro 
                       //el user
    const myUser = new Model(UserPerson) // y hacemos un selector dirigido hacia el instanciamiento de una nueva clase 
                                    //Model que le vamos a pasar de igual forma el usuario como parámetro
  return  myUser.save()  //y guardamos los cambio con el guardado del nuevo instanciamiento de la clase que instanciamos
   //MyUser.save() es una promesa
}


function listUsers(){ //hacemos función de lista de usuario
return Model.find();//hacemos un retornamiento al find del modelo, una busqueda a nuestro Model que esta
                    //función listUsers va a estar llamada por el controller.js
}
module.exports = { //hacemos un module.export para poder exportar todas las funciones que hagamos
    add: addUserPerson, //agregamos el objeto add a la función addUser que dicho add tendrá los datos del controller
    list: listUsers,
}