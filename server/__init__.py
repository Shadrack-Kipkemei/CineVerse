# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# from .config import Config  # Import Config class from config.py

# # Initialize the database and migration object
# db = SQLAlchemy()
# migrate = Migrate()

# # Import the models after db initialization to avoid circular imports
# from .models import Movie, User, Review 

# def create_app():
#     app = Flask(__name__)
#     app.config.from_object(Config)  # Load configuration from Config class
    
#     # Initialize the app with db and migrate objects
#     db.init_app(app)
#     migrate.init_app(app, db)

    
    
#     return app



# __init__.py
from flask import Flask
from .config import Config
from .extensions import db, migrate, bcrypt  # Import extensions from extensions.py
from .models import Movie, User, Review  # Import models after db and migrate initialization

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)  # Load configuration from Config class
    
    # Initialize the app with db and migrate objects
    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)

    return app
