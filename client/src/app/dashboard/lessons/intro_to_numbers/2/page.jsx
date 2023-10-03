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
        <div className="flex-col font-sans text-blue-800 mb-12">
          <h1 className='text-center text-4xl font-semibold mb-10 underline'>{course.title}</h1>
          <div className='flex justify-center mb-10'>
            <p className="text-xl font-medium w-3/4" >{course.content}</p>
          </div>
          <div className='flex justify-center mb-10'>
            <button onClick={() => speak("1")} className='bg-blue-800 mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>1</button>
            <button onClick={() => speak("2")} className='bg-blue-800 mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>2</button>
            <button onClick={() => speak("3")} className='bg-blue-800 mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>3</button>
            <button onClick={() => speak("4")} className='bg-blue-800 mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>4</button>
            <button onClick={() => speak("5")} className='bg-blue-800 mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>5</button>
          </div>
          <div className='flex justify-center mb-10'>
            <button onClick={() => speak("6")} className='bg-blue-800 mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>6</button>
            <button onClick={() => speak("7")} className='bg-blue-800 mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>7</button>
            <button onClick={() => speak("8")} className='bg-blue-800 mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>8</button>
            <button onClick={() => speak("9")} className='bg-blue-800 mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>9</button>
            <button onClick={() => speak("10")} className='bg-blue-800 mr-10 ml-10 px-5 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>10</button>
          </div>
          <div className='flex justify-center mb-5'>
            <p className='text-center'>({course.task})</p>
          </div>
          <div className='flex justify-around'>
          <Link href='/dashboard/lessons/intro_to_numbers/1'>
            <button className='mt-4 rounded-full bg-purple-100 border-2 border-purple-100 px-3 py-1.5 text-sm font-semibold leading-6 text-purple-600 shadow-sm hover:bg-purple-50 hover:border-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Previous Lesson</button>
          </Link>
          <Link href='/dashboard/lessons/intro_to_numbers/3'>
            <button className='mt-4 rounded-full bg-blue-800 border-2 border-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 hover:border-blue-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Next Lesson</button>
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
