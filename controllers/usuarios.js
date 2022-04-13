const { response } = require('express');

const usuariosGet = (req, res = response) => {

  const {q, name = "No name", apikey, page=1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        name, 
        apikey,
        page,
        limit

    });
  }

  const usuariosPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;

    res.status(201).json({
      msg: 'post API - controlador',
      
      //mostrar lo que se mande desde el front-end
      nombre, 
      edad

    });
  }
  
  const usuariosPut = (req, res = response) => {
    const id = req.params.id;
      res.json({
        msg: 'put API - controlador',
        id,
      });
  }


const usuariosDelete = (req, res = response) => {
  const id = req.params.id;
    res.json({
      msg: 'delete API - controlador',
      id,
    });
}


  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosDelete
  }