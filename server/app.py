from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from server.config import Config
from server.models import db, User, Movie, Review
import bcrypt  

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
bcrypt = Bcrypt(app)  
migrate = Migrate(app, db)

api = Api(app)

# User routes (CRUD)
class UserListResource(Resource):
    def get(self):
        users = User.query.all()
        return [user.to_dict() for user in users], 200

    def post(self):
        data = request.get_json()
        password = data.get("password").encode("utf-8")
        hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")  # Hash password
        new_user = User(
            username=data.get("username"),
            email=data.get("email"),
            password=hashed_password
        )
        db.session.add(new_user)
        db.session.commit()
        return new_user.to_dict(), 201

# User login route
class UserLoginResource(Resource):
    def post(self):
        data = request.get_json()
        email = data.get("email")
        password = data.get("password").encode("utf-8")

        user = User.query.filter_by(email=email).first()
        if not user or not bcrypt.check_password_hash(user.password, password):  # Verify password
            return {"message": "Invalid email or password"}, 401  # Unauthorized

        # Successful login
        return {"message": "Login successful", "user": user.to_dict()}, 200

# Movie routes (CRUD)
class MovieListResource(Resource):
    def get(self):
        movies = Movie.query.all()
        return [movie.to_dict() for movie in movies], 200

    def post(self):
        data = request.get_json()
        new_movie = Movie(
            title=data.get("title"),
            genre=data.get("genre"),
            release_year=data.get("release_year")
        )
        db.session.add(new_movie)
        db.session.commit()
        return new_movie.to_dict(), 201

# Review routes
class ReviewListResource(Resource):
    def post(self):
        data = request.get_json()
        new_review = Review(
            rating=data.get("rating"),
            comment=data.get("comment"),
            movie_id=data.get("movie_id"),
            user_id=1  
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict(), 201

# Add resources to the API
api.add_resource(UserListResource, '/users')
api.add_resource(UserLoginResource, '/login')  
api.add_resource(MovieListResource, '/movies')
api.add_resource(ReviewListResource, '/reviews')

if __name__ == "__main__":
    app.run(port=5000, debug=True)
