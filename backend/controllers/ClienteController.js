import generateToken from "../functions/generateToken.js";
import { Client } from "../models/Client.js";

//public areas
const LogIn = async (req, res) => {
    const { password, email } = req.body;
    const validateEmail = await Client.findOne({where: {email: email}}); //buscar si existe cliente con email

    if(!validateEmail) { //validar si existe email
        const e = new Error("this user is not registered");
        res.status(400).json({msg: e.message});
        return;
    }

    const validatePassword = await validateEmail.comparePassword(password);
    if(!validatePassword) {
        const e = new Error("password is not correct");
        res.status(400).json({msg: e.message});
        return;
    }

    res.json({msg: 'login'});
}

const SignUp = async (req, res) => {
    const { username ,password, email } = req.body; //leer formulario
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/; //regex validar password

    const validateEmail = await Client.findOne({where: {email: email}}); //buscar si existe cliente con email
    const validateUsername = await Client.findOne({where: {username: username}});

    if(validateEmail) { //validar si existe email
        const e = new Error("Email already on use, try again");
        res.status(400).json({msg: e.message});
        return;
    } 

    if(validateUsername) {
        const e = new Error("Username already on use, try again");
        res.status(400).json({msg: e.message});
        return;
    }
    
    if(!validatePassword.test(password)) { //validar strong password
        const e = new Error("Password not valid, try again");
        res.status(400).json({msg: e.message});
        return;
    } 
    
    try {
        const client = new Client(req.body); //crear instancia de cliente
        const clientCreated = await client.save(); //guardar cliente en db
        res.json(clientCreated);
    } catch (error) {
        console.log(error);
        const e = new Error("Something went wrong");
        res.status(400).json({msg: e.message});
    }
}

const ConfirmAccount = async (req, res) => {
    const { token } = req.params; //leer token de url

    const client = await Client.findOne({where: {token: token}});

    if(!client) { //validar si existe email
        const e = new Error("Token invalid, try again");
        res.status(400).json({msg: e.message});
        return;
    }

    try {
        client.token = null; //generar token
        client.confirmed = true;
        await client.save(); //guardar token
        res.json({msg: 'account confirmed succesfuly'});
    } catch (e) {
        const error = new Error("Something went wrong");
        res.status(400).json({msg: error.message});
    }
}

const ForgotPassword = async (req, res) => {
    const { email } = req.body;

    //buscar cliente con correo
    const client = await Client.findOne({where: {email: email}});

    if(!client) { //validar si existe email
        const e = new Error("This email doesn't exist, try again");
        res.status(400).json({msg: e.message});
        return;
    }

    try {
        client.token = generateToken(); //generar token
        await client.save(); //guardar token
        res.json({msg: 'an email has been sent to confirm your account'});
    } catch (e) {
        const error = new Error("Something went wrong");
        res.status(400).json({msg: error.message});
    }
}

const NewPassword = async (req, res) => {
    res.json({msg: 'insert new password'})
}


//private routes
const Profile = (req, res) => {
    res.json({msg: 'profile'})
}

const JoinRoom = (req, res) => {
    res.json({msg: 'join-room'});
}

const getRoom = (req, res) => {
    res.json({msg: 'get room'});
}

const Room = (req, res) => {
    res.json({msg: 'room'});
}

export {
    LogIn,
    SignUp,
    ConfirmAccount,
    ForgotPassword,
    NewPassword,
    Profile,
    JoinRoom,
    Room,
    getRoom
}
