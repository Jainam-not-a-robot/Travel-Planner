import express from 'express';
import cors from 'cors';
import placesRoutes from './routes/api/places.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/places', placesRoutes); 

app.listen(8000, () => console.log('Server running on port 8000'));
