import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from server import create_app, db
from server.models import User, Movie 

app = create_app()

with app.app_context():
    # db.create_all()

    movie1 = Movie(title="The Shawshank Redemption", genre="Drama", release_year=1994, link="https://www.imdb.com/title/tt0111161/")
    movie2 = Movie(title="The Dark Knight", genre="Action", release_year=2008, link="https://www.imdb.com/title/tt0468569/")
    movie3 = Movie(title="Inception", genre="Action", release_year=2010, link="https://www.imdb.com/title/tt1375666/")
    movie4 = Movie(title="Forest Gump", genre="Drama", release_year=2008, link="https://www.imdb.com/title/tt0109830/")
    movie5 = Movie(title="The Godfather", genre="Drama", release_year=1972, link="https://www.imdb.com/title/tt0068646/")
    movie6 = Movie(title="Pulp Fiction", genre="Drama", release_year=1994, link="https://www.imdb.com/title/tt0110912/")
    movie7 = Movie(title="The Matrix", genre="Action", release_year=1999, link="https://www.imdb.com/title/tt0133093/")
    movie8 = Movie(title="Gladiator", genre="Drama", release_year=2000, link="https://www.imdb.com/title/tt0172495/")
    movie9 = Movie(title="La La Land", genre="Musical", release_year=2016, link="https://www.imdb.com/title/tt3783958/")
    movie10 = Movie(title="Parasite", genre="Drama", release_year=2019, link="https://www.imdb.com/title/tt6751668/")

    db.session.add(movie1)
    db.session.add(movie2)
    db.session.add(movie3)
    db.session.add(movie4)
    db.session.add(movie5)
    db.session.add(movie6)
    db.session.add(movie7)
    db.session.add(movie8)
    db.session.add(movie9)
    db.session.add(movie10)
    db.session.commit()

    # Use inspect to get the table names
    inspector = db.inspect(db.engine)
    print(inspector.get_table_names())