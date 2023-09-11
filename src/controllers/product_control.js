const prodModel = require('../models/product.model')

async function create_product(request, response){
        let {id, name, categoria, vendedor, descripcion, stock, img} = request.body

        const newProduct = new prodModel({
            id, name, categoria, vendedor, descripcion, stock, img
          })
          await newProduct.save()
          return response.status(201).json({msg: 'Producto creado', r: request.body})
    }
    
async function getProducts(request,response){

    const data = await prodModel.find()
    response.status(200).json({data})
  
  }

    module.exports = {
        create_product,
        getProducts
    }