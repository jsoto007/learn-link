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
            title = "Introduction to Numbers",
            description = "Welcome to the first lesson of Basic Arithmetic! In this lesson, we'll explore the fundamental concept of numbers. This lesson is designed to make numbers more accessible and understandable.",
            score = False,
            start_date = None,
            end_date = None,
            user_id = None,
            learning_objective1 = "Understand the concept of numbers.",
            learning_objective2 = "Learn to count from 1 to 10 through interactive online exercises",
            learning_objective3 = "Practice basic number recognition using visual and auditory cues.",
            # user_id = u1.id,
        )

        c2 = Course(
            title = "Basic Addition",
            description = "Welcome to Course 2! Here we're going to explore the world of addition. Addition is a mathematical operation (like a special set of steps or rules that is applied to one or more numbers to find a result) that helps us combine two or more numbers and find the total when we put them together.",
            score = False,
            start_date = None,
            end_date = None,
            user_id = None,
            learning_objective1 = "Understand the concept of addition.",
            learning_objective2 = "Practice simple addition (e.g., 1+1, 2+2) through interactive online tools.",
            learning_objective3 = "Explore real-world addition examples.",
            # user_id = u2.id,
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