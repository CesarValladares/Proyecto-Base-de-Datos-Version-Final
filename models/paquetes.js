const mongoose = require('mongoose'); 

const PaqueteSchema = mongoose.Schema({
    objeto: String,
    peso: String, 
    size: String
}); 

const Paquete = module.exports = mongoose.model('Paquete', PaqueteSchema); 