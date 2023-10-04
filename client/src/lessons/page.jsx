import Link from 'next/link'
import React from 'react'


export default function page() {
    const lessons = [
        {
            title: "Introduction to Numbers",
            lesson: "Course 1",
            link: "intro_to_numbers"
        },
        {
            title: "Basic Addition",
            lesson: "Course 2",
            link: "basic_addition"
        },
        {
            title: "Basic Subtraction",
            lesson: "Course 3",
            link: "basic_substraction"
        },
        {
            title: "Multiplication",
            lesson: "Course 4",
            link: "multiplication"
        },
        {
            title: "Division",
            lesson: "Course 5",
            link: "division"
        },
        {
            title: "Review and Practice",
            lesson: "Course 6",
            link: "review_and_practice"
        },
    ]

    const lessonsToDisplay = lessons.map((lesson, index) => {
        return (
                <Link href={`lessons/${lesson.link}`} key={index}>
                    <div className="flex justify-around items-center bg-white mb-6 px-6 py-12 shadow rounded-full w-[400px] h-[150px] cursor-pointer">
                        <div className='ml-3 w-[200px]'>
                            <h1 className='text-black font-semibold'>{lesson.title}</h1>
                            <h2 className='text-black'>{lesson.lesson}</h2> 
                        </div>
                        <div>
                            <svg width="51" height="50" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="book-open">
                                <path id="Icon" d="M20.5 11.6667C20.5 9.89856 19.7977 8.20286 18.5474 6.95262C17.2972 5.70238 15.6015 5 13.8334 5H3.83337V30H15.5C16.8261 30 18.0979 30.5268 19.0356 31.4645C19.9733 32.4021 20.5 33.6739 20.5 35M20.5 11.6667V35M20.5 11.6667C20.5 9.89856 21.2024 8.20286 22.4527 6.95262C23.7029 5.70238 25.3986 5 27.1667 5H37.1667V30H25.5C24.174 30 22.9022 30.5268 21.9645 31.4645C21.0268 32.4021 20.5 33.6739 20.5 35" stroke="#1e40af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                        </div>  
                    </div>
                </Link>
        )
    })

  return (
    <main className="h-screen bg-violet-50">
        <div className='text-center pt-5'>
            <h1 className="font-semibold text-black text-4xl">Math Courses</h1>
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
