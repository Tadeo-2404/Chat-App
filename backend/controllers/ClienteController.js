import { Client } from "../models/Client.js";

const LogIn = (req, res) => {
    res.json({msg: 'login'});
}

const SignUp = async (req, res) => {
    const { password, email } = req.body; //leer formulario
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/; //regex validar password

    const validateEmail = await Client.findOne({where: {email: email}}); //buscar si existe cliente con email

    if(validateEmail) { //validar si existe email
        const e = new Error("Email already on use, try again");
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
        const e = new Error("Something went wrong");
        res.status(400).json({msg: e.message});
    }
}

const ForgotPassword = (req, res) => {
    res.json({msg: 'forgot-password'});
}

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
    ForgotPassword,
    Profile,
    JoinRoom,
    Room,
    getRoom
}
