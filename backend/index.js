import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
dotenv.config();


const app = express();
app.use(express.json());
app.use(cookieParser());
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (err) {
        console.error(`MongoDB connection failed: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};



app.use('/api/auth', authRoutes);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(4000, () => {
            console.log('Server is running on port 4000');
        });
    } catch (err) {
        console.error('Failed to start the server:', err);
    }
};

startServer().catch(err => {
    console.error('Critical error while starting the application:', err);
});
