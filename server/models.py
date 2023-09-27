from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from flask import abort 

from config import db, Bcrypt

bcrypt = Bcrypt()

# Models go here!
class User( db.Model ):
    __tablename__ = 'users'

    id = db.Column( db.Integer, primary_key = True )
    created_at = db.Column( db.DateTime, server_default=db.func.now() )
    updated_at = db.Column( db.DateTime, onupdate=db.func.now() )
    
    email = db.Column( db.String, nullable = False, unique = True ) 
    _password_hash = db.Column( db.String, nullable = False )
    username = db.Column( db.String, unique = True )
    first_name = db.Column( db.String )
    last_name = db.Column( db.String )

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












# Model template!
# class NameOfClass( db.Model ):
#   __tablename__ = 'name of class plural'

#   id = db.Column( db.Integer, primary_key = True )
#   created_at = db.Column( db.DateTime, server_default=db.func.now() )
#   updated_at = db.Column( db.DateTime, onupdate=db.func.now() )

#   table_column_id = db.Column( db.Integer, db.ForeignKey( 'table.id' ) )

#   def __repr__( self ):
#       return f"{{ ModelName { self.id } }}"

#   validation_errors = []

#   def get_validation_errors( self ):
#       return list( set( self.validation_errors ) )

#   @classmethod
#   def clear_validation_errors( cls ):
#       cls.validation_errors = []

# Password stuff for user model:
#   @hybrid_property
#   def password_hash( self ):
#       return self._password_hash

#   @password_hash.setter
#   def password_hash( self, password ):
#       if ***password validation goes in here!*** :
#           password_hash = bcrypt.generate_password_hash( password.encode( 'utf-8' ) )
#           self._password_hash = password_hash.decode( 'utf-8' )
#       else :
#           self.validation_errors.append( "Password validation error goes here!" )

#   def authenticate( self, password ):
#       return bcrypt.check_password_hash( self._password_hash, password.encode( 'utf-8' ) )