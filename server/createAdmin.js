import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/user.js';

dotenv.config();

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await User.deleteMany({ email: 'admin@skillbuddy.com' });

  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await User.create({
    name: 'Super Admin',
    email: 'admin@skillbuddy.com',
    password: hashedPassword,
    role: 'admin'
  });

  console.log('✅ Clean admin created');
  mongoose.disconnect();
};

createAdmin();
