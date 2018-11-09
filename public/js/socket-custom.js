var socket= io();
        socket.on('connect', function(){
            console.log('conectando con el servidor');
        });

        socket.on('disconnect', function(){
            console.log('se perdio conección con el servidor');
        });

        //enviar infomación
        socket.emit('enviarMensaje', {
            usuario: 'Kevin',
            mensaje: 'hi world'
        }, function(resp){
            console.log('respuesta server: ',resp);
        });

        //escuchar información
        socket.on('enviarMensaje', function(mensaje){
            console.log('Servidor', mensaje);

        });