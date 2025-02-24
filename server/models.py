# from flask_sqlalchemy import SQLAlchemy
# from flask_bcrypt import Bcrypt
from sqlalchemy_serializer import SerializerMixin

from .extensions import db

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)

    reviews = db.relationship('Review', backref='user', lazy=True)

    serialize_rules = ('-reviews.user', '-password')

class Movie(db.Model, SerializerMixin):
    __tablename__ = 'movies'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    release_year = db.Column(db.Integer, nullable=False)
    link = db.Column(db.String, nullable=True)
    image_url = db.Column(db.String, nullable=True)

    reviews = db.relationship('Review', backref='movie', lazy=True)

    serialize_rules = ('-reviews.movie',)

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.String, nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    serialize_rules = ('-movie.reviews', '-user.reviews')




