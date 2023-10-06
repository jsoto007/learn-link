"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import QuestionnaireNav from '@/app/components/QuestionnaireNav';

const questions = [
  {
    id: 0,
    question: 'Select the option that best describes your disability or specific learning needs:',
    answers: ['Visual Impairment', 'Hearing Impairment', 'Motor Impairment', 'Cognitive Impairment', 'Other', 'None / Prefer not to say'],
    outro: 'Your choice helps me understand you better and make your learning adventure more enjoyable. Thanks for sharing! 🌈'
  },
  {
    id: 1,
    question: 'How do you usually adapt your learning experience when using digital education tools? (Select all that apply)',
    answers: ['Adjusting text size', 'Using screen readers', 'Customizing color schemes', 'Keyboard shortcuts', 'Other', 'None / Prefer not to say'],
    outro: "Your insights will help me fine-tune my magic to make learning even better for you. You're already halfway there! Keep up the fantastic work!"
  },
  {
    id: 2,
    question: "In your opinion, what's the most crucial aspect an educational platform should consider to ensure it's accessible and accommodating for students with disabilities?",
    answers: ['Clear and simple language', 'Text-to-speech features', 'Interactive transcripts', 'Readable fonts and layouts', 'Other', 'None / Prefer not to saye'],
    outro: "Your thoughts matter, and I appreciate your input! You're doing awesome! 🌟"
  },
  {
    id: 3,
    question: 'Have you faced any specific frustrations or challenges while using educational platforms? (Select all that apply)',
    answers: ['Inaccessible content', 'Lack of customization options', 'Complex navigation', 'Limited text-to-speech features', 'Other', 'None / Prefer not to say'],
    outro: 'How do you think I can help address them? Your feedback is invaluable, and you only have one question left – thank you for your time and insights!'
  },
  {
    id: 4,
    question: 'Last one! If you could choose one feature for your ideal educational platform, what would it be? (Select one)',
    answers: ['Collaborative learning spaces', 'Personalized learning plans', 'Simplified navigation', 'Enhanced text-to-speech', 'Other', 'None / Prefer not to say'],
    outro: "Your vision is my inspiration (literally!), and you've finished this questionnaire like a pro!"
  }
]


export default function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: []
  })

  const router = useRouter()

  const {question, answers, outro} = questions[currentQuestionIndex]

  const handleCheckChange = (e, answer) => {
    // keeps track of what is currently clicked, clearing after each question change
    if (currentAnswers.includes(answer)) {
      // If the answer is already in the answers array, remove it to uncheck the checkbox
      setCurrentAnswers(currentAnswers.filter((a) => a !== answer));
    } else {
      // If the answer is not in the answers array, add it to check the checkbox
      setCurrentAnswers([...currentAnswers, answer]);
    }

    //keeps track of total answers for all questions, collecting them for database
    if(e.target.checked){
        // If the checked answer is not in the total answers array, add it for database
        setSelectedAnswers({...selectedAnswers, [currentQuestionIndex]: [...selectedAnswers[currentQuestionIndex],e.target.value]})
      } else{
        // If the checked answer is already in the total answers array, remove it as to avoid repeats
        const valueToRemove = e.target.value;
        selectedAnswers[currentQuestionIndex] = selectedAnswers[currentQuestionIndex].filter(
          (currentVal) => currentVal !== valueToRemove
        );
      }
  };

  // console.log(selectedAnswers)

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

   const handleSubmit = (e) => {
    e.preventDefault()
  //   fetch('/api/signup/questionnaire', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(selectedAnswers)
  // })
  // .then((r) => r.json())
  // .then(data => console.log(data))
  // .then(() => 
    router.push('/signup/questionnaire/thankyou')
  }

  const renderCurrentQuestion = () => {
    return (
      <div className="mx-auto max-w-7xl mt-12 px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="flex flex-col items-center h-[90vh] mx-auto max-w-6xl">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
            >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          {/* start of question */}
          <fieldset className='flex flex-col'>
            <label className="text-center text-4xl font-normal leading-9 tracking-tight text-gray-900">Question: <span>{currentQuestionIndex + 1}/{questions.length}</span></label>
            <legend className="sr-only">Questions</legend>
            <h3 className='my-11 text-center'><img className='inline mx-11' src='/Adda-head.png'/>
              {question}
            </h3>
            <div className="flex flex-col items-center">
              <div className="space-y-5 items-start mb-12">
                {answers.map((answer, id) => {
                  return (
                  <div key={id + 1} className="relative flex items-start justify-start">
                    <div className="flex h-6 items-center">
                      <input
                        id={`answer-${id + 1}`}
                        aria-describedby={`answer${id + 1}-description`}
                        name={`answer-${id + 1}`}
                        type="checkbox"
                        value={answer}
                        checked={currentAnswers.includes(answer)}
                        onChange={(e) => handleCheckChange(e, answer)}
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
              </div>
            </div>
          </fieldset>
          <div className='text-center'>{outro}</div>
          <div className='mt-11'>
          {currentQuestionIndex === questions.length - 1 ? 
            (<button 
              className="rounded-full bg-[#0f4880] px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#031C43] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={(e) => handleSubmit(e)}>Submit</button>) 
            : (<button
                className="rounded-full bg-[#0f4880] px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#031C43] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleNextQuestion}>Next one!</button>)}
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
            >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
            </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <QuestionnaireNav />
      {renderCurrentQuestion()}
    </div>
  );
};

