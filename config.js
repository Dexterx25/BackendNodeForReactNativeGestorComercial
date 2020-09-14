const config = { //creamos un objeto en donde vamos a tener todas nuestras configuraciones, lo que vamos a hacer es configurar
                 //todo lo que tengamos
dbURL: process.env.DB_URL || "mongodb+srv://testDex:11097@clusterx.vgsbo.mongodb.net/dataBaseMongo?retryWrites=true&w=majority",//hacemos 
                                      //por ejemplo la configuración de la url de la base de datos
port: process.env.PORT || 3000,
host: process.env.HOST || 'http://localhost',
publicRoute: process.env.PUBLIC_ROUTE || 'app'
}
module.exports = config