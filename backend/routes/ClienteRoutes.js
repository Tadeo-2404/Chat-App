import express from "express"
import { ConfirmAccount, ForgotPassword, getRoom, JoinRoom, LogIn, NewPassword, Profile, Room, SignUp } from "../controllers/ClienteController.js";
const router = express.Router();

//public routes
router.post('/', LogIn);
router.post('/sign-up', SignUp)
router.post('/confirm-account/:token', ConfirmAccount)
router.post('/forgot-password', ForgotPassword)
router.put('/forgot-password/:token', NewPassword);

//private routes
router.post('/profile', Profile)
router.post('/join-room', JoinRoom)
router.get('/room', getRoom);
router.post('/room', Room);

export default router;