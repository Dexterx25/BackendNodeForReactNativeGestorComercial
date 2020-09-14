const store = require('./store');//lo importamos dentro de aquí, de donde venía.
const socket = require('../../socket').socket; //importamos el archivo socket pero en este caso 
                                                   //sólo justamente donde está la función socket,
                                        //donde tenemos nuestra instancia de socket.io       
function addBusine(userPerson, nameBusine,  value, closeDate, state, description ){ //cómo vamos a hacer una aplicación de mensajes, pues hacemos
  
return new Promise((resolve, reject) => {//hacemos un retorno de una nueva promesa con una función parámetro a dicha promesa 
                                                  //con parámetros "resolve" y "reject"
        if(!nameBusine|| !description || !value|| !closeDate||!state){ //hacemos un condicional para controlar el estado de la promesa cuando no tenga usuario y no tenga 
                                //mensaje que entrará en la función parámetro de la nueva Promose
                console.error('incomplyte dates, please, place all dates');//comprobamos en consola el estado de la promesa
          reject('Datos no llenados correctamente'); //lanzamos un mensaje en (reject)
         return false; //retornamos un "false" para terminar el condicional del reject

        } //comenzamos en resolve implícito
// let logoURL = ''; //inicializamos la url del archivo.
// if(logo){
//     logoURL = 'http://localhost:3000/app/files/'+ file.filename; //generamos el fileURL dirección en donde se va a 
//                                                               //alojar el archivo que vamos a cargar, dentro del 
//                                                               //servidor, el app y la carpeta files y va a tener en 
//                                                                //el params el filename
// }
        const Thebusine = { //creamos el objeto "fullDate" y le pasamos los elementos userPerson que lo guardaremos con el mismo
        // userPerson:userPerson,
        userPerson: userPerson,
        nameBusine: nameBusine,//userPerson,
        description: description,
        closeDate: closeDate,
        value:value,  
        state:state,
        date: new Date()               //luego creamos el busine que lo guardaremos con el mismo busine
       // y le asignamos al fullname el nombre del objeto que recibirá el fuleURL
    };
console.log(Thebusine);//y logeamos el objeto aquí
store.add(Thebusine)//creamos la utilización del fullDate.
//socket.io.emit('busine', fullDate)// y ahora lo que hacemos es justamente en el
                               // archivo donde tenemos socket.io, vamos a hacerle un manejo de eventos
                               //en donde le pasaremos el evento "busine" y la acción de pasar el objeto
                               //fullDate de todos los datos de este post
resolve(Thebusine)// creamos el resolve para completar la promesa de devolver el objeto fullDate


});
}

function getBusine(filterBusine){//le pasamos a la función del controlador "filterChat" el parámetro que va a caer en network el cual
                                  //es filterChat
        return new Promise((resolve, reject)=>{
                  resolve(store.list(filterBusine)) //y de igual manera para el resolve de la nueva promesa, le pasaremos el 
                                              //filtramiento del usuario.
        })
        
        //aquí devolvemos una promesa por coherencia, si todas nuestras funciones devuelven una
            //cuando queramos tocas, añadir o cambiar de nuestro código, saber lo que va a pasar,
                //va a devolver una promesa,
                    //en métodos reales no mock, fallas dentro del servidor de base de datos.
                        //algo falló con respecto a la base de datos, tiene que estar en la promesa retornable
    }
function updateBusineDates(id, nameBusine, value, closeDate, state,  descripction, logo){
    return new Promise(async(resolve, reject) =>{
      if(!id || !nameBusine || !value || !closeDate || !state || !descripction || !logo){
          reject('there are not values to modify of your busine')
         return false;
        }

      const result = await  store.updateBusine(id, nameBusine, value, closeDate, state, descripction, logo)
       resolve(result)
    
    })
}
function deleteMessage(id){
    return new Promise(  (resolve, reject) =>{
     if(!id){
         reject('id invalido')
         return false; //para que el código no siga adelante es muy común hacerle un return false
     }
    
        store.remove(id) //la Promesa que generamos será enviar a Store un removimiento de id
    .then(()=>{ //de manera que si sale bien, resolverá dicha acción
          resolve()
        })
    .catch(e =>{ //y si sale mal, hará "reject" pasándole la descripción del error.
         reject(e);
    })
    
    })
}
module.exports = { //una vez creada la función de utilidad de nuestra aplicación, la exportamos de
                     //esta forma: module.exports. Para así exportar a otros apartados de
                      //nuestras carpetas
        addBusine, //lo que exportaremos será la función
        getBusine,
        updateBusineDates,
        deleteMessage
}