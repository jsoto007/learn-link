import Link from 'next/link'
import React from 'react'

export default function page() {
  const course = {
    title : "Learning Objectives",
    objectives : ["Understand the concept of numbers.", 
    "Learn to count from 1 to 10 through interactice online exercises.", "Practice basic number recognition using visual and auditory cues." 
  ]
  }

    const layout = 
    <div className="font-sans text-[#333333] mb-12 w-4/5">
      <h1 className='text-center text-3xl font-semibold mb-10'>{course.title}</h1>
      <div className='flex justify-center mb-20'>
      <img className="text-center w-32 mr-5 mb-10" src='/Adda.svg' alt="Adda" />
      <ul className=''>
      {course.objectives.map((objective, index) => {
        return <li className="text-md font-medium mb-8" key={index}>{index + 1}. {objective}</li>
      })}
      </ul>
      </div>
      <Link href='/dashboard/lessons/intro_to_numbers/1'>
        <div className='flex justify-center'>
          <button className='mt-4 rounded-full bg-[#0F4880] border-8 border-[#0F4880] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:text-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Start Learning</button>
        </div>
      </Link>
    </div>

  return (
    <main className='flex items-center justify-center bg-white h-screen'>
      {layout}
    </main>
  )
}
