import Link from 'next/link'
import React from 'react'

export default function page() {
    const course = {
        title : "Recap: Introduction to Numbers",
        content : "In this lesson, we've explored the fundamental concept of numbers. We've practiced counting from 1 to 10 and focused on the importance of number recognition. As we move forward, keep in mind that numbers are the building blocks of mathematics. In the next lesson, we'll explore basic addition to build on what we've learned today. Feel free to ask Aidda if you have any questions or need assistance as we take this mathematical journey together!", 
      }
    
        const layout = 
        <div className="font-sans text-[#333333] mb-12 w-4/5">
          <h1 className='text-center text-3xl font-semibold mb-10'>{course.title}</h1>
          <div className='flex justify-center mb-10'>
            <img className="text-center w-32 mr-5 mb-5" src='/Adda.svg' alt="Adda" />
            <p className="text-md font-medium mb-8 w-3/4">{course.content}</p>
          </div>
          <div className='flex justify-around'>
          <Link href='/dashboard/lessons/intro_to_numbers/6'>
            <button className='mt-4 rounded-full bg-[#0F4880] border-8 border-[#0F4880] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:text-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Next Lesson!</button>
          </Link>
          </div>
          <div className='flex justify-around'>
          <Link href='/dashboard/lessons/intro_to_numbers/4'>
            <button className='mt-3 px-3 py-2 text-sm font-semibold leading-6 text-[#0F4880] underline hover:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Previous Lesson</button>
          </Link>
          </div>
        </div>
    
      return (
        <main className='flex items-center justify-center bg-white h-screen'>
          {layout}
        </main>
  )
}
