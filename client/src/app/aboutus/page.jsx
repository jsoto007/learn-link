import React from "react";

export default function AboutUs() {
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
      {/* <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      /> */}
      <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        About Us
      </h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <p className="text-stone-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam natus
            saepe harum. Saepe adipisci doloremque, iusto officiis nulla modi, officia
            in praesentium ullam animi eum accusamus consequuntur quibusdam facilis voluptatum.</p>
          <div className="flex flex-col mt-6">
            <p className="text-black">Project Manager: <a className="text-stone-500" href="">Sterling Barton</a></p>
            <p className="text-black">UX/UI Design: <a className="text-stone-500" href="">Nathalia Andrade</a></p>
            <p className="text-black">Frontend Engineers: <a className="text-stone-500" href="">Sterling Barton</a>, <a className="text-stone-500" href="">Jose Soto</a>, <a className="text-stone-500" href="">John Mook</a></p>
            <p className="text-black">Backend Engineers: <a className="text-stone-500" href="">Macolister Bispo</a>, <a className="text-stone-500" href="">Nicholas Martin</a></p>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}