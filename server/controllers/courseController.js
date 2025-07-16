// server/controllers/courseController.js
import Course from '../models/course.js';

export const createCourse = async (req, res) => {
  const { name, courseCode, description, image, instructor } = req.body;

  if (!name || !courseCode || !description || !image || !instructor) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existing = await Course.findOne({ courseCode });
    if (existing) {
      return res.status(409).json({ message: 'Course code already exists' });
    }

    const newCourse = new Course({
      name,
      courseCode,
      description,
      image,
      instructor
    });

    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
};
