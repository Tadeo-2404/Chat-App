import express from "express"
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection',  (socket) => {
  console.log(`ID: ${socket.id} se ha unido`)

  socket.on("join-room", (data) => {
    socket.join(data);
    console.log(`ID: ${socket.id} joined room ${data}`)
  });

  socket.on("send-message", (data) => {
    socket.to(data.room).emit("receive-message", data);
    console.log(data);
  })

  socket.on('disconnect', () => {
    console.log(`ID: ${socket.id} ha abandonado la sala`)
  })
})

server.listen(port, () => {
  console.log(`APP ON PORT: ${port}`)
})