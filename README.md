This is the backend part of my graduation project developed during the Web & Mobile Bootcamp at La Capsule. The project serves as the server-side logic for the frontend application, providing a RESTful API for data management.

**Features**
RESTful API for managing user data and other resources
User authentication and authorization
Integration with MongoDB for data storage
Error handling and validation for API requests
Environment configuration using dotenv
Technologies Used
Node.js
Express.js
MongoDB
Mongoose
JWT (JSON Web Tokens) for authentication
dotenv for environment variables
Git & GitHub


API Endpoints
User Endpoints
POST /api/users/register: Register a new user
POST /api/users/login: Authenticate an existing user and receive a JWT
Resource Endpoints
GET /api/resources: Retrieve a list of resources
POST /api/resources: Create a new resource
GET /api/resources/
: Retrieve a specific resource by ID
PUT /api/resources/
: Update a resource by ID
DELETE /api/resources/
: Delete a resource by ID
Error Handling
All API responses will include appropriate HTTP status codes and error messages for invalid requests.

Project Structure

/projet-findebatch-backend
├── /config
├── /controllers
├── /models
├── /routes
├── .env.example
├── server.js
└── package.json
/config: Configuration files for database connections and other settings.
/controllers: Contains the logic for handling API requests.
/models: Mongoose models for data representation.
/routes: API route definitions.
