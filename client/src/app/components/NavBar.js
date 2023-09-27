import React from "react";

function NavBar() {

  return (
    <div>
          <navabar className=" flex flex-row w-full fixed z-10 backdrop-blur-md bg-slate-700/30 rounded-md py-2 pr-11 font-semibold mt-2">
      <div>
 
      </div>

      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1">
          HOME
      </button>
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1">
          ABOUT
      </button>
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1">
          PROJECTS
      </button>
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1">
          CONTACT
      </button>

    </navabar>

    </div>
  )

}


export default NavBar;