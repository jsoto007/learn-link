from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from flask import abort 
from datetime import datetime

from config import db, Bcrypt

bcrypt = Bcrypt()

# Models go here!
class User( db.Model ):
    __tablename__ = 'users'

    id = db.Column( db.Integer, primary_key = True )
    created_at = db.Column( db.DateTime, server_default=db.func.now() )
    updated_at = db.Column( db.DateTime, server_onupdate=db.func.now() )
    
    email = db.Column( db.String, nullable = False, unique = True ) 
    _password_hash = db.Column( db.String, nullable = False )
    username = db.Column( db.String, unique = True )
    first_name = db.Column( db.String )
    last_name = db.Column( db.String )
    avatar = db.Column( db.String, default="https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png" )
    bio = db.Column( db.String )

    def __repr__( self ):
        return f"{{ User { self.id } }}"

    validation_errors = []

    def get_validation_errors( self ):
        return list( set( self.validation_errors ) )

    @classmethod
    def clear_validation_errors( cls ):
        cls.validation_errors = []

    @validates( 'email' )
    def validates_email( self, key, email ):
        if type( email ) is str and email and '@' in email and '.' in email:
            return email 
        else:
            self.validation_errors.append( "Email must be a string with a valid email with '@' and '.'" )

    @validates( 'username' )
    def validate_username( self, key, username ):
        if username:
            if type( username ) is str and len( username ) in range( 3, 18 ):
                return username
            else:
                self.validation_errors.append( "Username must be a string between 3 to 17 characters long" )

    @validates( 'first_name' )
    def validate_first_name( self, key, first_name ):
        if first_name:
            if type( first_name ) is str:
                return first_name
            else:
                self.validation_errors.append( "First name must be a string" )

    @validates( 'last_name' )
    def validate_last_name( self, key, last_name ):
        if last_name:
            if type( last_name ) is str:
                return last_name
            else:
                self.validation_errors.append( "Last name must be a string" )

    @validates( 'avatar' )
    def validate_avatar( self, key, avatar ):
        if avatar:
            if type( avatar ) is str:
                return avatar
            else:
                self.validation_errors.append( "Avatar must be string" )

    @validates( 'bio' )
    def validate_bio( self, key, bio ):
        if bio:
            if type( bio ) is str and len( bio ) in range( 1, 501 ):
                return bio
            else:
                self.validation_errors.append( "Bio must be a string less than 500 characters" )

# Password stuff for user model:
    @hybrid_property
    def password_hash( self ):
        return self._password_hash

    @password_hash.setter
    def password_hash( self, password ):
        if type( password ) is str and len( password ) in range( 5, 24 ):
            password_hash = bcrypt.generate_password_hash( password.encode( 'utf-8' ) )
            self._password_hash = password_hash.decode( 'utf-8' )
        else :
            self.validation_errors.append( "Password must be a string between 5 & 30 characters." )

    def authenticate( self, password ):
        return bcrypt.check_password_hash( self._password_hash, password.encode( 'utf-8' ) )


