var express = require('express');
var router = express.Router();

//Importamos las funciones de usersService
const { getAll,getById,CreateUser,DeleteUser } = require('../services/usersService');

// Creacion del primer middleware, validador de id
const validateId = (req, res, next) => {
  // Si hago number un caracter, me devuelve Nan (lo que nos indica que no es numero). Por lo tanto usamos isNan() para saber si lo que obtuvimos despues de convertir es un numero
  if(isNaN(Number(req.params.id))){
    //res
    res.status(400).json({
      message: 'id no es un numero'
    })
    return;
  }
  else{
    req.params.id = Number(req.params.id);
  }

  next();
};

const validateBody = (req, res, next) => {
  if(!req.body.name){
    res.status(400).json({
      message: 'name es requerido'
    })

    return;
  }

  if(!req.body.age){
    res.status(400).json({
      message: 'age es requerido'
    })

    return;
  }

  if(isNaN(Number(req.body.age))){
    res.status(400).json({
      message: 'age es debe ser un numero'
    })

    return;
  }
  
  req.body.age = Number(req.body.age)


  

  next();
};



/* GET users listing. Esto esta escrito con funcion normal */
router.get('/', function(_, res) {
  const users = getAll();
  res.json(users);
});

// Get user by id. Esto esta escrito con funcion flecha. Usa el middleware validateId
router.get('/:id',validateId, (req,res) => {
  //Es importante recordar que lo que devuelve req viene en formato string, por eso hacemos la transformacion a number
  const user = getById(req.params.id);

  if(!user){
    res.status(404).json({
      message: "Id no encontrado"
    })
    return;
  }

  res.json(user);
})

// POST create users
router.post('/', validateBody, (req,res) => {
  const newUser = CreateUser(req.body);

  // res.json(newUser);
  res.json(newUser);
});

// DELETE by id
router.delete('/:id',validateId, (req,res) => {
  const id = req.params.id;
  let userOut = DeleteUser(id);

  if(userOut){
    res.status(200).json({
      message: "Usuario ${id} eliminado"
    });
  }
  else{
    res.status(404).json({
      message: "Id no encontrado"
    });
  }
});



module.exports = router;
