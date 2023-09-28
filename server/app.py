#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, make_response, jsonify, request
from flask_restful import Resource

# Local imports
from config import app, db, api
from datetime import datetime

# Import Models here
from models import db, User, Course, Lesson

# Views go here!

# @app.route('/')
# def home():
#     return ''

#---------------------------------------------------------------------

class Users(Resource):
    
    def get(self):
        users = [user.to_dict(rules =('-lessons.courses.users', '-_password_hash')) for user in User.query.all()]

        response = make_response(users, 200)

        return response
    
    def post(self):
        data = request.get_json()
        try:
            new_user = User(
                created_at = datetime.utcnow(),
                updated_at = datetime.utcnow(),
                email = data['email'],
                _password_hash = data['password'],
                username = data['username'],
                first_name = data['first_name'],
                last_name = data['last_name'],
                avatar = data['avatar'],
                bio = data['bio']
            )

            db.session.add(new_user)

            #may need to do a tweak for updated_at , simple fix

            new_user.password_hash = new_user._password_hash

            db.session.commit()
            return make_response(new_user.to_dict(), 201)
            
        except ValueError:
            return make_response({"error": ["validations errors, check your input and try again"]} , 400)



api.add_resource(Users, '/users')

class UserByID(Resource):

    def get(self, id):

        user = User.query.filter(User.id == id).first()

        if user:
            response = make_response(user.to_dict(rules =('-lessons.courses.users', '-_password_hash')),200)
        else:
            response = make_response({
            "error": "User not found"
            }, 404)

        return response
    
    def patch(self, id):
        user = User.query.filter(User.id == id).first()
        if user:
            try:
                data = request.get_json()
                for key in data:
                    setattr(user, key, data[key])
                db.session.add(user)
                db.session.commit()

                return make_response(user.to_dict(), 202)
                
            except ValueError:
                return make_response({"error": ["validations errors, check your input and try again"]} , 400)

        else:
            response = make_response({
            "error": "User not found"
            }, 404)
            return response
        
    def delete(self,id):
        user = User.query.filter(User.id == id).first()
        if user:
            #May need to do a cascade delete to not have any information linger
            db.session.delete(user)
            db.session.commit()
            return make_response({"message":"Succesfully deleted!"}, 204)
        else:
            response = make_response({
            "error": "User not found"
            }, 404)
            return response
        
api.add_resource(UserByID, '/user/<int:id>')

#---------------------------------------------------------------------

class Courses(Resource):
    

    def get(self):
        courses = [course.to_dict( rules = ('-users._password_hash','-users.bio', '-users.avatar', '-users.created_at',)) for course in Course.query.all()]

        response = make_response(courses, 200)

        return response
    
    def post(self):
        data = request.get_json()
        try:
            # In this we could likely include something to test for admin, like if data[user.id = 1] for example
            new_course = Course(
                created_at = datetime.utcnow(),
                updated_at = datetime.utcnow(),
                title = data['title'],
                description = data['description'],
                score = data['score'],
                start_date = datetime.utcnow(),
                end_date = datetime.utcnow(),
                user_id = data['user_id'],
                lesson_id = data['lesson_id']
            )

            # Also this is where we'll need to do a conversion and make sure we're sending in 0 or 1 (from front end form) and see how it comes in here.
            # Postman accepted "score" : 1
            # Will need to adjust the end_date and updated_at to be a changed during a patch.

            db.session.add(new_course)

            db.session.commit()
            return make_response(new_course.to_dict(), 201)
            
        except ValueError:
            return make_response({"error": ["validations errors, check your input and try again"]} , 400)

api.add_resource(Courses, '/courses')

class CourseByID(Resource):

    def get(self, id):

        course = Course.query.filter(Course.id == id).first()

        if course:
            response = make_response(course.to_dict(),200)
        else:
            response = make_response({
            "error": "Course not found"
            }, 404)

        return response
    
    def patch(self, id):
        course = Course.query.filter(Course.id == id).first()
        if course:
            try:
                data = request.get_json()
                for key in data:
                    setattr(course, key, data[key])
                db.session.add(course)
                db.session.commit()

                return make_response(course.to_dict(), 202)
                
            except ValueError:
                return make_response({"error": ["validations errors, check your input and try again"]} , 400)

        else:
            response = make_response({
            "error": "Course not found"
            }, 404)
            return response
        
    def delete(self,id):
        course = Course.query.filter(Course.id == id).first()
        if course:
            #May need to do a cascade delete to not have any information linger
            db.session.delete(course)
            db.session.commit()
            return make_response({"message":"Succesfully deleted!"}, 204)
        else:
            response = make_response({
            "error": "Course not found"
            }, 404)
            return response
        
api.add_resource(CourseByID, '/course/<int:id>')

#---------------------------------------------------------------------

class Lessons(Resource):
    
    def get(self):
        lessons = [lesson.to_dict() for lesson in Lesson.query.all()]

        response = make_response(lessons, 200)

        return response
    
    def post(self):
        data = request.get_json()
        try:
            # In this we could likely include something to test for admin, like if data[user.id = 1] for example
            new_lesson = Lesson(
                created_at = datetime.utcnow(),
                updated_at = datetime.utcnow(),
                title = data['title'],
                content = data['content'],
                duration = data['duration'],
                score = data['score'],
                user_id = data['user_id'],
            )

            # Also this is where we'll need to do a conversion and make sure we're sending in 0 or 1 (from front end form) and see how it comes in here.
            # Postman accepted "score" : 1
            # Will need to adjust the end_date and updated_at to be a changed during a patch.

            db.session.add(new_lesson)

            db.session.commit()
            return make_response(new_lesson.to_dict(), 201)
            
        except ValueError:
            return make_response({"error": ["validations errors, check your input and try again"]} , 400)

api.add_resource(Lessons, '/lessons')

class LessonByID(Resource):

    def get(self, id):

        lesson = Lesson.query.filter(Lesson.id == id).first()

        if lesson:
            response = make_response(lesson.to_dict(),200)
        else:
            response = make_response({
            "error": "Course not found"
            }, 404)

        return response
    
    def patch(self, id):
        lesson = Lesson.query.filter(Lesson.id == id).first()
        if lesson:
            try:
                data = request.get_json()
                for key in data:
                    setattr(lesson, key, data[key])
                db.session.add(lesson)
                db.session.commit()

                return make_response(lesson.to_dict(), 202)
                
            except ValueError:
                return make_response({"error": ["validations errors, check your input and try again"]} , 400)

        else:
            response = make_response({
            "error": "Lesson not found"
            }, 404)
            return response
    

    def delete(self,id):
        lesson = Lesson.query.filter(Lesson.id == id).first()
        if lesson:
            #May need to do a cascade delete to not have any information linger
            db.session.delete(lesson)
            db.session.commit()
            return make_response({"message":"Succesfully deleted!"}, 204)
        else:
            response = make_response({
            "error": "Lesson not found"
            }, 404)
            return response

api.add_resource(LessonByID, '/lesson/<int:id>')

#---------------------------------------------------------------------

if __name__ == '__main__':
    app.run( port=5555, debug=True )