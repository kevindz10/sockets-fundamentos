const express = require('express');
const soketIO = require('socket.io')
const hhtp= require('http')
const path = require('path');

const app = express();
let server = hhtp.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = soketIO(server)
require('./sockets/socket')


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});