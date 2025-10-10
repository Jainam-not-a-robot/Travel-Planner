import express from 'express';
import cors from 'cors';
import placesRoutes from './routes/api/places.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/places', placesRoutes);

// Health check route (optional)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
