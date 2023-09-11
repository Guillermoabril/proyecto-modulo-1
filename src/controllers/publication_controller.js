const { query } = require('express')
const publicationModel= require('../models/publication.mod')

async function publication (request, response){

    try {
        
        
        const {user_id, description, name, source, reactions, comments} = request.body

        const NewPublication = new publicationModel ({ user_id, description, name, source, reactions, comments })

        await NewPublication.save()
        return response.status(200).json({msg: "publicado", publi: request.body})

    } catch (error) {
        return response.status(400).json({msg: "error", error})
    }

}

async function getPublic(request, response){
   try {
    const user_id = request.body
    
    const publications = await publicationModel.find(user_id)
    return response.json({ publications})
   } catch (error) {
    return response.status(400).json({msg: "error", error})
   }
}

async function orderPublications(request, response){
    try {
        
        const user_id = request.body
        const publication = await publicationModel.find(user_id).sort({createdAt: -1})

        return response.json({ publication })

    } catch (error) {
        return response.status(400).json({msg: "error", error})
    }
}
module.exports = {
    publication,
    getPublic,
    orderPublications
}