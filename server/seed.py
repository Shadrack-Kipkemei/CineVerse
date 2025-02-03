import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from server import create_app, db
from server.models import User, Movie 

app = create_app()

with app.app_context():
    # db.create_all()

    movie1 = Movie(title="The Shawshank Redemption", genre="Drama", release_year=1994, link="https://www.imdb.com/title/tt0111161/", image_url="https://img.freepik.com/premium-photo/graffiti-art-depicting-struggle-civil-righ-00103-01_1022456-12041.jpg?w=900")
    movie2 = Movie(title="The Dark Knight", genre="Action", release_year=2008, link="https://www.imdb.com/title/tt0468569/", image_url="https://img.freepik.com/free-photo/dark-fantasy-scene_23-2151136184.jpg?t=st=1738280466~exp=1738284066~hmac=5000931444678fb432f278a57121d14108fdab6b5e1a82e1afb3e8c2319fd5c8&w=900")
    movie3 = Movie(title="Inception", genre="Action", release_year=2010, link="https://www.imdb.com/title/tt1375666/", image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwkXZTiVy4I0XxAK9crUVCElQRkS9NxLNgUA&s")
    movie4 = Movie(title="Forest Gump", genre="Drama", release_year=2008, link="https://www.imdb.com/title/tt0109830/", image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94hKbqBHowy5ZpWotvi-ek1x4zYhvAKRuKg&s")
    movie5 = Movie(title="The Godfather", genre="Drama", release_year=1972, link="https://www.imdb.com/title/tt0068646/", image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LX-MUmBifaNptyGhwE4Dd2PfcYjYIW0jVw&s")
    movie6 = Movie(title="Pulp Fiction", genre="Drama", release_year=1994, link="https://www.imdb.com/title/tt0110912/", image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyomFKu9R-q7wzeoZCbctGBfhr5MaVmg724A&s")
    movie7 = Movie(title="The Matrix", genre="Action", release_year=1999, link="https://www.imdb.com/title/tt0133093/", image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30yFHNDMtnXUuOOIaxcr6qymGYimFzB5u2w&s")
    movie8 = Movie(title="Gladiator", genre="Drama", release_year=2000, link="https://www.imdb.com/title/tt0172495/", image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNXAm7EAVqEozQSyvO1EDkpXIkGdIyMBYqg&s")
    movie9 = Movie(title="La La Land", genre="Musical", release_year=2016, link="https://www.imdb.com/title/tt3783958/", image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtaWQ6qz38NxSIHdenrmScvOtwDG-mzKKkQ&s")
    movie10 = Movie(title="Parasite", genre="Drama", release_year=2019, link="https://www.imdb.com/title/tt6751668/", image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDqKkcUQG8PtYkVwC7RA0iMqDWgGG7W7KcQ&s")

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

    
    inspector = db.inspect(db.engine)
    print(inspector.get_table_names())