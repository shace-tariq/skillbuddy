import express from 'express';
import Course from '../models/course.js';

const router = express.Router();

// GET /api/courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching courses' });
  }
});

export default router;
