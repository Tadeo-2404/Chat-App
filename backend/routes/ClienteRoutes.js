import express from "express"
import { ForgotPassword, getRoom, JoinRoom, LogIn, Profile, Room, SignUp } from "../controllers/ClienteController.js";
const router = express.Router();

//public routes
router.post('/', LogIn);

router.post('/sign-up', SignUp)

router.post('/forgot-password', ForgotPassword)

//private routes
router.post('/profile', Profile)

router.post('/join-room', JoinRoom)

router.get('/room', getRoom);
router.post('/room', Room);

export default router;