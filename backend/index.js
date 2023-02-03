import express from "express" //import express
import dotenv from 'dotenv/config'; //import env var
import clienteRoutes from './routes/ClienteRoutes.js'; //import client routes
import db from "./config/db.js"; //import db
import http from 'http';
import cors from "cors"; //import cors policy
import { Server } from "socket.io";

//db connection
try {
  await db.authenticate();
  await db.sync();
  console.log(`Connection to database has been established successfully.`);
} catch (error) {
  console.error(`Unable to connect to the database:`, error);
}

const app = express(); //initialize express
const port = process.env.PORT || 4000
app.use(cors({'origin': '*'}));
app.use(express.json());
app.use('/client', clienteRoutes);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"]
  }
})

//socket.io connection
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("join-room", (data) => {
    socket.join(data);
    console.log(`user with ID: ${socket.id} joined room: ${data}`)
  })

  socket.on("disconnect", () => {
    console.log("user disconnected: ", socket.id);
  })
})

server.listen(port, () => {
  console.log(`App listening on port ${port}`)
})