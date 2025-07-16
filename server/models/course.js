import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  courseCode: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,  // Image URL or path
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  studentsEnrolled: {
    type: Number,
    default: 0
  }
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
