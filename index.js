const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});
var cors = require('cors')

app.use(cors())

let players = [];

server.listen(3005, () => {
    console.log('listening on port 3005');
});

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

app.use(express.static('app/dist'));

app.get('/playerz',(req,res)=> {
    res.json({
        name: 'Kelvin',
        gayboi: true
    });
});

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('etellerandet', stuff => {
        console.log(stuff)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


app.get('/',(req,res)=> {
    res.sendFile(__dirname + '/app/dist/index.html');
});

