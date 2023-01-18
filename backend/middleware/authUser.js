import jsonwebtoken from 'jsonwebtoken'; //import jwt
import { Client } from "../models/Client.js"; //import client model

const authUser = async (req, res, next) => {
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
          let token = req.headers.authorization.split(" ")[1]; //get token
          const decoded = jsonwebtoken.verify(token, process.env.PRIVATE_WORD); //verify jwt
          
          req.client = await Client.findOne({ attributes: ['id', 'username', 'email'], where: {id: decoded.id}}); //find client where id = decoded.id
          return next(); //jump next middleware
          
        } catch (error) {
            const e = new Error('invalid token, try again');
            res.status(403).json({msg: e.message});
        }
    } 

    next();
}

export default authUser;