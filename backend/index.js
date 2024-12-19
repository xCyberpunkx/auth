import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js';
dotenv.config();

const app = express();
app.use(express.json());
// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (err) {
        console.error(`MongoDB connection failed: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

// Set up a basic route

app.use('/api/auth', authRoutes);
// Start the server
const startServer = async () => {
    try {
        // Ensure the database is connected before starting the server
        await connectDB();

        app.listen(4000, () => {
            console.log('Server is running on port 4000');
        });
    } catch (err) {
        console.error('Failed to start the server:', err);
    }
};

// Handle the promise returned by startServer
startServer().catch(err => {
    console.error('Critical error while starting the application:', err);
});
