import express, { json } from 'express';
import connectDB from './config/db.js';
import { config } from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';

config();
connectDB();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/api/user', userRoutes);
app.use('/api/events', eventRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
