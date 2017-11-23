const mongoose = require('mongoose'); 

const FacturaSchema = mongoose.Schema({
    precio: Number, 
    direccion_dest: String, 
    nombre_usuario_dest: String,
    paquete: String,
    fecha: String
}); 

const Factura = module.exports = mongoose.model('Factura', FacturaSchema); 