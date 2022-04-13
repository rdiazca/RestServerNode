const express = require('express')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();
    }

    middlewares(){
        //directorio público
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'get API'
            });
          });

          //Put para actualizar datos
          this.app.put('/api', (req, res) => {
            res.json({
                msg: 'put API'
            });
          });

          //Post para crear datos
          this.app.post('/api', (req, res) => {
            res.json({
                msg: 'post API'
            });
          });

          //Delete para eliminar datos
          this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'delete API'
            });
          });
    }

    listen(){
        this.app.listen(this.port, () => {
        console.log(`Example app listening on port ${this.port}`)
})
    }

}
module.exports = Server;