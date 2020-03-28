const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number
});

// model == collection
module.exports= mongoose.model('Author', authorSchema);