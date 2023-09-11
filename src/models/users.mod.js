const mongoose = require('mongoose')

const user_model = new mongoose.Schema(
    {
        username: String,
        email: String,
        name: String,
        lastName: String,
        age: Number,
        password: {type: String, require: true},
        pais: String
    }
)

const UserModel = mongoose.model('usuarios', user_model)

module.exports = UserModel