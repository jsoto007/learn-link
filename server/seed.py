#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Course, Lesson

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        print( "Deleting data..." )
        User.query.delete()
        Course.query.delete()
        Lesson.query.delete()

        print( "Creating users..." )
        u1 = User(
            email = "nicholas@gmail.com",
            password_hash = "password",
            username = "Glitchy",
            first_name = "Nicholas",
            last_name = "Martin",
            avatar = "https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png",
            bio = "Random Words to fill the void."
        )

        u2 = User(
            email = "jose@gmail.com",
            password_hash = "password",
            username = "J-Man",
            first_name = "Jose",
            last_name = "Soto",
            avatar = "https://vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png",
            bio = "Random Words to fill the void.",
        )
        db.session.add_all( [ u1, u2 ] )
        db.session.commit()
        print( 'Users created successfully!' )

        print( 'Creating Courses...' )
        c1 = Course(
            title = "Mathematics",
            description = "Basic math course",
            score = False,
            start_date = None,
            end_date = None,
            user_id = u1.id,
            lesson_id = l1.id,
        )