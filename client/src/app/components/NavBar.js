import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg"


function NavBar() {

  return (
    <div>
      <navabar className=" flex flex-row w-full fixed z-10 backdrop-blur-md bg-neutral-100 rounded-md py-2 pr-11 font-serif font-light dark:bg-slate-700">
        <div>
          <Image
            src={logo}
            width={40}
            height="auto"
            className="lg:ml-5"
          />
  
        </div>

        <div className="m-auto font-sans text-sm">
          <button class="focus:outline-none  focus:bg-[#0f4880] focus:text-white lg:mx-8 hover:bg-slate-200 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700 ">
              About us
          </button>
          <button class=" focus:outline-none  focus:bg-[#0f4880] focus:text-white lg:mx-8 hover:bg-slate-200 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
              Contact us
          </button>
          <button class="focus:outline-none  focus:bg-[#0f4880] focus:text-white lg:mx-8 hover:bg-slate-200 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
              FAQ
          </button>
        

        </div>
        <div className="absolute right-0 font-sans font-bold">
          <button className="mr-3 p-2 px-3 text-[#0f4880]">
            Login
          </button>
          <button className="lg:mr-10 p-2 px-3 bg-[#0f4880] rounded-full text-white">
            Sign out
          </button>
        </div>

    </navabar>

    </div>
  )

}

export default NavBar;