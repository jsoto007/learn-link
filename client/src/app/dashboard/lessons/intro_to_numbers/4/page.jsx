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
        <div className="font-sans text-[#333333] mb-12 w-4/5">
          <h1 className='text-center text-3xl font-semibold mb-10'>{course.title}</h1>
          <div className='flex justify-center mb-10'>
            <img className="text-center w-32 mr-5 mb-5" src='/Adda.svg' alt="Adda" />
            <p className="text-md font-medium mb-8 w-3/4">{course.content}</p>
          </div>
          <div className='flex justify-center mb-20'>
            {startNumbers === true? <p className="rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-3xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{randomNumber}</p> :
            <button 
              className='rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-3xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              onClick={() => {
                setStartNumbers(!startNumbers)
                startTimer()
                }}>Click to Begin</button>}
          </div>
          <div className='flex justify-around'>
          <Link href='/dashboard/lessons/intro_to_numbers/5'>
            <button className='mt-4 rounded-full bg-[#0F4880] border-8 border-[#0F4880] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:text-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Next Lesson!</button>
          </Link>
          </div>
          <div className='flex justify-around'>
          <Link href='/dashboard/lessons/intro_to_numbers/3'>
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
