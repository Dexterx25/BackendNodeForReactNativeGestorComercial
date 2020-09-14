const mongoose = require('mongoose');//una vez instalado mongoose con la terminal npm i mongoose,
                                    
const Schema = mongoose.Schema;  //separamos el módulo Shema de mongoose.shema
const mySchema = new Schema({    //inicializamos un nuevo esquema para mi esquema de la app
  
    userPerson: {  //generamos la asignación del tipo de dato de cada variable de la app fundamental
        //le pasamos como tipo objeto y así le damos más filtros a el esquema.
        type: Schema.ObjectId, //utilizamos el objectId que es uno de los tipos del esquema 
        ref: 'userPerson' //y la referencia será el User. De manera que vamos a relacionar el user por medio de el object
                      //id, el cual será el Id del usuario del esquema del mismo. un identificador de mongo
    },
  
        
        nameBusine: String,
        value: Number, 
        closeDate: String,
        state:Boolean, 
        description: String,//el mensaje va a ser un tipo de dato "string"
        date: Date,
    

})
    const model = mongoose.model('busine', mySchema); //nuestra tabla será "Message" y el segundo parámetro será el
                                                     //esquema que le hemos pasado.
  module.exports = model; //y ahora exportamos el model para utilizarlo en otras partes de la capta principal de nuesta app                                                   

