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
            homework1 = "Count objects around your home, like the number of chairs or books on a shelf.",
            homework2 = "Try recognizing and writing numbers 1 to 10 on paper.",
            homework3 = "Practice counting in everyday situations, like counting steps as you walk.",
            next_course_preview = ""
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
            homework1 = "Try adding small numbers together using objects or drawings.",
            homework2 = "Create your own addition problems, solve them, and check your answers.",
            homework3 = "Look for addition in your daily life, like counting items or snacks.",
            next_course_preview = "In the next lesson, we'll explore basic subtraction, which is like finding out how much is left when we take things away. Keep up the great work, and remember that learning math is an exciting journey! If you have any questions or need assistance, don't hesitate to ask."
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
            homework1 = "Try solving subtraction problems using everyday objects or drawings.",
            homework2 = "Create your own subtraction problems, solve them, and check your answers.",
            homework3 = "Look for situations in your daily life where subtraction can be applied, like figuring out how many pages you have left to read in a book.",
            next_course_preview = "In the next lesson, we'll continue exploring basic arithmetic by learning about shapes and patterns. Keep up the great work in your mathematical journey, and don't hesitate to reach out if you have any questions!"
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
            homework1 = "Try solving multiplication problems involving everyday objects or numbers.",
            homework2 = "Create your own multiplication problems, solve them, and check your answers.",
            homework3 = "Look for situations in your daily life where multiplication can be applied, like sharing items with friends or calculating the total cost of items.",
            next_course_preview = "In the next lesson, we'll explore basic division, which helps us understand sharing and grouping. Keep up the great work in your mathematical journey, and feel free to ask if you have any questions!" 
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
            homework1 = "Try solving division problems involving everyday objects or quantities.",
            homework2 = "Create your own division problems, solve them, and check your answers.",
            homework3 = "Look for situations in your daily life where division can be applied, like dividing chores with family members or splitting resources for a project.",
            next_course_preview = "In the next lesson, we'll explore the world of measurement, where we'll learn how to compare lengths, sizes, and weights of objects. Keep up the excellent work on your mathematical journey, and don't hesitate to ask if you have any questions!"
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
            homework1 = "Continue practicing math exercises and problems in real world situations.",
            homework2 = "Review the interactive quizzes to check your understanding.",
            homework3 = "If you encounter any difficulties, don't hesitate to ask for help or revisit earlier lessons for clarification.",
            next_course_preview = ""
            # user_id = u2.id,
        )

        db.session.add_all( [ c1, c2, c3, c4, c5, c6 ] )
        db.session.commit()
        print( 'Courses created successfully!' )

        print( 'Creating lessons...' )
        l1 = Lesson(
            title = "What are Numbers?",
            content = "Numbers are the building blocks of mathematics. They are symbols used to represent quantity, order, and position. Numbers enable us to understand and communicate about the world around us. Whether we're talking about the age of a friend, the cost of groceries, or the time on a clock, numbers play a vital role in our daily lives.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l2 = Lesson(
            title = "Let's Start Counting!",
            content = "Let's begin with the basics: counting from 1 to 10. We'll use interactive online exercises to make learning fun and engaging.",
            # Counting Practice (1-5): Click on the numbers 1 through 5 to hear and see them. Try counting along with the screen. [Interactive Exercise: Click on Numbers 1-5]
            # Counting Practice (6-10): Now, let's move on to numbers 6 through 10. Click on each number to hear and see them.
            # [Interactive Exercise: Click on Numbers 6-10]
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l3 = Lesson(
            title = "Number Recognition",
            content = "Recognizing numbers is essential. Let's practice recognizing numbers by matching them to their written form.",
            #Matching Exercise: Match the written numbers to the corresponding numerical symbols.
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l4 = Lesson(
            title = "Multisensory Learning",
            content = "For those who benefit from multisensory learning, try saying the numbers out loud as you see them on the screen. This combines visual and auditory cues, reinforcing your understanding.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l5 = Lesson(
            title = "Introduction to Numbers Recap",
            content = "In this lesson, we've explored the fundamental concept of numbers. We've practiced counting from 1 to 10 and focused on the importance of number recognition. As we move forward, keep in mind that numbers are the building blocks of mathematics. In the next lesson, we'll explore basic addition to build on what we've learned today. Feel free to ask if you have any questions or need assistance as we take this mathematical journey together!",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        #-----------------Course Two Lessons-------------
        l6 = Lesson(
            title = "What is Addition?",
            content = "Numbers are the building blocks of mathematics. They are symbols used to represent quantity, order, and position. Numbers enable us to understand and communicate about the world around us. Whether we're talking about the age of a friend, the cost of groceries, or the time on a clock, numbers play a vital role in our daily lives.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l7 = Lesson(
            title = "Let's Add!",
            content = "Now, let's dive into some simple addition problems using interactive online tools:",
            # Addition Practice (1+1): Click on the numbers 1 and 1 to see and hear them. Then, click on the "+" symbol, and finally, click on the "=" symbol to get the answer. [Interactive Exercise: 1 + 1]
            # Addition Practice (2+2): Next, let's try a slightly more challenging addition problem. Click on the numbers 2 and 2, followed by the "+" and "=" symbols.[Interactive Exercise: 2 + 2]
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l8 = Lesson(
            title = "Real-World Examples",
            content = "Adding numbers is something we all do daily. For example, if you have one dollar, and you get another dollar, you'll have two dollars. Or, think about having two books and then getting two more from the library; you'll have four books altogether. Now, imagine situations where you use addition in your life, like adding up the points in a game. Try doing these math problems in your head, or use objects like your favorite snacks or toys to help you understand better.",
            #Matching Exercise: Match the written numbers to the corresponding numerical symbols.
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l9 = Lesson(
            title = "Multisensory Learning",
            content = "For multisensory learners, you can say the numbers out loud as you see them on the screen. This combines visual and auditory cues, reinforcing your understanding.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l10 = Lesson(
            title = "Basic Addition Recap",
            content = "In this lesson, we explored the concept of addition, which is the operation of putting numbers together to find a total. We practiced adding with simple examples using interactive tools, and we also related addition to real-life situations, like counting candies or toys. Remember that addition is a fundamental math skill that we use daily, and as we progress through the course, we'll build on this foundation to solve more complex math problems. If you have any questions or need help, feel free to reach out. Keep up the good work in your math journey!",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        #-----------------Course Three Lessons-------------
        l11 = Lesson(
            title = "What is Subtraction?",
            content = "Subtraction is a mathematical operation used when we want to find out how much is left when we take away one number from another. It's like figuring out the difference or what remains. We use the '-' symbol to represent subtraction.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l12 = Lesson(
            title = "Let's Subtract!",
            content = "Now, let's dive into some simple subtraction problems using interactive online tools:",
            # Subtraction Practice (3-1): Click on the number 3 and then the "-" symbol. Next, click on the number 1, and finally, click on the "=" symbol to find the answer. [Interactive Exercise: 3 - 1]
            # Subtraction Practice (5-2): Try a slightly more challenging subtraction problem. Click on the number 5, the "-" symbol, the number 2, and then the "=" symbol.[Interactive Exercise: 5 - 2]
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l13 = Lesson(
            title = "Real-World Examples",
            content = "Subtraction is something we encounter daily. For example, if you have five sandwiches and you eat two of them, you'll have three sandwiches left. Or, if you have seven cars and you give away three, you'll have four cars remaining.Think of real-life situations where subtraction is used, like counting the cookies you have or figuring out how many days are left until your birthday. Try solving these subtraction problems mentally, and use objects or examples from your own life to help you understand.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l14 = Lesson(
            title = "Multisensory Learning",
            content = "For those who find it helpful, you can say the numbers out loud as you see them on the screen. Combining visual and auditory cues can reinforce your understanding of subtraction.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l15 = Lesson(
            title = "Basic Subtraction Recap",
            content = "In this lesson, we've explored the concept of subtraction, which helps us find out what remains when we take one number away from another. We practiced subtraction using interactive tools and related it to real-life situations like counting things in your daily life. Subtraction is a fundamental skill, and as we progress through the course, we'll build on this knowledge to tackle more complex math problems. If you have any questions or need assistance, feel free to ask. Continue doing an excellent job as you embark on your math adventure!",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        #-----------------Course Four Lessons-------------
        l16 = Lesson(
            title = "What is Multiplication?",
            content = "Multiplication is like a speedy way of adding things together when we have equal groups or quantities. It's a way to find the total quickly by adding the same number over and over again. We use the '×' symbol to represent multiplication.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l17 = Lesson(
            title = "Multiplication as Repeated Addition",
            content = "Think of multiplication as a shortcut for adding the same number multiple times. For example, 2 × 3 means you're adding 2 three times (2 + 2 + 2), which equals 6.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l18 = Lesson(
            title = "Let's Multiply!",
            content = "Now, let's practice some simple multiplication problems using interactive online tools:",
            #Multiplication Practice (2 × 3): Click on the number 2, followed by the "×" symbol, and then click on the number 3. Finally, click on the "=" symbol to find the answer.  [Interactive Exercise: 2 × 3]
            #Multiplication Practice (4 × 2): Try another multiplication problem. Click on the number 4, then the "×" symbol, and finally, click on the number 2. [Interactive Exercise: 4 × 2]
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l19 = Lesson(
            title = "Multiplication in Real-Life",
            content = "Multiplication is a handy skill for everyday situations. Imagine you have 3 boxes of chocolates, and each box contains 5 chocolates. To find out how many chocolates you have in total, you can use multiplication (3 x 5 = 15). Think of other real-life scenarios where multiplication can be applied, like calculating the total number of apples in several baskets or finding out how much money you'll have if you earn a certain amount each day for a week.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l20 = Lesson(
            title = "Basic Multiplication Recap",
            content = "In summary, multiplication is a valuable skill that helps us find totals quickly when we have equal groups or quantities. We've practiced basic multiplication using interactive tools and explored its relevance in solving real-life problems. As we move forward, remember that multiplication is a powerful mathematical tool with numerous practical applications. If you have any questions or need assistance, don't hesitate to ask. Great job on your math journey!",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        #-----------------Course Five Lessons-------------
        l21 = Lesson(
            title = "What is Division?",
            content = "Division is like a tool we use when we want to share things equally among a group or create equal-sized groups. It helps us find out how many items each person or group should get. We use the '÷' symbol to represent division.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l22 = Lesson(
            title = "Division as Sharing",
            content = "Think of division as a way to share things fairly. For example, if you have 6 candies and want to share them equally among 3 friends, division helps you find out that each friend gets 2 candies (6 ÷ 3 = 2).",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l23 = Lesson(
            title = "Let's Multiply!",
            content = "Now, let's practice some simple division problems using interactive online tools:",
            # Division Practice (8 ÷ 2): Click on the number 8, followed by the "÷" symbol, and then click on the number 2. Finally, click on the "=" symbol to find the answer. [Interactive Exercise: 8 ÷ 2]
            # Division Practice (15 ÷ 3): Try another division problem. Click on the number 15, then the "÷" symbol, and finally, click on the number 3. [Interactive Exercise: 15 ÷ 3]
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l24 = Lesson(
            title = "Division in Real-Life",
            content = "Division is a practical skill for everyday situations. Imagine you have 10 pencils, and you want to divide them equally among 2 friends. You can use division to determine that each friend gets 5 pencils (10 ÷ 2 = 5). Think of other real-life scenarios where division can be applied, like dividing your money among different savings goals.",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )
        l25 = Lesson(
            title = "Basic Division Recap",
            content = "In summary, division is a practical skill that helps us share things equally or create groups of equal size. We've practiced division using interactive tools and explored its relevance in solving real-life sharing and grouping problems. As we continue, remember that division is a valuable mathematical tool with numerous practical applications in everyday situations. If you have any questions or need assistance, feel free to reach out. Keep up the great work on your math journey!",
            duration = "1 week",
            score = False,
            course_id = c1.id,
            user_id = u1.id,
        )


        lessons = [ l1, l2, l3, l4, l5, l6 ,l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l16, l18, l19, l20, l21, l22, l23, l24, l25 ]
        db.session.add_all( lessons )
        db.session.commit()
        print( 'Lessons created successfully!' )
        
        print( "Seeding complete!" )