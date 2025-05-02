import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import courseRoutes from './routes/courses.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mount your API route here
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
