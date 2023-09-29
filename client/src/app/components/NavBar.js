import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg"


function NavBar() {

  return (
    <div>
          <navabar className=" flex flex-row w-full fixed z-10 backdrop-blur-md bg-neutral-100 rounded-md py-2 pr-11 font-serif font-light">
      <div>
        <Image
          src={logo}
          width={40}
          height="auto"
          className="lg:ml-5 lg:mr-10"
        />
 
      </div>

      <button class=" focus:outline-none  focus:bg-[#0f4880]/90 focus:text-white mx-4 hover:bg-slate-200 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
          Lessons
      </button>
      <button class=" focus:outline-none  focus:bg-[#0f4880] focus:text-white mx-4 hover:bg-slate-200 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
          My Progress
      </button>
      <button class=" focus:outline-none  focus:bg-[#0f4880] focus:text-white mx-4 hover:bg-slate-200 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
          Accessibility
      </button>
      <button class=" focus:outline-none  focus:bg-[#0f4880] focus:text-white mx-4 hover:bg-slate-200 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
          Create A Learning Plan
      </button>

      <button className="absolute right-0 mt-2 lg:mr-10">
        Sign out
      </button>

    </navabar>

    </div>
  )

}

export default NavBar;