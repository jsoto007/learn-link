'use client'
import Link from 'next/link'
import React from 'react'


export default function page() {

    const course = {
        title : "Let's Start Counting!",
        content : "Let's begin with the basics: counting from 1 to 10. We'll use interactive online exercises to make learning fun and engaging.",
        task: "Click on the numbers 1 through 10 to hear and see them. Try counting along with the screen."
      }

    const speak = (word) => {
        let utterance = new SpeechSynthesisUtterance(word)
        speechSynthesis.speak(utterance)
    }
    
    const layout = (
        <div className="font-sans text-[#333333] mb-12 w-4/5">
          <h1 className='text-center text-3xl font-semibold mb-10'>{course.title}</h1>
          <div className='flex justify-center mb-5'>
            <img className="text-center w-32 mr-5" src='/Adda.svg' alt="Adda" />
            <p className="text-md font-medium mb-8 w-3/4">{course.content}</p>
          </div>
          <div className='flex justify-center mb-10'>
            <button onClick={() => speak("1")} className='rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>1</button>
            <button onClick={() => speak("2")} className='rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>2</button>
            <button onClick={() => speak("3")} className='rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>3</button>
            <button onClick={() => speak("4")} className='rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>4</button>
            <button onClick={() => speak("5")} className='rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>5</button>
          </div>
          <div className='flex justify-center mb-10'>
            <button onClick={() => speak("6")} className='rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>6</button>
            <button onClick={() => speak("7")} className='rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>7</button>
            <button onClick={() => speak("8")} className='rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>8</button>
            <button onClick={() => speak("9")} className='rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>9</button>
            <button onClick={() => speak("10")} className='rounded-md border-4 border-[#0F4880] mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-[#333333] shadow-sm hover:bg-[#0F4880] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>10</button>
          </div>
          <div className='flex justify-center mb-5'>
            <p className='text-center'>({course.task})</p>
          </div>
          <div className='flex justify-around'>
          <Link href='/dashboard/lessons/intro_to_numbers/3'>
            <button className='mt-4 rounded-full bg-[#0F4880] border-8 border-[#0F4880] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:text-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Next Lesson!</button>
          </Link>
          </div>
          <div className='flex justify-around'>
          <Link href='/dashboard/lessons/intro_to_numbers/1'>
            <button className='mt-3 px-3 py-2 text-sm font-semibold leading-6 text-[#0F4880] underline hover:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Previous Lesson</button>
          </Link>
          </div>
        </div>
    )
    
      return (
        <main className='flex items-center justify-center bg-white h-screen'>
          {layout}
        </main>
  )
}
