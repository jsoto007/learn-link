import Link from 'next/link'
import React from 'react'

export default function page() {
    const lessons = [
        {
            title: "Introduction to Numbers",
            lesson: "Lesson 1",
            link: "intro_to_numbers"
        },
        {
            title: "Basic Addition",
            lesson: "Lesson 2",
            link: "basic_addition"
        },
        {
            title: "Basic Subtraction",
            lesson: "Lesson 3",
            link: "basic_substraction"
        },
        {
            title: "Multiplication",
            lesson: "Lesson 4",
            link: "multiplication"
        },
        {
            title: "Division",
            lesson: "Lesson 5",
            link: "division"
        },
        {
            title: "Review and Practice",
            lesson: "Lesson 6",
            link: "review_and_practice"
        },
    ]

    const lessonsToDisplay = lessons.map((lesson, index) => {
        return (
                <Link href={`lessons/${lesson.link}`} key={index}>
                    <div className="flex justify-around items-center bg-white mb-6 px-6 py-12 shadow rounded-full w-[400px] h-[150px] cursor-pointer">
                        <div className='ml-14 w-[200px]'>
                            <h1 className='text-black font-semibold'>{lesson.title}</h1>
                            <h2 className='text-black'>{lesson.lesson}</h2> 
                        </div>
                        <div>
                            <img 
                              src=""
                              alt='Student working on a lesson'
                            />
                        </div>  
                    </div>
                </Link>
        )
    })

  return (
    <main className="h-screen bg-violet-50">
        <div className='text-center pt-5'>
            <h1 className="font-semibold text-black text-4xl">Math Lessons</h1>
        </div>
        <div className="flex justify-around">
            <div className="flex-wrap mt-10 ml-20">
                {lessonsToDisplay.slice(0,3)}
            </div>
            <div className="flex-wrap mt-10">
                {lessonsToDisplay.slice(3,6)}
            </div>
        </div>
    </main>
  )
}
