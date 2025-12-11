import express from 'express';
import moviesRoutes from './routes/moviesRoutes.js';
import authRoutes from './routes/authRoutes.js';
import watchlistRoutes from './routes/watchlistRoutes.js';
import { config } from 'dotenv';
import { connectDB, disconnectDB } from './dataBase/db.js';

config();
await connectDB();
const app = express(); 
const PORT = 3000;

app.use(express.json());

// Route handlers
app.use('/movies', moviesRoutes);
app.use('/auth', authRoutes);
app.use('/watchlist', watchlistRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
    console.error("Uncaught Exception:", err);
    await disconnectDB();
    process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
    console.log("SIGTERM received, shutting down gracefully");
    server.close(async () => {
        await disconnectDB();
        process.exit(0);
    });
});