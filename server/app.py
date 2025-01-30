# from flask import Flask, request, jsonify
# from flask_restful import Api, Resource
# from flask_migrate import Migrate
# from flask_bcrypt import Bcrypt
# from server.config import Config
# from server.models import db, User, Movie, Review
# import bcrypt  
# from flask_cors import CORS 



# app = Flask(__name__)
# app.config.from_object(Config)

# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) 

# db.init_app(app)
# bcrypt = Bcrypt(app)  
# migrate = Migrate(app, db)

# api = Api(app)

# # User routes (CRUD)
# class UserListResource(Resource):
#     def get(self):
#         users = User.query.all()
#         return [user.to_dict() for user in users], 200

#     def post(self):
#         data = request.get_json()
#         password = data.get("password").encode("utf-8")
#         hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")  # Hash password
#         new_user = User(
#             username=data.get("username"),
#             email=data.get("email"),
#             password=hashed_password
#         )
#         db.session.add(new_user)
#         db.session.commit()
#         return new_user.to_dict(), 201

# # User login route
# class UserLoginResource(Resource):
#     def post(self):
#         data = request.get_json()
#         email = data.get("email")
#         password = data.get("password").encode("utf-8")

#         user = User.query.filter_by(email=email).first()
#         if not user or not bcrypt.check_password_hash(user.password, password):  # Verify password
#             return {"message": "Invalid email or password"}, 401  # Unauthorized

#         # Successful login
#         return {"message": "Login successful", "user": user.to_dict()}, 200


# # User logout route
# class UserLogoutResource(Resource):
#     def post(self):
#         return {"message": "Logout successful"}, 200


# # Movie routes (CRUD)
# class MovieListResource(Resource):
#     def get(self):
#         movies = Movie.query.all()
#         return [movie.to_dict() for movie in movies], 200

#     def post(self):
#         data = request.get_json()
#         new_movie = Movie(
#             title=data.get("title"),
#             genre=data.get("genre"),
#             release_year=data.get("release_year")
#         )
#         db.session.add(new_movie)
#         db.session.commit()
#         return new_movie.to_dict(), 201

# # Review routes
# class ReviewListResource(Resource):
#     def post(self):
#         data = request.get_json()

#         # Ensure required fields are present
#         if "rating" not in data or "comment" not in data or "movie_id" not in data or "user_id" not in data:
#             return {"message": "Missing required fields"}, 400

#         # Check if the movie exists
#         movie = Movie.query.get(data["movie_id"])
#         if not movie:
#             return {"message": "Movie not found"}, 404
        
#         # Check if the user exists
#         user = User.query.get(data["user_id"])
#         if not user:
#             return {"message": "User not found"}, 404

#         # Create and save the review
#         new_review = Review(
#             rating=data["rating"],
#             comment=data["comment"],
#             movie_id=data["movie_id"],
#             user_id=data["user_id"]
#         )

#         db.session.add(new_review)
#         db.session.commit()

#         return new_review.to_dict(), 201


# # Add resources to the API
# api.add_resource(UserListResource, '/users')
# api.add_resource(UserLoginResource, '/login')  
# api.add_resource(UserLogoutResource, '/logout')
# api.add_resource(MovieListResource, '/movies')
# api.add_resource(ReviewListResource, '/reviews')

# if __name__ == "__main__":
#     app.run(port=5000, debug=True)





from flask import Flask, request, jsonify
from flask_restful import Api, Resource
from flask_bcrypt import Bcrypt
from server.models import db, User, Movie, Review
import bcrypt  
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
app.config.from_object('server.config.Config')

# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) 

db.init_app(app)
bcrypt = Bcrypt(app)  

api = Api(app)

# User routes
class UserListResource(Resource):
    def post(self):
        try:
            data = request.get_json()
            username = data.get("username")
            email = data.get("email")
            password = data.get("password")

            if not username or not email or not password:
                return {"message": "Missing required fields"}, 400

            hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")
            new_user = User(username=username, email=email, password=hashed_password)

            db.session.add(new_user)
            db.session.commit()
            return new_user.to_dict(), 201

        except Exception as e:
            return {"message": f"Error: {str(e)}"}, 500


class UserLoginResource(Resource):
    def post(self):
        data = request.get_json()
        email = data.get("email")
        password = data.get("password").encode("utf-8")

        user = User.query.filter_by(email=email).first()
        if not user or not bcrypt.check_password_hash(user.password, password):
            return {"message": "Invalid email or password"}, 401  # Unauthorized

        return {"message": "Login successful", "user": user.to_dict(), "token": "some_token"}, 200

# Movie routes
class MovieListResource(Resource):
    def get(self):
        movies = Movie.query.all()
        return [movie.to_dict() for movie in movies], 200

class MovieResource(Resource):
    def get(self, id):
        movie = Movie.query.get(id)
        if movie:
            return movie.to_dict(), 200
        return {"message": "Movie not found"}, 404

# Review routes
class ReviewListResource(Resource):
    def post(self):
        data = request.get_json()

        if "rating" not in data or "comment" not in data or "movie_id" not in data or "user_id" not in data:
            return {"message": "Missing required fields"}, 400

        movie = Movie.query.get(data["movie_id"])
        if not movie:
            return {"message": "Movie not found"}, 404

        user = User.query.get(data["user_id"])
        if not user:
            return {"message": "User not found"}, 404

        new_review = Review(
            rating=data["rating"],
            comment=data["comment"],
            movie_id=data["movie_id"],
            user_id=data["user_id"]
        )

        db.session.add(new_review)
        db.session.commit()

        return new_review.to_dict(), 201

# Add resources to the API
api.add_resource(UserListResource, '/users')
api.add_resource(UserLoginResource, '/login')
api.add_resource(MovieListResource, '/movies')
api.add_resource(MovieResource, '/movies/<int:id>')
api.add_resource(ReviewListResource, '/reviews')

if __name__ == "__main__":
    app.run(port=5000, debug=True)
