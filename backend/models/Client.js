import Sequelize from "sequelize";
import db from '../config/db.js';
import bcrypt from 'bcrypt';
import generateToken from "../functions/generateToken.js";

export const Client = db.define("Clients", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  confirmed: {
    type: Sequelize.STRING,
    defaultValue: false
  },
  token: {
    type: Sequelize.STRING,
    defaultValue: null
  }
}, {
  timestamps: true,
  updatedAt: false,
  createdAt: false,

  hooks: {
    beforeCreate: async (client) => {
      client.token = generateToken();
      if (client.password) {
       const salt = await bcrypt.genSaltSync(10, 'a');
       client.password = bcrypt.hashSync(client.password, salt);
      }
     },
  }
});

Client.prototype.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};