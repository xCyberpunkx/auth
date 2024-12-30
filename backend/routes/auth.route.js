import express from 'express';
import {login,register,logout, verifyEmail, forgotPassword, resetPassword, checkAuth} from '../controllers/auth.controller.js';
import {verifyToken} from '../middleware/token.middleware.js';
const router = express.Router();


router.post('/login', login);

router.post('/register', register );

router.post('/logout', logout);

router.post("/verify-email", verifyEmail);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

router.get("/check-auth", verifyToken, checkAuth);
export default router;
