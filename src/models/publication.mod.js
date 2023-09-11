const mongoose = require('mongoose')

const publication_model = new mongoose.Schema({
    user_id: String,
    description: String,
    name: String,
    source: String, //img
    reactions: {type: Array, default: []},
    comments: {type: Array, default: []}, //{user_id: quien lo hizo, comment: "ud ta lindo"}
    type: {
        shared: Boolean, // true-false
        user_id_owner: String //quien lo publicó
    }
}, 
{timestamps: true})

const publicationModel = mongoose.model('publication', publication_model)

module.exports = publicationModel