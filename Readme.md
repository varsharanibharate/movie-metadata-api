## Movie Metadata API

Overview
This project implements a RESTful API for managing movie metadata for a streaming platform using Node.js, TypeScript, and MySQL. The API allows listing and updating movies.

Features
List Movies: Fetch movies with optional pagination.
Get Movie by ID: Retrieve detailed information about a specific movie.
Update Movie: Modify details of a specific movie.

Setup Instructions

Prerequisites
Node.js (v14 or later)
MySQL (v5.7 or later)
npm (Node Package Manager)

1. Clone the Repository

git clone https://github.com/varsharanibharate/movie-metadata-api.git
cd movie-metadata-api

2. Install Dependencies
Install the required Node.js packages:

npm install

3. Configure MySQL Database

Create the Database:
Connect to your MySQL server and create the database:

Create database schema use attached mysql-db-setup file 


4. Configure Database Connection
Update the src/utils/database.ts file with your MySQL database credentials:

const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',  // Replace with your MySQL username
  database: 'moviedb',
  password: 'your_password',  // Replace with your MySQL password
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

5. Seed the Database
To populate the database with movie data, run the following script:

npx ts-node src/utils/seedDatabase.ts

6. Start the Application
Run the application using:

npx ts-node src/app.ts
The server will start on http://localhost:3000.

API Documentation
1. List Movies
Endpoint: GET /api/movies

Query Parameters:

page (optional): Page number for pagination. Default is 1.
limit (optional): Number of movies per page. Default is 10.

Example Request:
GET http://localhost:3000/api/movies?page=1&limit=10

Response:

[
  {
    "id": 1,
    "title": "Movie Title",
    "genre": "Genre",
    "release_date": "YYYY-MM-DD",
    "description": "Movie description."
  }
  // ...more movies
]

2. Get Movie by ID
Endpoint: GET /api/movies/:id

Path Parameters:
id: ID of the movie to retrieve.

Example Request:
GET http://localhost:3000/api/movies/1


Response:

{
  "id": 1,
  "title": "Movie Title",
  "genre": "Genre",
  "release_date": "YYYY-MM-DD",
  "description": "Movie description."
}

3. Update Movie
Endpoint: PUT /api/movies/:id

Path Parameters:
id: ID of the movie to update.

Request Body: 
JSON object with the fields to update.

Example Request:

PUT http://localhost:3000/api/movies/1
Content-Type: application/json

{
  "title": "Updated Movie Title",
  "genre": "Drama",
  "release_date": "2023-08-01",
  "description": "Updated description for the movie."
}


Response:

{
  "affectedRows": 1
}

Implementation Notes

Database: The project uses MySQL to store movie metadata.
Seeding Data: Data is loaded into the database from movies.csv during the seeding process.
Error Handling: Basic error handling is included. Consider adding more detailed error handling and validation for a production environment.
