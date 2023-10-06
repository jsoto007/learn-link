import React from 'react'

export default function QuestionnaireNav() {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Learn Link</span>
        <img
          className="h-8 w-auto"
          src="/logo.svg"
          alt="Learn Link logo"
        />
      </a>
    </div>
  </nav>
  )
}
