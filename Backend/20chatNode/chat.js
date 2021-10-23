const path=require('path');
const express=require('express');
const serverHttp=require('http');
const socket=require('socket.io');

const app  = express();
const http = serverHttp.Server(app);
const io   = socket(http);
const port=8000

// app.set('port',process.env.PORT,8000)
let dir=path.join(__dirname,'public')

app.use(express.static(dir))

io.on('connection', function(socket) {
    console.log('New user connected');

    socket.on('nuevo mensaje', (msj)=> {
        io.emit('nuevo mensaje', msj);
    });
    
    socket.on('chat:message',(data)=>{
        io.emit('chat:message', data);
    })

    socket.on('chat:typing',(data)=>{
        socket.broadcast.emit('chat:typing',data)
    })
    
    socket.on('disconnect', ()=> {
        console.log('Usuario desconectado');
    });
});









// app.get('/', function(req, res) {
//     res.sendFile( __dirname + '/chat.html');
// });



http.listen(port, ()=> {
    console.log(`listening on *:${port}`);
});