'use client'
import Link from 'next/link'
import React, { useState } from 'react'


export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isNotSent, setIsNotSent] = useState(true)
    
    const onSubmit = (e) => {
      e.preventDefault()
      setIsNotSent(!isNotSent)
      console.log(name, email, message)
    }
  
  return (
    <main className="flex h-screen max-h-full flex-1 flex-col justify-center py-12 bg-violet-50 sm:px-6 lg:px-8">
      {isNotSent?
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
         <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <img
            className="mx-auto h-12 w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Accessibility.svg"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-blue-800">
            Contact Us
          </h2>
          <p className="text-black mb-4">Please use the form below to contact us with any thoughts, concerns, or ideas of how to improve Learn Link.</p>
          <div className="space-y-6">
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                  Name
                </label>
                <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mb-3 h-20 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  className="mt-4 flex w-full justify-center rounded-full bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send Message
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <img
            className="mx-auto h-12 w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Accessibility.svg"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-blue-800">
            Thank you!
          </h2>
          <p className="text-black mb-4 mt-4">{name.charAt(0).toUpperCase() + name.slice(1)}, your message has been sent. We appreciate you contacting us and will get back to you as soon as we can. Happy learning!</p>
          <Link href='/'>
          <button
            className="mt-8 flex w-full justify-center rounded-full bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Return to Home
          </button>
          </Link>
        </div>
        </div>
      </div>}
    </main>
  )
}