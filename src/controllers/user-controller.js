const Usermodel = require('../models/users.mod')

async function create_user(request, response){

  let {username, email, age, name, lastname, password, pais} = request.body

  const newUser = new Usermodel({
    username, email, name, lastname, age, password, pais
  })

  const is_exist = await Usermodel.find ({"$or": [{username}, {email}]})

  if(is_exist.length === 0 || !is_exist){
    await newUser.save()
    return response.status(201).json({msg: 'Usuario creado', r: request.body})
  }
  return response.status(201).json({msg: 'Usuario existente'})
}

async function get_all_users(request,response){

  const data = await Usermodel.find()
  response.status(200).json({data})

}


module.exports = {
  create_user,
  get_all_users
};
