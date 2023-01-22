import express from "express" //import express
import dotenv from 'dotenv/config'; //import env var
import clienteRoutes from './routes/ClienteRoutes.js'; //import client routes
import db from "./config/db.js"; //import db
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
const io = new Server(3000); //initialize socket.io server
const port = process.env.PORT || 4000
app.use(cors({'origin': '*'}));
app.use(express.json());

app.use('/client', clienteRoutes);

//socket.io connection
io.on("connection", (socket) => {
  socket.emit("hello", "world");

  socket.on("howdy", (arg) => {
    console.log(arg);
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})