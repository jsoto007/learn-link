#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Course, Lesson, ChatHistory

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        print( "Deleting data..." )
        User.query.delete()
        Course.query.delete()
        Lesson.query.delete()
        ChatHistory.query.delete()

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
            title = "Basic Mathematics",
            description = "Basic math course",
            score = False,
            start_date = None,
            end_date = None,
            user_id = u1.id,
        )

        c2 = Course(
            title = "Advanced Mathematics",
            description = "Advanced math course",
            score = False,
            start_date = None,
            end_date = None,
            user_id = u2.id,
        )
        db.session.add_all( [ c1, c2 ] )
        db.session.commit()
        print( 'Courses created successfully!' )

        print( 'Creating lessons...' )
        l1 = Lesson(
            title = "Basic Math 1",
            content = "1+1=2 2+2=4",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l2 = Lesson(
            title = "Basic Math 2",
            content = "1+1=2 2+2=4",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l3 = Lesson(
            title = "Advanced Math 1",
            content = "3+3=6 7+7=14",
            duration = "1 week",
            score = False,
            course_id = c2.id,
            user_id = u2.id,
        )
        l4 = Lesson(
            title = "Advanced Math 2",
            content = "3+3=6 7+7=14",
            duration = "1 week",
            score = False,
            course_id = c2.id,
            user_id = u2.id,
        )
        l5 = Lesson(
            title = "Advanced Math 3",
            content = "3+3=6 7+7=14",
            duration = "1 week",
            score = False,
            course_id = c2.id,
            user_id = u2.id,
        )
        lessons = [ l1, l2, l3, l4, l5 ]
        db.session.add_all( lessons )
        db.session.commit()
        print( 'Lessons created successfully!' )
        
        print( "Seeding complete!" )