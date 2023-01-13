import Sequelize from "sequelize";
import db from '../config/db.js';
import generateID from "../functions/generateID.js";
import bcrypt from 'bcrypt';

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

  hooks: {
    beforeCreate: async (client) => {
      if (client.password) {
       const salt = await bcrypt.genSaltSync(10, 'a');
       client.password = bcrypt.hashSync(client.password, salt);
      }
     }
  }
});
