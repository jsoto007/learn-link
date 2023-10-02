"use client"

import { useState } from 'react'

const questions = [
  {
    id: 1,
    question: 'Select the option that best describes your disability or specific learning needs:',
    answers: ['Visual Impairment', 'Hearing Impairment', 'Motor Impairment', 'Cognitive Impairment'],
    outro: 'Your choice helps me understand you better and make your learning adventure more enjoyable. Thanks for sharing! 🌈'
  }, 
  {
    id: 2,
    question: 'How do you usually adapt your learning experience when using digital education tools? (Select all that apply)',
    answers: ['Adjusting text size', 'Using screen readers', 'Customizing color schemes', 'Keyboard shortcuts'],
    outro: "Your insights will help me fine-tune my magic to make learning even better for you. You're already halfway there! Keep up the fantastic work!"
  },
  {
    id: 3,
    question: "In your opinion, what's the most crucial aspect an educational platform should consider to ensure it's accessible and accommodating for students with disabilities?",
    answers: ['Clear and simple language', 'Text-to-speech features', 'Interactive transcripts', 'Readable fonts and layouts'],
    outro: "Your thoughts matter, and I appreciate your input! You're doing awesome! 🌟"
  },
  {
    id: 4,
    question: 'Have you faced any specific frustrations or challenges while using educational platforms? (Select all that apply)',
    answers: ['Inaccessible content', 'Lack of customization options', 'Complex navigation', 'Limited text-to-speech features'],
    outro: 'How do you think I can help address them? Your feedback is invaluable, and you only have one question left – thank you for your time and insights!'
  },
  {
    id: 5,
    question: 'Last one! If you could choose one feature for your ideal educational platform, what would it be? (Select one)',
    answers: ['Collaborative learning spaces', 'Personalized learning plans', 'Simplified navigation', 'Enhanced text-to-speech'],
    outro: "Your vision is my inspiration (literally!), and you've finished this questionnaire like a pro!"
  }
]


export default function Questionnaire() {
  const [activeQuestionNum, setActiveQuestionNum] = useState(0)
  // const [activeQuestion, setActiveQuestion] = useState(null)
  // const [activeAnswer1, setActiveAnswer1] = useState(null)
  // const [activeAnswer2, setActiveAnswer2] = useState(null)
  // const [activeAnswer3, setActiveAnswer3] = useState(null)
  // const [activeAnswer4, setActiveAnswer4] = useState(null)

  const {question, answers, outro} = questions[activeQuestionNum]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
     <div className="flex flex-col items-center justify-center h-[90vh] mx-auto max-w-3xl">
      {/* start of question */}
      <fieldset>
      <label className="text-base font-semibold text-gray-900">Question: <span>{activeQuestionNum + 1}/{questions.length}</span></label>
      <legend className="sr-only">Questions</legend>
      <div className="space-y-5">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="answer-1"
              aria-describedby="answer1-description"
              name="answer-1"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="answer-1" className="font-medium text-gray-900">
              REPLACE
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="answer-2"
              aria-describedby="answer-2-description"
              name="answer-2"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="answer-2" className="font-medium text-gray-900">
              REPLACE
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="answer-3"
              aria-describedby="answer-3-description"
              name="answer-3"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="answer-3" className="font-medium text-gray-900">
              REPLACE
            </label>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="answer-4"
              aria-describedby="answer-4-description"
              name="answer-4"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="answer-4" className="font-medium text-gray-900">
              REPLACE
            </label>
          </div>
        </div>
      </div>
    </fieldset>
      <div>
    </div>
        <div className='flex justify-end bg-red-200 w-[45%] absolute bottom-40 '>
          <a href='#'>Next</a>
        </div>
      </div>
    </div>
  )
}