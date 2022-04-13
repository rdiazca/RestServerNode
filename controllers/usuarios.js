const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    });
  }

  const usuariosPost = (req, res = responde) => {
    res.status(201).json({
      msg: 'post API - controlador'
    });
  }
  
  const usuariosPut = (req, res = responde) => {
      res.json({
        msg: 'put API - controlador'
      });
  }


const usuariosDelete = (req, res = responde) => {
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