const express = require("express")
const app = express();

//Allows us to use the server to use socket io
const server = require('http').Server(app);
const io = require('socket.io')(server);
const {v4:uuidV4 } = require('uuid');

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {

    console.log("setting uuid")
    res.redirect(`/${uuidV4()}`)

})

app.get("/:room", (req, res) => {

    console.log("I am here");
    res.render('room', {roomId: req.params.room })
})

io.on('connection', socket =>{

    socket.on('join-room', (roomId, userId) =>{
        //console.log(roomId, userId);
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-connected', userId);

        socket.on('disconnect', ()=>{

            socket.to(roomId).broadcast.emit('user-disconnected', userId);
        })
    })
})

app.set('port', process.env.PORT || '3000');
server.listen(process.env.PORT || '3000');