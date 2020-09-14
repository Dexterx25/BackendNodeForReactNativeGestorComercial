const mongoose = require('mongoose') //importamos la dependencia de mongoose 
const Schema = mongoose.Schema; //generamos una constante que apunte al módulo Shema de la dependencia mongoose 
                              //para con ello generar los esquemas
const mySchema = new Schema({ //apuntamos una nueva constante myShema al instanciamiento de la clase Shema.
   namePerson: String,
   identityPerson:{type:Number, uniqued:true},
   phonePerson: {type:Number, uniqued:true},
   emailPerson:{type: String, uniqued: true}, 
   typeidentity:{type: String}
  })
const model =  mongoose.model('userPerson', mySchema) //generamos un apuntamiento a el módulo model de la dependencia mongoose
                                      //para así asignar el modelo del esquema que creamos arriba a la tabla que 
                                    //queremos que se llame que en este caso se va a llamar User
module.exports = model;//exportamos model para poder utilizarlo en store.