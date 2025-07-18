import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/user.js';

dotenv.config();

const createAdmin = async () => {
  try {
    awaitmongoose.connect(process.env.MONGO_URI);

    // Clean up existing admin
    await User.deleteMany({ email: 'admin@skillbuddy.com' });

    const hashedPassword = await bcrypt.hash('admin123', 10);

    const admin = await User.create({
      name: 'Super Admin',
      email: 'admin@skillbuddy.com',
      password: hashedPassword,
      role: 'admin'
    });

    console.log('✅ Clean admin created:', admin.email);
    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
};

createAdmin();
