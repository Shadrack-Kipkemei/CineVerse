## CineVerse

Date, 2025/01/31 ***Shadrack Kipkemei***


Welcome to CineVerse! CineVerse is a full-stack web application that allows users to explore, add, rate, and review movies. Users can sign up, log in, and interact with a wide variety of movies, providing a comprehensive movie-watching experience.


## Table of Contents

* Features

* Technologies Used

* Installation

* Backend Setup

* Frontend Setup

* Usage

* API Endpoints

* Database Models

* Seeding the Database

* Contributing

* License


## Features

* User Authentication (Sign Up, Login, Logout)

* Browse and Search Movies

* Add New Movies

* View Movie Details

* Submit and View Reviews

* Responsive UI with Bootstrap


## Technologies Used

### Frontend

* React

* React Router

* Formik (for form handling)

* Axios (for API requests)

* Bootstrap (for styling)

* HTML/CSS

### Backend

* Flask

* Flask-RESTful

* Flask-Bcrypt (for password hashing)

* Flask-CORS (for handling CORS)

* Flask-Migrate (for database migrations)

* SQLAlchemy (for ORM)

* SQLite (as the default database)


## Installation

### Prerequisites
* Node.jsand npm installed

* Python and pip installed

## Backend Setup
1. Clone the repository:

```
git clone https://github.com/Shadrack-Kipkemei/CineVerse
cd CineVerse/backend
```
2. Create a virtual environment and activate it:

```
python3 -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
```
3. Install the required packages:

```
pip install -r requirements.txt
```
4. Set up the environment variables:

Create a .env file in the backend directory and add the following:
```
DATABASE_URL=sqlite:///movie_app.db
SECRET_KEY=your-secret-key
```
5. Initialize the database:

```
flask db upgrade
```
6. Seed the database:

```
python seed.py
```
7. Run the backend server:

```
flask run
```


## Frontend Setup
1. Navigate to the frontend directory:
```
cd ../frontend
```
2. Install the dependencies:

```
npm install
```
3. Start the React development server:

```
npm start
```


## Usage
1. Access the application:

Open your browser and go to ```http://localhost:3000``` to view the CineVerse application.

2. Explore the features:

* Sign up and log in to your account.

* Browse the movie list and click on movie titles to view details.

* Add new movies and submit reviews.

* Navigate through the app using the navbar.


## API Endpoints

### User Endpoints

* ```POST /users```: Create a new user

* ```POST /login```: Log in a user

### Movie Endpoints
* ```GET /movies```: Get a list of all movies

* ```POST /movies```: Add a new movie

* ```GET /movies/:id```: Get details of a specific movie

* ```DELETE /movies/:id```: Delete a movie by ID

### Review Endpoints
* ```GET /reviews```: Get a list of all reviews

* ```POST /reviews```: Submit a new review


## Database Models

### User Model
* ```id```: Integer, primary key

* ```username```: String, required

* ```email```: String, required, unique

* ```password```: String, required

* ```reviews```: Relationship with Review model

### Movie Model
*```id```: Integer, primary key

* ```title```: String, required

* ```genre```: String, required

* ```release_year```: Integer, required

* ```link```: String, optional

* ```image_url```: String, optional

* ```reviews```: Relationship with Review model

### Review Model
* ```id```: Integer, primary key

* ```rating```: Integer, required

* ```comment```: String, required

* ```movie_id```: Foreign key to Movie model, required

* ```user_id```: Foreign key to User model, required


## Seeding the Database
To populate the database with initial data, run the following command:

```
python seed.py
```

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.


## License
The content of this project is licensed under the MIT license Copyright (c) 2025.