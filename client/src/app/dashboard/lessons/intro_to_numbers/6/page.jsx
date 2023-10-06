import Link from 'next/link'
import React from 'react'

export default function page() {
    const course = {
        title : "Congratulations!",
        content : "You completed the course 'Introduction to Numbers'. You should be be pround of yourself. To sharpen your skills feel free to go back through the lessons, or for further study try these exercises.",
        task: ["Count objects around your home, like the number of chairs or books on a shelf.", "Try recognizing and writing numbers 1 to 10 on paper.", "Practice counting in everyday situations, like counting steps as you walk."]
      }

    const taskList = course.task.map((t, index) => {
        return <li key={index} className='text-med mb-4'>{index+1}. {t}</li>
    })
    
    const layout = 
      <div className="font-sans text-[#333333] mb-12 w-4/5">
        <h1 className='text-center text-3xl font-semibold mb-10'>{course.title}</h1>
        <div className='flex justify-center'>
        <img className="text-center w-32 mr-5 mb-5" src='/Adda.svg' alt="Adda" />
          <p className="text-xl font-medium mb-8 w-3/4" >{course.content}</p>
        </div>
        <div className='flex justify-center mb-10'>
          <ol>
            {taskList}
          </ol>
        </div>
        <div className='flex justify-around'>
          <Link href='/dashboard/lessons'>
            <button className='mt-4 rounded-full bg-[#663399] border-8 border-[#663399] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:text-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Back to Lessons!</button>
          </Link>
        </div>
      </div>
    
      return (
        <main className='flex items-center justify-center bg-white h-screen'>
          {layout}
        </main>
  )
}
