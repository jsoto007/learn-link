'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function page() {
    const [randomNumber, setRandomNumber] = useState("Ready...")
    const [startNumbers, setStartNumbers] = useState(false)


    const course = {
        title : "Multisensory Learning",
        content : "For those who benefit from multisensory learning, try saying the numbers out loud as you see them on the screen. This combines visual and auditory cues, reinforcing your understanding."
      }

    const getRandomNumber1to10 = () => {
        const randomNumber1to10 = [Math.floor(Math.random() * 10)]
        setRandomNumber(randomNumber1to10)
    }

    const startTimer = () => {
      setInterval(() => {
        getRandomNumber1to10();
      }, "3000");
    }

    
    
        const layout = 
        <div className="font-sans text-blue-800 mb-12">
          <h1 className='text-center text-4xl font-semibold mb-10 underline'>{course.title}</h1>
          <div className='flex justify-center mb-20'>
            <p className="text-xl font-medium w-3/4" >{course.content}</p>
          </div>
          <div className='flex justify-center mb-20'>
            {startNumbers === true? <p className='bg-blue-800 mb-10 px-5 py-5 text-4xl font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>{randomNumber}</p> :
            <button 
              className='mt-4 rounded-none mb-10 bg-blue-800 border-2 border-blue-800 px-1.5 py-5 text-3xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 hover:border-blue-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' 
              onClick={() => {
                setStartNumbers(!startNumbers)
                startTimer()
                }}>Click to Begin</button>}
          </div>
          <div className='flex justify-around'>
          <Link href='/dashboard/lessons/intro_to_numbers/3'>
            <button className='mt-4 rounded-full bg-purple-100 border-2 border-purple-100 px-3 py-1.5 text-sm font-semibold leading-6 text-purple-600 shadow-sm hover:bg-purple-50 hover:border-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Previous Lesson</button>
          </Link>
          <Link href='/dashboard/lessons/intro_to_numbers/5'>
            <button className='mt-4 rounded-full bg-blue-800 border-2 border-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 hover:border-blue-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Next Lesson</button>
          </Link>
          </div>
        </div>
    
      return (
        <main className='flex items-center justify-center bg-white h-screen'>
          {layout}
        </main>
  )
}
