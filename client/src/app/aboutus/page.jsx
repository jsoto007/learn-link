import React from "react";

export default function AboutUs() {
  return (
    <main className="flex-col h-full justify-center bg-[#F5F5F5]">
      <div>
        <img src="/aboutus.png" alt="An image of someone typing on a keyboard" className="z-0" />
        <div className=" flex-col mt-[-550px] w-4/5 ml-[237px] mr-[150px]">
          <h1 className="text-[#F5F5F5] text-5xl mb-[60px]">Bridging the math education gap</h1>
          <div className="flex-col justify-around items-center w-4/5 mb-[60px]">
          <p className="text-[#F5F5F5] leading-10"><span className="text-xl font-semibold">Shockingly low</span> proficiency rates in reading and mathematics signal a global learning crisis, impacting an estimated 617 million children and adolescents globally, according to data from UNESCO and various reports.</p> 
          </div>
          <div className="flex-col justify-around items-center w-4/5 mb-[60px]">
          <p className="text-[#F5F5F5] leading-10"><span className="text-xl font-semibold">Our mission</span> is to address this issue with the help of Adda, our ChatGPT-powered chatbot who provides real-time accessibility feedback tailored to your needs.</p>
          </div>
          <div className='flex'>
            <button className='mt-4 rounded-full bg-[#663399] border-8 border-[#663399] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:text-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Meet Adda!</button>
          </div>
          <div className="flex mt-[175px]">
            <div>
            <img className="w-[550px] ml-[-80px]" src="/illustration.svg" alt="An illustration of people creating a website" />
            </div>
            <div className="mr-[80px]">
              <h2 className="text-[#333] text-3xl" >Our Team</h2>
              <div className="mt-[35px]">
                <p className="text-[#333] text-xl"><span className="font-semibold">Project Manager:</span> Sterling Barton</p>
                <p className="text-[#333] text-xl mt-2"><span className="font-semibold">UX/UI Designer:</span> Nathalia Andrade</p>
                <p className="text-[#333] text-xl mt-2"><span className="font-semibold">Frontend Engineers:</span> Sterling Barton, Jose Soto, John Mook </p>
                <p className="text-[#333] text-xl mt-2"><span className="font-semibold">Backend Engineers:</span> Macolister Bispo, Nicholas Martin</p>
              </div>
              <div className="mt-10">
                <button className='mt-4 rounded-full bg-[#0F4880] border-8 border-[#0F4880] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:text-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[75px]">

      </div>
        
      
      
        
  
      {/* <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <img
        className="mx-auto h-12 w-auto"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Accessibility.svg"
        alt="Your Company"
      />
        <h2 className="mt-6 mb-2 text-center text-2xl font-bold leading-9 tracking-tight text-blue-800">
        About Us
      </h2>
          <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam natus
            saepe harum. Saepe adipisci doloremque, iusto officiis nulla modi, officia
            in praesentium ullam animi eum accusamus consequuntur quibusdam facilis voluptatum.</p>
          <div className="flex flex-col mt-6">
            <p className="text-blue-800">Project Manager: <a className="text-stone-500" href="">Sterling Barton</a></p>
            <p className="text-blue-800">UX/UI Design: <a className="text-stone-500" href="">Nathalia Andrade</a></p>
            <p className="text-blue-800">Frontend Engineers: <a className="text-stone-500" href="">Sterling Barton</a>, <a className="text-stone-500" href="">Jose Soto</a>, <a className="text-stone-500" href="">John Mook</a></p>
            <p className="text-blue-800">Backend Engineers: <a className="text-stone-500" href="">Macolister Bispo</a>, <a className="text-stone-500" href="">Nicholas Martin</a></p>
          </div>
        </div>
      </div>
      </div> */}
    </main>
  )
}