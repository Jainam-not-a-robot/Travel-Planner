# 🗺️ Travel Planner

A full-stack web application for exploring and discovering travel destinations across India. Built with modern technologies, this application provides an interactive map-based interface to browse places by state with detailed information and ratings.

## ✨ Features

- 🗺️ **Interactive India Map** - Explore places visually on an interactive map
- 🔍 **Place Search** - Search and filter places across Indian states
- 📍 **State-Based Browsing** - Browse destinations organized by states
- ⭐ **Ratings & Reviews** - View ratings and information for each place
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Beautiful and intuitive user interface with smooth animations
- 🚀 **Docker Support** - Easy deployment with Docker and Docker Compose

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **UI Components**: Radix UI, Shadcn/ui
- **Animations**: GSAP
- **HTTP Client**: Axios
- **State Management**: React Context API
- **Icons**: Lucide React, React Icons

### Backend
- **Runtime**: Node.js with ES Modules
- **Framework**: Express.js 5
- **Database**: PostgreSQL (pg)
- **Validation**: Joi
- **CORS**: Enabled for frontend integration
- **Environment**: Dotenv

### DevOps
- **Containerization**: Docker
- **Orchestration**: Docker Compose
- **Development**: Nodemon (hot reload)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Docker** & **Docker Compose** (optional, for containerized deployment)
- **PostgreSQL** (for local development without Docker)

## 🚀 Getting Started

### Option 1: Local Development (Without Docker)

#### 1. Clone the Repository
```bash
git clone https://github.com/Jainam-not-a-robot/Travel-Planner.git
cd Travel-Planner
```

#### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=8000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@localhost:5432/travel_planner
```

Run the backend server:
```bash
npm run dev    # Development with hot reload
# or
npm start      # Production
```

The backend will be available at `http://localhost:8000`

#### 3. Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env.local` file in the frontend directory:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

Run the frontend development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Option 2: Docker Deployment

#### Using Docker Compose

```bash
docker-compose up -d
```

This will start both frontend and backend services:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`

To stop the services:
```bash
docker-compose down
```

To rebuild images:
```bash
docker-compose build
```

## 📁 Project Structure

```
Travel-Planner/
├── backend/                    # Express.js API server
│   ├── src/
│   │   ├── index.js           # Entry point, Express app setup
│   │   ├── controllers/        # Request handlers
│   │   ├── models/            # Database queries
│   │   ├── routes/            # API routes
│   │   ├── schema/            # Joi validation schemas
│   │   └── database/          # Database connection pool
│   ├── Dockerfile             # Backend container config
│   └── package.json           # Backend dependencies
│
├── frontend/                   # Next.js React application
│   ├── src/
│   │   ├── app/               # Next.js app directory
│   │   │   ├── page.tsx       # Home page with map
│   │   │   ├── india-map.tsx  # Interactive map component
│   │   │   ├── layout.tsx     # Root layout
│   │   │   └── places/        # Places listing pages
│   │   ├── components/        # Reusable React components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utility functions
│   │   └── assets/            # Static assets
│   ├── public/                # Static files
│   ├── Dockerfile             # Frontend container config
│   └── package.json           # Frontend dependencies
│
├── docker-compose.yaml        # Multi-container orchestration
├── placesData.csv             # Initial places data
└── package.json               # Root package config
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:8000/api
```

### Endpoints

#### Get All States and Places
```http
GET /api/places/states
```
Returns all states and their associated places.

#### Get Places by State
```http
GET /api/places/states/:state
```
Returns all places for a specific state.

**Example:**
```bash
curl http://localhost:8000/api/places/states/maharashtra
```

## 🗂️ Data Structure

### Places Data (placesData.csv)
The application loads place information from CSV files containing:
- Place name
- State
- Description
- Ratings
- Images
- Category/Type

The data is stored in PostgreSQL and served through the REST API.

## 🎨 UI Components

- **NavCard** - Navigation header component
- **IndiaMap** - Interactive SVG map of India
- **PlacesCard** - Individual place card display
- **SearchOption** - Search and filter interfaces
- **FilterButton** - Category/type filtering
- **Sidebar** - Navigation sidebar with Radix UI

## 🔧 Configuration Files

- **`next.config.ts`** - Next.js configuration
- **`tsconfig.json`** - TypeScript configuration
- **`tailwind.config.ts`** - Tailwind CSS configuration
- **`postcss.config.mjs`** - PostCSS plugins
- **`eslint.config.mjs`** - ESLint rules

## 📦 Building for Production

### Frontend Build
```bash
cd frontend
npm run build
npm start
```

### Backend Production
```bash
cd backend
npm start
```

### Docker Production Build
```bash
docker-compose -f docker-compose.yaml up -d
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Environment Variables

### Backend (.env)
```env
PORT=8000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@localhost:5432/travel_planner
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXT_TELEMETRY_DISABLED=1
```

## 🚨 Troubleshooting

### Backend won't connect to database
- Ensure PostgreSQL is running
- Verify DATABASE_URL in `.env` is correct
- Check database credentials

### Frontend can't reach backend
- Verify NEXT_PUBLIC_BACKEND_URL is set correctly
- Ensure backend is running on the correct port
- Check CORS configuration in backend/src/index.js

### Docker build fails
- Clear Docker cache: `docker system prune`
- Rebuild images: `docker-compose build --no-cache`

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Jainam** - [GitHub Profile](https://github.com/Jainam-not-a-robot)

## 🔗 Links

- **Live Demo**: [travel-planner-web.vercel.app](https://travel-planner-web.vercel.app)
- **Repository**: [GitHub - Travel-Planner](https://github.com/Jainam-not-a-robot/Travel-Planner)

## 📞 Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

---

**Happy Traveling! 🌍✈️**
