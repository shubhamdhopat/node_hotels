# Node Hotels Backend

This is a backend API for a hotel management system built with Node.js, Express, Mongoose, and JWT authentication. It handles operations related to users, menu items, and authentication, and connects to a MongoDB database.

## Features

- **Database Connection**: Utilizes `mongoose` for interacting with MongoDB.
- **Authentication**: Implements JWT-based authentication using Passport.js.
- **Routes**: Includes routes for menu items and persons (hotel users).
- **Models**: Mongoose models for `MenuItem` and `Person`.
- **Token-based Security**: Handles JWT token generation and validation for user sessions.

## Project Structure

- **server.js**: Main entry point for the application, sets up the Express server and connects to the database.
- **db.js**: Handles the connection to MongoDB using Mongoose.
- **auth.js**: Manages user authentication using Passport.js.
- **jwt.js**: Contains logic for generating and validating JWT tokens.
- **routes/**: Contains route files.
  - `menuItemRoutes.js`: Routes for managing menu items.
  - `personRoutes.js`: Routes for managing hotel users (persons).
- **models/**: Contains Mongoose models.
  - `MenuItem.js`: Mongoose model for menu items.
  - `Person.js`: Mongoose model for hotel users.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (either local or MongoDB Atlas)
- Postman or another API testing tool (optional)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shubhamdhopat/node_hotels.git
   ```

2. Navigate to the project directory:
   ```bash
   cd node_hotels
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up your MongoDB database and add the connection string to the `db.js` file.

### Environment Variables

Create a `.env` file in the root directory and define the following environment variables:

```
PORT=3000
DB_URI=mongodb://localhost:27017/node_hotels  # or your MongoDB Atlas connection string
JWT_SECRET=your_jwt_secret_key
```

### Running the Application

Start the application using Node.js:

```bash
npm start
```

The application will be available on `http://localhost:3000`.

### API Routes

- **Menu Item Routes**:
  - `GET /menuitems`: Retrieve all menu items.
  - `POST /menuitems`: Add a new menu item.
  - `GET /menuitems/:id`: Retrieve a menu item by ID.
  - `PUT /menuitems/:id`: Update a menu item.
  - `DELETE /menuitems/:id`: Delete a menu item.

- **Person Routes**:
  - `GET /persons`: Retrieve all persons.
  - `POST /persons`: Add a new person (user).
  - `GET /persons/:id`: Retrieve a person by ID.
  - `PUT /persons/:id`: Update a person.
  - `DELETE /persons/:id`: Delete a person.

### Authentication

Authentication is handled using JWT tokens. The flow is as follows:

1. **Login**: Send a POST request to `/auth/login` with your credentials to receive a JWT token.
2. **Access protected routes**: Include the JWT token in the Authorization header of the request to access protected routes.

### Example

Login to receive a token:

```bash
POST /auth/login
{
  "username": "user1",
  "password": "password123"
}
```

Protected route (e.g., get all menu items):

```bash
GET /menuitems
Authorization: Bearer <jwt_token>
```

## Built With

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **Mongoose**: ODM for MongoDB.
- **Passport.js**: Authentication middleware.
- **JWT**: JSON Web Tokens for user authentication.

## Contributing

Feel free to fork the repository, submit issues, and create pull requests for improvements!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

