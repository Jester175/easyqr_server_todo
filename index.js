import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import corsMiddleware from './middleware/cors.middleware.js';
import todoRouter from './routes/todo.route.js';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const PASSWORD_DB = process.env.PASSWORD_DB;
const USERNAME_DB = process.env.USERNAME_DB;
const DB_URL = `mongodb+srv://${USERNAME_DB}:${PASSWORD_DB}@cluster0.2sxo7je.mongodb.net/`

app.use(corsMiddleware);
app.use(express.json());
app.use('/api', todoRouter);


const startApp = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log(`Server started on ${PORT}, http://localhost:${PORT}`));
    } catch (error) {
        console.log(error.message)
    }
}

startApp();