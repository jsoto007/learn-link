'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function page() {
    const [answer1, setAnswer1] = useState(null)
    const [answer2, setAnswer2] = useState(null)
    const [answer3, setAnswer3] = useState(null)
    const [answer4, setAnswer4] = useState(null)
    const [answer5, setAnswer5] = useState(null)
    const [response1, setResponse1] = useState(null)
    const [response2, setResponse2] = useState(null)
    const [response3, setResponse3] = useState(null)
    const [response4, setResponse4] = useState(null)
    const [response5, setResponse5] = useState(null)

    const course = {
        title : "Number Recognition",
        content : "Recognizing numbers is essential. They come in both a numerical form (7) and a written form (seven). Let's practice recognizing numbers by matching them to their written form.",
        task : "Match the written numbers to the corresponding numerical symbols."
      }

      const handleCheck = (e) => {
        if (e.target.id === "answer1") {
            setAnswer1(e.target.value)
        }
        if (e.target.id === "answer2") {
            setAnswer2(e.target.value)
        }
        if (e.target.id === "answer3") {
            setAnswer3(e.target.value)
        }
        if (e.target.id === "answer4") {
            setAnswer4(e.target.value)
        }
        if (e.target.id === "answer5") {
            setAnswer5(e.target.value)
        }
    }

    const correctArray = ["Great job!", "You got it!", "That's right!", "Alright!"]
    const incorrectArray = ["Try again", "Almost", "Not quite", "Try another"]

    const getResponse = (arr) => {  
        const response = arr[Math.floor(Math.random() * arr.length)]
        return response
    }

    const layout = 
    <div className="font-sans text-blue-800 mb-12">
      <h1 className='text-center text-4xl font-semibold mb-10 underline'>{course.title}</h1>
      <div className='flex justify-center mb-5'>
        <p className="text-xl font-medium w-4/5" >{course.content}</p>
      </div>
      <div className='flex justify-center mb-5'>
        <p>({course.task})</p>
      </div>
      <div className='flex justify-center mb-3'>
        <p>1</p>
        <div className='flex justify-around w-2/3'>
            <div>
                <label htmlFor='answer1'>One</label>
                <input 
                className="ml-2" 
                id="answer1" 
                value="correct" 
                name="question 1 answer 1"
                type='radio'
                onClick={ (e) => {
                    handleCheck(e)
                    setResponse1(getResponse(correctArray))
                    }}  
                />
            </div>
            <div>
                <label htmlFor='answer1'>Three</label>
                <input 
                  className="ml-2" 
                  id="answer1" 
                  value="incorrect" 
                  type='radio'
                  name="question 1 answer 2" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse1(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <div>
            <label htmlFor='answer1'>Seven</label>
            <input 
                  className="ml-2" 
                  id="answer1" 
                  value="incorrect" 
                  type='radio'
                  name="question 1 answer 3" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse1(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <div>
            <label htmlFor='answer1'>Two</label>
            <input 
                  className="ml-2" 
                  id="answer1" 
                  value="incorrect" 
                  type='radio'
                  name="question 1 answer 4" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse1(getResponse(incorrectArray))
                    }}  
                />
            </div>
        </div>
        <p>{response1}</p>
     </div>
     <div className='flex justify-center mb-3'>
        <p>4</p>
        <div className='flex justify-around w-2/3'>
            <div>
            <label htmlFor='answer2'>Three</label>
            <input 
              className="ml-2" 
              id="answer2" 
              value="incorrect" 
              name="question 2 answer 1"
              type='radio'  
              onClick={(e) => {
                handleCheck(e)
                setResponse2(getResponse(incorrectArray))
                }}  
                />
            </div>
            <div>
            <label htmlFor='answer 1'>Five</label>
            <input 
                className="ml-2" 
                id="answer2" 
                value="incorrect" 
                name="question 2 answer 2" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse2(getResponse(incorrectArray))
                    }}
                 />
            </div>
            <div>
            <label htmlFor='answer 1'>Four</label>
            <input 
                className="ml-2" 
                id="answer2" 
                value="correct" 
                name="question 2 answer 3" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse2(getResponse(correctArray))
                    }}
                 />
            </div>
            <div>
            <label htmlFor='answer 1'>Ten</label>
            <input 
                className="ml-2" 
                id="answer2" 
                value="incorrect" 
                name="question 2 answer 4" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse2(getResponse(incorrectArray))
                    }}
                 />
            </div>
        </div>
        {<p>{response2}</p>}
     </div>
     <div className='flex justify-center mb-3'>
        <p>7</p>
        <div className='flex justify-evenly w-2/3'>
            <div>
            <label htmlFor='answer 1'>One</label>
            <input 
                className="ml-2" 
                id="answer3" 
                value="incorrect" 
                name="question 3 answer 1" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse3(getResponse(incorrectArray))
                    }}
                 />
            </div>
            <div>
            <label htmlFor='answer 1'>Three</label>
            <input 
                className="ml-2" 
                id="answer3" 
                value="incorrect" 
                name="question 3 answer 2" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse3(getResponse(incorrectArray))
                    }}
                 />
            </div>
            <div>
            <label htmlFor='answer 1'>Seven</label>
            <input 
                className="ml-2" 
                id="answer3" 
                value="correct" 
                name="question 3 answer 3" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse3(getResponse(correctArray))
                    }}
                 />
            </div>
            <div>
            <label htmlFor='answer 1'>Two</label>
            <input 
                className="ml-2" 
                id="answer3" 
                value="incorrect" 
                name="question 3 answer 4" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse3(getResponse(incorrectArray))
                    }}
                 />
            </div>
        </div>
        {response3}
     </div>
     <div className='flex justify-center mb-3'>
        <p>10</p>
        <div className='flex justify-evenly w-2/3'>
            <div>
            <label htmlFor='answer 1'>One</label>
            <input 
                className="ml-2" 
                id="answer4" 
                value="incorrect" 
                name="question 4 answer 1" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse4(getResponse(incorrectArray))
                    }}
                 />
            </div>
            <div>
            <label htmlFor='answer 1'>Ten</label>
            <input 
                className="ml-2" 
                id="answer4" 
                value="correct" 
                name="question 4 answer 2" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse4(getResponse(correctArray))
                    }}
                 />
            </div>
            <div>
            <label htmlFor='answer 1'>Seven</label>
            <input 
                className="ml-2" 
                id="answer4" 
                value="incorrect" 
                name="question 4 answer 3" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse4(getResponse(incorrectArray))
                    }}
                 />
            </div>
            <div>
            <label htmlFor='answer 1'>Two</label>
            <input 
                className="ml-2" 
                id="answer4" 
                value="incorrect" 
                name="question 4 answer 4" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse4(getResponse(incorrectArray))
                    }}
                 />
            </div>
        </div>
        {response4}
     </div>
     <div className='flex justify-center mb-7'>
        <p>8</p>
        <div className='flex justify-evenly w-2/3'>
            <div>
            <label htmlFor='answer 1'>Nine</label>
            <input 
                className="ml-2" 
                id="answer5" 
                value="incorrect" 
                name="question 5 answer 1" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse5(getResponse(incorrectArray))
                    }}
                 />
            </div>
            <div>
            <label htmlFor='answer 1'>Five</label>
            <input 
                className="ml-2" 
                id="answer5" 
                value="incorrect" 
                name="question 5 answer 2" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse5(getResponse(correctArray))
                    }}
                 />
            </div>
            <div>
            <label htmlFor='answer 1'>Seven</label>
            <input 
                className="ml-2" 
                id="answer5" 
                value="incorrect" 
                name="question 5 answer 3" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse5(getResponse(incorrectArray))
                    }}
                 />
            </div>
            <div>
            <label htmlFor='answer 1'>Eight</label>
            <input 
                className="ml-2" 
                id="answer5" 
                value="correct" 
                name="question 5 answer 4" 
                type='radio'
                onClick={(e) => {
                    handleCheck(e)
                    setResponse5(getResponse(correctArray))
                    }}
                 />
            </div>
        </div>
        {response5}
     </div>
      <div className='flex justify-around'>
      <Link href='/dashboard/lessons/intro_to_numbers/2'>
        <button className='mt-4 rounded-full bg-purple-100 border-2 border-purple-100 px-3 py-1.5 text-sm font-semibold leading-6 text-purple-600 shadow-sm hover:bg-purple-50 hover:border-purple-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Previous Lesson</button>
      </Link>
      <Link href='/dashboard/lessons/intro_to_numbers/4'>
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
