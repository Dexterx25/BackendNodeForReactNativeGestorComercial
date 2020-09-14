const store = require('./store') //aquí vamos a llamar a store para poder manejarlo desde este archivo
                               //el controlador siempre va a llamar a Store

function addUserPerson(namePerson, phonePerson, emailPerson, identityPerson, typeidentity){ //creamos una función que tenga por parámetro el name
   if(!namePerson||!phonePerson||!emailPerson||!identityPerson||typeidentity){ //y aquí hacemos comprobación de propiedades.
       return Promise.reject('place all atributes: Name, phone and e-mail ') //de manera que si no hay nombre mostramos un reject que diga que 
                                            //es inválido el nombre
   }
    const UserPerson = { //creamos un objeto llamado "user" y le pasamos como elementos, un atributo llamado "name" que 
                       //será igual al name de la función
        namePerson,
        identityPerson,
        phonePerson, 
        emailPerson,
        typeidentity
   };
   return store.add(UserPerson); //y luego retornamos hacia la función una addeción a el módulo store donde le 
                         //añadiremos el user. Guardamos el usuario
}
function listUsers(){ //hacemos una función de la lista de usuario
return store.list()
}




module.exports = {
    addUserPerson,  //y exportamos la función que va a llegar directamente el add de store.js 
    listUsers,
    
}