# import os

# class Config:
#     SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///movie_app.db')  
#     SQLALCHEMY_TRACK_MODIFICATIONS = False  
#     SECRET_KEY = os.environ.get('SECRET_KEY', 'your-secret-key')  


# config.py
import os

class Config:
    # Use Flask's instance folder to store the database file
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))  # This is the directory of config.py
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(BASE_DIR, './instance/movie_app.db')}"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ.get('SECRET_KEY', 'your-secret-key')
