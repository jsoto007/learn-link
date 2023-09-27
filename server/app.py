#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, make_response, jsonify, request
from flask_restful import Resource

# Local imports
from config import app, db, api

# Import Models here
from models import db, User, Course, Lesson

# Views go here!

# @app.route('/')
# def home():
#     return ''

class Users(Resource):
    
    #post to users, DONE, unsure if i want to be able to see all users..
    def get(self):
        users = [user.to_dict() for user in User.query.all()]

        response = make_response(users, 200)

        return response

api.add_resource(Users, '/users')

class UserByID(Resource):

    #get one user by ID, may not even be necessary
    def get(self, id):
        user = User.query.filter(User.id == id).first()

        if user:
            response = make_response(user.to_dict(),200)
        else:
            response = make_response({
            "error": "User not found"
            }, 404)
            
        return response
        
api.add_resource(UserByID, '/user/<int:id>')

if __name__ == '__main__':
    app.run( port=5555, debug=True )