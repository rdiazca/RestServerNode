
const { Router } = require('express');

const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete } = require('../controllers/usuarios');
        
const router = Router();

router.get('/', usuariosGet);

  //Post para crear datos
  router.post('/', usuariosPost);

  //Put para actualizar datos
  router.put('/:id', usuariosPut);

  //Delete para eliminar datos
  router.delete('/', usuariosDelete);



module.exports = router;