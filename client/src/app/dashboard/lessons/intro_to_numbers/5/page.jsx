import Link from 'next/link'
import React from 'react'

export default function page() {
    const course = {
        title : "Recap: Introduction to Numbers",
        content : "In this lesson, we've explored the fundamental concept of numbers. We've practiced counting from 1 to 10 and focused on the importance of number recognition. As we move forward, keep in mind that numbers are the building blocks of mathematics. In the next lesson, we'll explore basic addition to build on what we've learned today. Feel free to ask Aidda if you have any questions or need assistance as we take this mathematical journey together!", 
      }
    
        const layout = 
        <div className="font-sans text-blue-800 mb-12">
          <h1 className='text-center text-4xl font-semibold mb-10 underline'>{course.title}</h1>
          <div className='flex justify-center mb-20'>
            <p className="text-xl font-medium mb-8 w-3/4" >{course.content}</p>
          </div>
          <div className='flex justify-around'>
          <Link href='/dashboard/lessons/intro_to_numbers/4'>
            <button className='mt-4 rounded-full bg-purple-100 border-2 border-purple-100 px-3 py-1.5 text-sm font-semibold leading-6 text-purple-600 shadow-sm hover:bg-purple-50 hover:border-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Previous Lesson</button>
          </Link>
          <Link href='/dashboard/lessons/intro_to_numbers/6'>
            <button className='mt-4 rounded-full bg-blue-800 border-2 border-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 hover:border-blue-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Further Study</button>
          </Link>
          </div>
        </div>
    
      return (
        <main className='flex items-center justify-center bg-white h-screen'>
          {layout}
        </main>
  )
}
