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
            homework1 = "",
            homework2 = "",
            homework3 = "",
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
            homework = " "
            # user_id = u2.id,
        )

        c3 = Course(
            title = "Basic Subtraction",
            description = "In the next course, we'll continue exploring basic arithmetic by learning about shapes and patterns. Keep up the great work in your mathematical journey, and don't hesitate to reach out if you have any questions! Welcome to Course 3 of Inclusive Basic Arithmetic! In this course, we'll explore the world of subtraction. Subtraction is a fundamental mathematical operation that helps us find out how much is left when we take things away.",
            score = False,
            start_date = None,
            end_date = None,
            user_id = None,
            learning_objective1 = "Understand the concept of subtraction.",
            learning_objective2 = "Practice subtraction through interactive online tools.",
            learning_objective3 = "Explore real-world subtraction examples.",
            homework = " "
            # user_id = u2.id,
        )

        c4 = Course(
            title = "Multiplication",
            description = "Welcome to Lesson 4! In this lesson, we'll explore the fascinating world of multiplication. Multiplication is a mathematical operation that helps us quickly find the total or product when you repeatedly add the same number to itself or combine equal groups of items or quantities.",
            score = False,
            start_date = None,
            end_date = None,
            user_id = None,
            learning_objective1 = "Understand the concept of multiplication as repeated addition.",
            learning_objective2 = "Practice simple multiplication facts using online interactive tools.",
            learning_objective3 = "Relate multiplication to real-life scenarios.",
            homework = " " 
            # user_id = u2.id,
        )

        c5 = Course(
            title = "Division",
            description = "Welcome to Lesson 5 of Basic Arithmetic! In this lesson, we'll delve into the world of division. Division is a mathematical operation that helps us understand how to share or group items equally among a certain number of people or groups.",
            score = False,
            start_date = None,
            end_date = None,
            user_id = None,
            learning_objective1 = "Understand the concept of division as sharing or grouping.",
            learning_objective2 = "Practice division using online interactive tools.",
            learning_objective3 = "Explore the concept of fair sharing in real-life scenarios.",
            homework = " "
            # user_id = u2.id,
        )

        c6 = Course(
            title = "Review and Practice",
            description = "Welcome to Lesson 6! In this lesson, we'll take a step back to review and practice the concepts we've learned so far. It's a great opportunity to reinforce your understanding and sharpen your math skills.",
            score = False,
            start_date = None,
            end_date = None,
            user_id = None,
            learning_objective1 = "Review the concepts of addition, subtraction, multiplication, and division.",
            learning_objective2 = "Practice with a variety of math exercises and quizzes.",
            learning_objective3 = "Assess your understanding of the material covered in previous lessons.",
            homework = " "
            # user_id = u2.id,
        )

        db.session.add_all( [ c1, c2, c3, c4, c5, c6 ] )
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