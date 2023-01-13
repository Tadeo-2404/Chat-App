import express from "express"
import dotenv from 'dotenv/config';
import clienteRoutes from './routes/ClienteRoutes.js';
import db from "./config/db.js";
import cors from "cors";

try {
  await db.authenticate();
  console.log(`Connection to database has been established successfully.`);
} catch (error) {
  console.error(`Unable to connect to the database:`, error);
}

const app = express();
const port = process.env.PORT || 4000
app.use(cors({'origin': '*'}));
app.use(express.json());


app.use('/client', clienteRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})