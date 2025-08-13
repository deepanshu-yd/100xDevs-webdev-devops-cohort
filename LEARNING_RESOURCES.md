# 📖 Backend Development Learning Resources

## **Essential Tools & Setup**

### **Development Environment**
```bash
# Node.js Version Manager
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts

# Package Managers
npm install -g yarn pnpm

# Essential Global Tools
npm install -g nodemon typescript ts-node
npm install -g @nestjs/cli prisma
```

### **Database Setup**
```bash
# MongoDB (Local Development)
# Download from: https://www.mongodb.com/try/download/community

# PostgreSQL (Local Development)
# Download from: https://www.postgresql.org/download/

# Redis (Local Development)
# Download from: https://redis.io/download

# Docker (Recommended for all databases)
docker run -d -p 27017:27017 --name mongodb mongo
docker run -d -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=password postgres
docker run -d -p 6379:6379 --name redis redis
```

---

## **📚 Learning Resources by Topic**

### **JavaScript & Node.js Fundamentals**
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [You Don't Know JS Book Series](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript.info](https://javascript.info/)

### **Express.js & API Development**
- [Express.js Official Guide](https://expressjs.com/en/guide/routing.html)
- [RESTful API Design](https://restfulapi.net/)
- [HTTP Status Codes](https://httpstatuses.com/)
- [Postman Learning Center](https://learning.postman.com/)

### **Database & MongoDB**
- [MongoDB University](https://university.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Database Design Principles](https://www.geeksforgeeks.org/database-design-techniques-for-nosql-databases/)

### **Authentication & Security**
- [JWT.io](https://jwt.io/introduction)
- [OWASP Security Guidelines](https://owasp.org/www-project-api-security/)
- [bcrypt Documentation](https://github.com/kelektiv/node.bcrypt.js)
- [Auth0 Blog](https://auth0.com/blog/)

### **Testing**
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing JavaScript Applications](https://testingjavascript.com/)
- [Supertest for API Testing](https://github.com/visionmedia/supertest)

### **TypeScript**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript with Node.js](https://github.com/microsoft/TypeScript-Node-Starter)
- [Type Challenges](https://github.com/type-challenges/type-challenges)

### **Advanced Topics**
- [Socket.IO Documentation](https://socket.io/docs/v4/)
- [Microservices Patterns](https://microservices.io/)
- [Redis Documentation](https://redis.io/documentation)
- [Docker Documentation](https://docs.docker.com/)

---

## **🛠️ Essential VS Code Extensions**

```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-json",
    "rangav.vscode-thunder-client",
    "ms-vscode-remote.remote-containers",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-yaml"
  ]
}
```

---

## **📋 Useful Code Snippets**

### **Express Server Boilerplate**
```javascript
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### **MongoDB Connection**
```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

### **JWT Middleware**
```javascript
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
```

### **Error Handling Class**
```javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
```

### **Async Handler Wrapper**
```javascript
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
```

---

## **🧪 Testing Templates**

### **Jest Setup (jest.config.js)**
```javascript
module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/app.js',
    '!src/server.js'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html']
};
```

### **API Test Template**
```javascript
const request = require('supertest');
const app = require('../src/app');

describe('User Authentication', () => {
  describe('POST /api/auth/signup', () => {
    it('should create a new user', async () => {
      const userData = {
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User'
      };

      const response = await request(app)
        .post('/api/auth/signup')
        .send(userData)
        .expect(201);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('User created successfully');
    });
  });
});
```

---

## **🚀 Deployment Quick Guides**

### **Heroku Deployment**
```bash
# Install Heroku CLI
npm install -g heroku

# Login and create app
heroku login
heroku create your-app-name

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-jwt-secret

# Deploy
git push heroku main
```

### **Railway Deployment**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### **Docker Configuration**
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - mongo
      - redis

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  mongo_data:
```

---

## **📊 Performance Monitoring**

### **Basic Monitoring Setup**
```javascript
const express = require('express');
const prometheus = require('prom-client');

// Create metrics
const httpRequestsTotal = new prometheus.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route']
});

// Middleware to collect metrics
const metricsMiddleware = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestsTotal.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status: res.statusCode
    });
    httpRequestDuration.observe({
      method: req.method,
      route: req.route?.path || req.path
    }, duration);
  });
  
  next();
};

module.exports = { metricsMiddleware, prometheus };
```

---

## **📱 Useful Commands Cheat Sheet**

### **npm/yarn Commands**
```bash
# Package management
npm init -y
npm install express mongoose dotenv
npm install -D jest supertest nodemon

# Scripts (add to package.json)
npm run dev         # nodemon src/app.js
npm run test        # jest
npm run test:watch  # jest --watch
npm run build       # for TypeScript projects
```

### **Git Workflow**
```bash
# Feature development
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# Create pull request, then merge and cleanup
git checkout main
git pull origin main
git branch -d feature/new-feature
```

### **Database Commands**
```bash
# MongoDB
mongosh
use your_database_name
db.users.find()
db.users.insertOne({name: "Test"})

# PostgreSQL
psql -U username -d database_name
\l                    # List databases
\dt                   # List tables
SELECT * FROM users;
```

This resource guide should serve as your quick reference throughout your backend development journey! 🚀