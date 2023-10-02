import React from 'react'

export default function page() {
  const course = {
    title : "Learning Objectives",
    objectives : ["Understand the concept of numbers.", 
    "Learn to count from 1 to 10 through interactice online exercises.", "Practice basic number recognition using visual and auditory cues." 
  ]
  }

    const layout = 
    <div className="font-sans text-blue-800 m-5">
      <h1 className='text-center text-4xl font-semibold m-7 mt-20 mb-10 underline'>{course.title}</h1>
      <ul className='mb-20'>
      {course.objectives.map((objective, index) => {
        return <li className="text-xl font-medium mb-8" key={index}>{index + 1}. {objective}</li>
      })}
      </ul>
      <div className='flex justify-center'>
        <button className='mt-4 w-1/2 rounded-full bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Start Learning</button>
      </div>
    </div>

  return (
    <main className='flex align-center justify-center bg-white h-screen'>
      {layout}
    </main>
  )
}
