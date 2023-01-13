import Sequelize from "sequelize";
import db from '../config/db.js';
import generateID from "../functions/generateID.js";

export const Client = db.define("client", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: generateID(),
  },
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: true,
  updatedAt: false,
  createdAt: false,
});

db.sync().then(() => {
  console.log('client table created successfully!');
}).catch((error) => {
  console.error('Unable to create client table : ', error);
});