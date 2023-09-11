const mongoose = require('mongoose')


const uri = `mongodb+srv://josereyes16:soyyo_123@mongodb-dia1.nulipjz.mongodb.net/ggred`

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=> console.log('connected to mongo'))
    .catch((error)=> console.log(error))

    module.exports = mongoose