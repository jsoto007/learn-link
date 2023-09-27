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

#---------------------------------------------------------------------

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

#---------------------------------------------------------------------

class Courses(Resource):
    
    #post to users, DONE, unsure if i want to be able to see all users..
    def get(self):
        courses = [course.to_dict() for course in Course.query.all()]

        response = make_response(courses, 200)

        return response

api.add_resource(Courses, '/courses')

class CourseByID(Resource):

    #get one user by ID, may not even be necessary
    def get(self, id):

        course = Course.query.filter(Course.id == id).first()

        if course:
            response = make_response(course.to_dict(),200)
        else:
            response = make_response({
            "error": "Course not found"
            }, 404)

        return response
        
api.add_resource(CourseByID, '/course/<int:id>')

#---------------------------------------------------------------------

class Lessons(Resource):
    
    #post to users, DONE, unsure if i want to be able to see all users..
    def get(self):
        lessons = [lesson.to_dict() for lesson in Lesson.query.all()]

        response = make_response(lessons, 200)

        return response

api.add_resource(Lessons, '/lessons')

class LessonByID(Resource):

    #get one user by ID, may not even be necessary
    def get(self, id):

        lesson = Lesson.query.filter(Lesson.id == id).first()

        if lesson:
            response = make_response(lesson.to_dict(),200)
        else:
            response = make_response({
            "error": "Course not found"
            }, 404)

        return response
        
api.add_resource(LessonByID, '/lesson/<int:id>')

#---------------------------------------------------------------------

if __name__ == '__main__':
    app.run( port=5555, debug=True )