const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();
    }

    middlewares(){ //(.use)

        //CORS definir las páginas que pueden tener acceso a la API
        this.app.use(cors());

        //directorio público
        this.app.use( express.static('public') );
    }

    routes(){
       this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
        console.log(`Example app listening on port ${this.port}`)
})
    }

}
module.exports = Server;