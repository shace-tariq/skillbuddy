import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createCourse, getAllCourses } from '../controllers/courseController.js';

const router = express.Router();

router.post('/create', protect, createCourse);
router.get('/', getAllCourses);

export default router;
