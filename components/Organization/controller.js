const store = require('./store')
function addChat(users){
    
    if(!users || !Array.isArray(users)){ //vamoes un condicional por si no hay usuario o sino hay el array de usuarios, si los usuarios son 
                                         //un array
return Promise.reject('Invalid User List')
    }    
    const chat = { //sino hay ningún error, crea nuestro chat
        users: users,
    };
    return store.add(chat) //y retornamos por medio de esta función "addChat", hacia el componente store, el chat.
    }
function listChats(userId){
    return store.list(userId);
}
module.exports = {
    addChat,
    listChats,
}