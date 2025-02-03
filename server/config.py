# config.py
import os

class Config:
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))  # This is the directory of config.py
    SQLALCHEMY_DATABASE_URI = "sqlite:///movie_app.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ.get('SECRET_KEY', 'your-secret-key')