class Course( db.Model ):
    __tablename__ = 'courses'

    id = db.Column( db.Integer, primary_key = True )
    created_at = db.Column( db.DateTime, server_default=db.func.now() )
    updated_at = db.Column( db.DateTime, server_onupdate=db.func.now() )

    title = db.Column( db.String, nullable = False )
    description = db.Column( db.String )
    score = db.Column( db.Boolean, default = False )
    start_date = db.Column( db.DateTime, default = None, nullable = True )
    end_date = db.Column( db.DateTime, default = None, nullable = True )

    user_id = db.Column( db.Integer, db.ForeignKey( 'users.id' ) )
    lesson_id = db.Column( db.Integer, db.ForeignKey( 'lessons.id' ) )

    def __repr__( self ):
        return f"{{ Recipe{ self.id }, Title: { self.title} }}"
    
    def start_course( self ):
        self.start_date = datetime.utcnow()

    def finish_course( self ):
        self.end_date = datetime.utcnow()

    validation_errors = []

    def get_validation_errors( self ):
        return list( set( self.validation_errors ) )

    @classmethod
    def clear_validation_errors( cls ):
        cls.validation_errors = []

    @validates( 'title' )
    def validate_title( self, key, title ):
        if type( title ) is str and title:
            return title
        else:
            self.validation_errors.append( "Title must have a title with more than 0 characters" )
    
    @validates( 'description' )
    def validate_description( self, key, description ):
        if type( description ) is str and len( description ) in range( 1, 501 ):
            return description
        else:
            self.validation_errors.append( "Description must be a string less than 250 characters" )

    @validates( 'user_id' )
    def validate_user( self, key, user_id ):
        if User.query.filter_by( id=user_id ).first():
            return user_id
        else:
            self.validation_errors.append( "User not found." )

    @validates( 'lesson_id' )
    def validate_lesson( self, key, lesson_id ):
        if Lesson.query.filter_by( id=lesson_id ):
            return lesson_id
        else:
            self.validation_errors.append( "Lesson not found." )


class Lesson( db.Model ):
    __tablename__ = 'lessons'

    id = db.Column( db.Integer, primary_key = True )
    created_at = db.Column( db.DateTime, server_default=db.func.now() )
    updated_at = db.Column( db.DateTime, server_onupdate=db.func.now() )

    title = db.Column( db.String, nullable = False )
    content = db.Column( db.String, nullable = False )
    duration = db.Column( db.String, nullable = False )
    score = db.Column( db.Boolean, default = False )

    course_id = db.Column( db.Integer, db.ForeignKey( 'courses.id' ) )
    user_id = db.Column( db.Integer, db.ForeignKey( 'users.id' ) )

    def __repr__( self ):
        return f"{{ Lesson { self.id }, Course: { self.course.title } Lesson:{ self.lesson.title } }}"
    
    def start_course( self ):
        self.start_date = datetime.utcnow()

    def finish_course( self ):
        self.end_date = datetime.utcnow()

    validation_errors = []

    def get_validation_errors( self ):
        return list( set( self.validation_errors ) )

    @classmethod
    def clear_validation_errors( cls ):
        cls.validation_errors = []

    @validates( 'title' )
    def validate_title( self, key, title ):
        if type( title ) is str and title:
            return title
        else:
            self.validation_errors.append( "Title must have a title with more than 0 characters" )

    @validates( 'content' )
    def validate_content( self, key, content ):
        if type( content ) is str and content:
            return content
        else:
            self.validation_errors.append( "Content must have content with more than 0 characters" )

    @validates( 'duration' )
    def validate_duration( self, key, duration ):
        if type( duration ) is str and duration:
            return duration
        else:
            self.validation_errors.append( "Duration must have duration with my than 0 characters" )

    @validates( 'course_id' )
    def validate_course( self, key, course_id ):
        if Course.query.filter_by( id=course_id ):
            return course_id
        else:
            self.validation_errors.append( "Course not found." )

    @validates( 'user_id' )
    def validate_user( self, key, user_id ):
        if User.query.filter_by( id=user_id ).first():
            return user_id
        else:
            self.validation_errors.append( "User not found." )


# Model template!
# class NameOfClass( db.Model ):
#   __tablename__ = 'name of class plural'

#   id = db.Column( db.Integer, primary_key = True )
#   created_at = db.Column( db.DateTime, server_default=db.func.now() )
#   updated_at = db.Column( db.DateTime, server_onupdate=db.func.now() )

#   table_column_id = db.Column( db.Integer, db.ForeignKey( 'table.id' ) )

#   def __repr__( self ):
#       return f"{{ ModelName { self.id } }}"

#   validation_errors = []

#   def get_validation_errors( self ):
#       return list( set( self.validation_errors ) )

#   @classmethod
#   def clear_validation_errors( cls ):
#       cls.validation_errors = []
