export default function Welcome() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Hi, I'm Adda
        </h2>
        <img src="/Adda.png"/>
        <p>I’m thrilled to have you on board, and your unique journey is my top priority. To ensure I provide you with the best learning experience tailored to your needs, I have a few questions for you. <strong>Don't worry; it's quick and easy!</strong><img src="/rocket.png"/></p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="/signup/questionnaire"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            I'm ready
          </a>
          <a href="/dashboard" className="text-sm font-semibold leading-6 text-gray-900">
            No questions, please <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}
