"use client"

import { useState } from 'react'

const questions = [
  {
    id: 0,
    question: 'Select the option that best describes your disability or specific learning needs:',
    answers: ['Visual Impairment', 'Hearing Impairment', 'Motor Impairment', 'Cognitive Impairment', 'None'],
    outro: 'Your choice helps me understand you better and make your learning adventure more enjoyable. Thanks for sharing! 🌈'
  },
  {
    id: 1,
    question: 'How do you usually adapt your learning experience when using digital education tools? (Select all that apply)',
    answers: ['Adjusting text size', 'Using screen readers', 'Customizing color schemes', 'Keyboard shortcuts', 'None'],
    outro: "Your insights will help me fine-tune my magic to make learning even better for you. You're already halfway there! Keep up the fantastic work!"
  },
  {
    id: 2,
    question: "In your opinion, what's the most crucial aspect an educational platform should consider to ensure it's accessible and accommodating for students with disabilities?",
    answers: ['Clear and simple language', 'Text-to-speech features', 'Interactive transcripts', 'Readable fonts and layouts', 'None'],
    outro: "Your thoughts matter, and I appreciate your input! You're doing awesome! 🌟"
  },
  {
    id: 3,
    question: 'Have you faced any specific frustrations or challenges while using educational platforms? (Select all that apply)',
    answers: ['Inaccessible content', 'Lack of customization options', 'Complex navigation', 'Limited text-to-speech features', 'None'],
    outro: 'How do you think I can help address them? Your feedback is invaluable, and you only have one question left – thank you for your time and insights!'
  },
  {
    id: 4,
    question: 'Last one! If you could choose one feature for your ideal educational platform, what would it be? (Select one)',
    answers: ['Collaborative learning spaces', 'Personalized learning plans', 'Simplified navigation', 'Enhanced text-to-speech', 'None'],
    outro: "Your vision is my inspiration (literally!), and you've finished this questionnaire like a pro!"
  }
]


export default function Questionnaire() {
  const [activeQuestionNum, setActiveQuestionNum] = useState(0)
  const [isChecked, setIsChecked] = useState(false)
  const [isChecked0, setIsChecked0] = useState(false)
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isChecked3, setIsChecked3] = useState(false)
  const [isChecked4, setIsChecked4] = useState(false)
  const [selectedAnswers, setSelectedAnswers] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: []
  })

  const {question, answers, outro} = questions[activeQuestionNum]

  const nextQuestion = () => {
    if (activeQuestionNum !== questions.length - 1){
      setActiveQuestionNum(activeQuestionNum + 1)
    }
    setIsChecked(!isChecked)
    console.log(isChecked)
  }

  const handleCheckChange = (e) => {
    console.log(e.target)
    if(e.target.checked){
      setSelectedAnswers({...selectedAnswers, [activeQuestionNum]: [...selectedAnswers[activeQuestionNum],e.target.value]})
    } else{
      let removeVal = selectedAnswers[activeQuestionNum].find((currentVal) => currentVal === e.target.value)
      let removeValIndex = selectedAnswers[activeQuestionNum].indexOf(removeVal)
      if(removeValIndex >= -1){
        selectedAnswers[activeQuestionNum].splice(removeValIndex, 1)}
      console.log(selectedAnswers)
    }
    console.log(e.target.checked)
    setIsChecked(!isChecked)
    console.log(isChecked)
  }

  const handleSubmit = () => {
    console.log('submitted!')
  }

  console.log(selectedAnswers)
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
     <div className="flex flex-col items-center justify-center h-[90vh] mx-auto max-w-3xl">
      {/* start of question */}
      <fieldset>
      <label className="text-base font-semibold text-gray-900">Question: <span>{activeQuestionNum + 1}/{questions.length}</span></label>
      <legend className="sr-only">Questions</legend>
      <h3>{question}</h3>
      <div className="space-y-5">
        {answers.map((answer, id) => {
          return (
          <div key={id + 1} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id={`answer-${id + 1}`}
                aria-describedby={`answer${id + 1}-description`}
                name={`answer-${id + 1}`}
                type="checkbox"
                value={answer}
                checked={isChecked}
                onChange={handleCheckChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor={`answer-${id + 1}`} className="font-medium text-gray-900">
                {answer}
              </label>
            </div>
          </div>
          )})}
        <div>{outro}</div>
      </div>
    </fieldset>
        <div className='flex justify-end bg-red-200 w-[45%] absolute bottom-40 '>
          {activeQuestionNum === questions.length - 1 ? 
            (<button onClick={handleSubmit}>Submit</button>) 
            : (<button onClick={nextQuestion}>Next</button>)}
        </div>
      </div>
    </div>
  )
}