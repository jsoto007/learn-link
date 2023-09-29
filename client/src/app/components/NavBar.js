import React from "react";

function NavBar() {

  return (
    <div>
          <navabar className=" flex flex-row w-full fixed z-10 backdrop-blur-md bg-slate-700/30 rounded-md py-2 pr-11 font-semibold mt-2">
      <div>
 
      </div>

      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
          Lessons
      </button>
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
          My Progress
      </button>
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
          Accessibility
      </button>
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1 dark:hover:bg-slate-500 dark:active:bg-slate-600 dark:focus:bg-slate-700">
          Create A Learning Plan
      </button>

    </navabar>

    </div>
  )

}

export default NavBar;