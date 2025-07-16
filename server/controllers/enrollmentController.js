import Enrollment from '../models/enrollment.js';

export const enrollInCourse = async (req, res) => {
  const { courseId } = req.body;

  const alreadyEnrolled = await Enrollment.findOne({ userId: req.user._id, courseId });

  if (alreadyEnrolled) {
    return res.status(400).json({ message: 'Already enrolled in this course' });
  }

  const enrollment = await Enrollment.create({ userId: req.user._id, courseId });

  res.status(201).json(enrollment);
};

export const getUserEnrollments = async (req, res) => {
  const enrollments = await Enrollment.find({ userId: req.user._id }).populate('courseId');
  res.json(enrollments);
};
