import express from 'express';
import cors from 'cors';
import placesRoutes from './routes/api/places.js';

const app = express();

// Middleware
app.use(cors(
  {
    origin: ["https://travel-planner-web.vercel.app","https://localhost:3000"],
    credentials: true 
  },
));
app.use(express.json());

// Routes
app.use('/api/places', placesRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
