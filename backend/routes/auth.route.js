import express from 'express';
import {login,register,logout, verifyEmail} from '../controllers/auth.controller.js';
const router = express.Router();

// Login route
router.post('/login', login);

// Register route
router.post('/register', register );

// Logout route
router.post('/logout', logout);

router.post("/verify-email", verifyEmail);
export default router;
