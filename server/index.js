import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';  // Ensure mongoose is imported for DB connection
import connectDB from './config/db.js';
import userRoutes from './routes/users.js';  // User routes for login/registration
import courseRoutes from './routes/courses.js';  // Course routes

dotenv.config();



// Connect to DB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());  // Middleware for JSON requests

// Routes
app.use('/api/users', userRoutes);  // User routes
app.use('/api/courses', courseRoutes);  // Mount course routes here

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

