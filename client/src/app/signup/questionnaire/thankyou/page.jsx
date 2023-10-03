export default function Thankyou() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Thank You!
        </h2>
        <img src="/Adda.png"/>
        <p>You did it! Thanks for taking the time to share your thoughts with me. Your input is incredibly valuable, and I can't wait to use it to create the perfect learning experience just for you.
          <br/>
          Stay tuned for your amazing journey ahead!
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="/dashboard"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}

