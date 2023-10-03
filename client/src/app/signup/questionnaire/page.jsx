"use client"

import { useState } from 'react'
import { useRouter } from 'next/router';

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


const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({
    0: [],
    1: [],
    2: [],
    3: [],
    4: []
  })

  // const router = useRouter()

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

  //  const handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch('/api/signup/questionnaire', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(selectedAnswers)
  // })
  // .then((r) => r.json())
  // .then(data => console.log(data))
  // .then(() => router.push('/signup/questionnaire/thankyou'))
  // }

  const renderCurrentQuestion = () => {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="flex flex-col items-center justify-center h-[90vh] mx-auto max-w-3xl">
        {/* start of question */}
          <fieldset>
            <label className="text-base font-semibold text-gray-900">Question: <span>{currentQuestionIndex + 1}/{questions.length}</span></label>
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
              <div>{outro}</div>
            </div>
          </fieldset>
          <div className='flex justify-end bg-red-200 w-[45%] absolute bottom-40 '>
          {currentQuestionIndex === questions.length - 1 ? 
            (<button onClick={(e) => handleSubmit(e)}>Submit</button>) 
            : (<button onClick={handleNextQuestion}>Next</button>)}
          </div>
        </div>
      </div>
    );
  };


  const renderSummary = () => {
    return (
      <div className="my-4">
        <p className="text-lg font-semibold">Summary</p>
        <ul>
          {answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? renderCurrentQuestion() : renderSummary()}
    </div>
  );
};

export default Questionnaire;

