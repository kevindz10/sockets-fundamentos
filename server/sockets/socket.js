const {io} = require('../server')

io.on('connection', (client)=>{
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'Bienvenido a la aplicación'
    })

    client.on('disconnect', ()=> {
        console.log('Usuario desconectado');
    })

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback)=>{
        
        console.log(data);
        client.broadcast.emit('enviarMensaje',data)


        // if(mensaje.usuario){
        //     callback({
        //         resp: 'Todo salió bien'
        //     })
        // }else{
        //     callback({
        //         resp: 'Todo salio muy MAL'
        //     })
        // }
    })


})