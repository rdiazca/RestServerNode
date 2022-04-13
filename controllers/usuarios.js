const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
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
    res.json({
      msg: 'delete API - controlador'
    });
}


  module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosDelete
  }