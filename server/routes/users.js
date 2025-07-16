import express from 'express';
import { getAllUsers, loginUser, createUser, registerUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

// Admin-only
router.get('/', protect, authorizeRoles('admin'), getAllUsers);
router.post('/my', protect, authorizeRoles('admin'), createUser);

// Public
router.post('/register', registerUser);  // 👈 Student signup — no token needed
router.post('/login', loginUser);        // Instructor/admin login

export default router;
