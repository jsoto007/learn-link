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
    const incorrectArray = ["Try again...", "Almost...", "Not quite...", "Try another..."]

    const getResponse = (arr) => {  
        const response = arr[Math.floor(Math.random() * arr.length)]
        return response
    }

    console.log(answer5)



    const layout = 
    <div className="font-sans text-[#333333] mb-12 w-4/5">
      <h1 className='text-center text-3xl font-semibold mb-10'>{course.title}</h1>
      <div className='flex justify-center mb-5'>
        <img className="text-center w-32 mr-5 mb-5" src='/Adda.svg' alt="Adda" />
        <p className="text-md font-medium mb-8 w-3/4">{course.content}</p>
      </div>
      <div className='flex justify-center mb-5'>
        <p>({course.task})</p>
      </div>
      <div className='flex justify-center mb-10'>
      <div className='flex justify-around w-2/3'>
            <div className='w-3/5'>
            <p className='rounded-md border-4 border-[#0F4880] text-center text-xl font-bold text-[#333333] mb-3'>8</p>
            <div className='flex justify-between'>
                <label className="font-medium" htmlFor='answer1'>Six</label>
                <input 
                className="mt-1" 
                id="answer1" 
                value="incorrect" 
                name="question1answer"
                type='radio'
                onClick={ (e) => {
                    handleCheck(e)
                    setResponse1(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <div className='flex justify-between'>
                <label className="font-medium" htmlFor='answer1'>Five</label>
                <input 
                  className="mt-1" 
                  id="answer1" 
                  value="incorrect" 
                  type='radio'
                  name="question1answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse1(getResponse(incorrectArray))
                    }}/>
            </div>
            <div className='flex justify-between'>
            <label className="font-medium" htmlFor='answer1'>Eight</label>
            <input 
                  className="mt-1" 
                  id="answer1" 
                  value="correct" 
                  type='radio'
                  name="question1answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse1(getResponse(correctArray))
                    }}  
                />
            </div>
            <div className='flex justify-between'>
            <label className="font-medium" htmlFor='answer1'>Four</label>
            <input 
                  className="mt-1" 
                  id="answer2" 
                  value="incorrect" 
                  type='radio'
                  name="question1answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse1(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <p className='text-center font-semibold text-[#0F4880] mt-3'>{response1}</p>
        </div>
        </div>
         <div className='flex justify-around w-2/3'>
            <div className='w-3/5'>
            <p className='rounded-md border-4 border-[#0F4880] text-center text-xl font-bold text-[#333333] mb-3'>3</p>
            <div className='flex justify-between'>
                <label className="font-medium" htmlFor='answer2'>Nine</label>
                <input 
                className="mt-1" 
                id="answer2" 
                value="incorrect" 
                name="question2answer"
                type='radio'
                onClick={ (e) => {
                    handleCheck(e)
                    setResponse2(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <div className='flex justify-between'>
                <label className="font-medium" htmlFor='answer2'>Three</label>
                <input 
                  className="mt-1" 
                  id="answer1" 
                  value="correct" 
                  type='radio'
                  name="question2answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse2(getResponse(correctArray))
                    }}/>
            </div>
            <div className='flex justify-between'>
            <label className="font-medium" htmlFor='answer2'>Seven</label>
            <input 
                  className="mt-1" 
                  id="answer2" 
                  value="incorrect" 
                  type='radio'
                  name="question2answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse2(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <div className='flex justify-between'>
            <label className="font-medium" htmlFor='answer2'>Two</label>
            <input 
                  className="mt-1" 
                  id="answer2" 
                  value="incorrect" 
                  type='radio'
                  name="question2answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse2(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <p className='text-center font-semibold text-[#0F4880] mt-3'>{response2}</p>
        </div>
        </div>
         <div className='flex justify-around w-2/3'>
            <div className='w-3/5'>
            <p className='rounded-md border-4 border-[#0F4880] text-center text-xl font-bold text-[#333333] mb-3'>7</p>
            <div className='flex justify-between'>
                <label className="font-medium" htmlFor='answer3'>Ten</label>
                <input 
                className="mt-1" 
                id="answer3" 
                value="incorrect" 
                name="question3answer"
                type='radio'
                onClick={ (e) => {
                    handleCheck(e)
                    setResponse3(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <div className='flex justify-between'>
                <label className="font-medium" htmlFor='answer3'>Eight</label>
                <input 
                  className="mt-1" 
                  id="answer3" 
                  value="incorrect" 
                  type='radio'
                  name="question3answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse3(getResponse(incorrectArray))
                    }}/>
            </div>
            <div className='flex justify-between'>
            <label className="font-medium" htmlFor='answer3'>Seven</label>
            <input 
                  className="mt-1" 
                  id="answer3" 
                  value="correct" 
                  type='radio'
                  name="question3answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse3(getResponse(correctArray))
                    }}  
                />
            </div>
            <div className='flex justify-between'>
            <label className="font-medium" htmlFor='answer3'>Ten</label>
            <input 
                  className="mt-1" 
                  id="answer3" 
                  value="incorrect" 
                  type='radio'
                  name="question3answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse3(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <p className='text-center font-semibold text-[#0F4880] mt-3'>{response3}</p>
        </div>
        </div>
        <div className='flex justify-around w-2/3'>
            <div className='w-3/5'>
            <p className='rounded-md border-4 border-[#0F4880] text-center text-xl font-bold text-[#333333] mb-3'>2</p>
            <div className='flex justify-between'>
                <label className="font-medium" htmlFor='answer4'>Three</label>
                <input 
                className="mt-1" 
                id="answer4" 
                value="incorrect" 
                name="question4answer"
                type='radio'
                onClick={ (e) => {
                    handleCheck(e)
                    setResponse4(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <div className='flex justify-between'>
                <label className="font-medium" htmlFor='answer4'>Seven</label>
                <input 
                  className="mt-1" 
                  id="answer4" 
                  value="incorrect" 
                  type='radio'
                  name="question4answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse4(getResponse(incorrectArray))
                    }}/>
            </div>
            <div className='flex justify-between'>
            <label className="font-medium" htmlFor='answer4'>Four</label>
            <input 
                  className="mt-1" 
                  id="answer4" 
                  value="incorrect" 
                  type='radio'
                  name="question4answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse4(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <div className='flex justify-between'>
            <label className="font-medium" htmlFor='answer4'>Two</label>
            <input 
                  className="mt-1" 
                  id="answer4" 
                  value="correct" 
                  type='radio'
                  name="question4answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse4(getResponse(correctArray))
                    }}  
                />
            </div>
            <p className='text-center font-semibold text-[#0F4880] mt-3'>{response4}</p>
        </div>
        </div>
        <div className='flex justify-around w-2/3'>
            <div className='w-3/5'>
            <p className='rounded-md border-4 border-[#0F4880] text-center text-xl font-bold text-[#333333] mb-3'>1</p>
            <div className='flex justify-between'>
                <label className="font-medium" htmlFor='answer5'>One</label>
                <input 
                className="mt-1" 
                id="answer5" 
                value="correct" 
                name="question5answer"
                type='radio'
                onClick={ (e) => {
                    handleCheck(e)
                    setResponse5(getResponse(correctArray))
                    }}  
                />
            </div>
            <div className='flex justify-between'>
                <label className="font-medium" htmlFor='answer5'>Six</label>
                <input 
                  className="mt-1" 
                  id="answer5" 
                  value="incorrect" 
                  type='radio'
                  name="question5answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse5(getResponse(incorrectArray))
                    }}/>
            </div>
            <div className='flex justify-between'>
            <label className="font-medium" htmlFor='answer5'>Five</label>
            <input 
                  className="mt-1" 
                  id="answer5" 
                  value="incorrect" 
                  type='radio'
                  name="question5answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse5(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <div className='flex justify-between'>
            <label className="font-medium" htmlFor='answer5'>Two</label>
            <input 
                  className="mt-1" 
                  id="answer5" 
                  value="incorrect" 
                  type='radio'
                  name="question5answer" 
                  onClick={ (e) => {
                    handleCheck(e)
                    setResponse5(getResponse(incorrectArray))
                    }}  
                />
            </div>
            <p className='text-center font-semibold text-[#0F4880] mt-3'>{response5}</p>
        </div>
        </div>
     </div>
     <div className='flex justify-around'>
          <Link href='/dashboard/lessons/intro_to_numbers/4'>
            <button className='mt-4 rounded-full bg-[#0F4880] border-8 border-[#0F4880] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:text-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Next Lesson!</button>
          </Link>
          </div>
          <div className='flex justify-around'>
          <Link href='/dashboard/lessons/intro_to_numbers/2'>
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
