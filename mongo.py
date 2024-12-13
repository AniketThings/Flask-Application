from pymongo import MongoClient
import pandas as pd

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client.NoOneFlix

# Import data from CSV
movies = pd.read_csv('movies.csv')
ratings = pd.read_csv('ratings.csv')

# Insert into MongoDB
movies_collection = db.movies
ratings_collection = db.ratings

movies_collection.insert_many(movies.to_dict('records'))
ratings_collection.insert_many(ratings.to_dict('records'))

print("Data inserted successfully!")
