import express from "express"
import { ConfirmAccount, ForgotPassword, getRoom, JoinRoom, LogIn, NewPassword, Profile, Room, SignUp, VerifyToken } from "../controllers/ClienteController.js";
import authUser from "../middleware/authUser.js";
const router = express.Router();

//public routes
router.post('/', LogIn);
router.post('/sign-up', SignUp)
router.post('/confirm-account/:token', ConfirmAccount)
router.post('/forgot-password', ForgotPassword)
router.get('/forgot-password/:token', VerifyToken);
router.put('/forgot-password/:token', NewPassword);

//private routes
router.post('/profile', authUser ,Profile)
router.post('/join-room', authUser ,JoinRoom)
router.get('/room', authUser ,getRoom);
router.post('/room', authUser ,Room);

export default router;