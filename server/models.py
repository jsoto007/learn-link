from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from flask import abort 

from config import db

# Models go here!












# Model template!
# class NameOfClass( db.Model ):
#   __tablename__ = 'name of class plural'

#   id = db.Column( db.Integer, primary_key = True )
#   created_at = db.Column( db.DateTime, server_default=db.func.now() )
#   updated_at = db.Column( db.DateTime, onupdate=db.func.now() )
#   table_column_id = db.Column( db.Integer, db.ForeignKey( 'table.id' ) )

#   def __repr__( self ):
#       return f"{{ ModelName { self.id } }}

#   validation_errors = []

#   def get_validation_errors( self ):
#       return list( set( self.validation_errors ) )

#   @classmethod
#   def clear_validation_errors( cls ):
#       cls.validation_errors = []

# Password stuff for user model:
#   @hybrid_property
#   def password_hash

#   @password_hash.setter
#   def password_hash( self, password ):
#       if ***password validation goes in here!*** :
#           password_hash = bcrypt.generate_password_hash( password.encode( 'utf-8' ) )
#           self._password_hash = password_hash.decode( 'utf-8' )
#       else :
#           self.validation_errors.append( "Password validation error goes here!" )

#   def authenticate( self, password ):
#       return bcrypt.check_password_hash( self._password_hash, password.encode( 'utf-8' ) )