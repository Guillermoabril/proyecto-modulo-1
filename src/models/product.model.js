const mongoose = require('mongoose')

const product_model = new mongoose.Schema(
    {
        id: Number,
        name: String,
        categoria: String,
        vendedor: String,
        descripcion: String,
        stock: Number,
        img: String
    }
)

const ProductModel = mongoose.model('productos', product_model)

module.exports = ProductModel