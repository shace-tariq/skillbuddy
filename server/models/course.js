import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String },
  strength: { type: Number },
  description: { type: String }
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
