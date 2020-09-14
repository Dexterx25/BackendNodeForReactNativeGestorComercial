const db = require('mongoose'); //importamos la dependencia mongoose aquí
db.Promise = global.Promise; //generamos la promesa global
//var uri = "mongodb+srv://testDex:11097@clusterx.vgsbo.mongodb.net/dataBaseMongo?retryWrites=true&w=majority";

async function connect(URL){ //hacemos una función para la conección a la base de datos con MongoAtlas

await db.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true,})
.then(db => console.log('db connected'))
.catch(err => console.log(err));  
}


module.exports = connect; //y aquí exportamos para poder utilizarlo en otra parte