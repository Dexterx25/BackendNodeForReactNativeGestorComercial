const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mySchema = new Schema({
//
empresa:[
    {
        type:   Schema.ObjectId, 
        ref: 'UserPerson',
    }
],
});
const model = mongoose.model('empresa', mySchema)
module.exports = model;