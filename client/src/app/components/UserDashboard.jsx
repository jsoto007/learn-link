import Image from "next/image"

export default function UserDashboard() {
   
  return( 
    <div className="flex lg:flex-row md:flex-col mt-5 pt-20 font-serif">
      <div className="lg:ml-10">
        <img
          src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f7ac1c50-13d0-4661-8842-bc071de27036/1-multi-series-bar-chart-800w-opt.png"
          height={250}
          width={400}
        />
        Student Progess
      </div>
      <div className="lg:ml-20">
        <h3>My Courses</h3>
        <ul className="text-sm mt-2">
          <li className="mt-1">
            Math 101 introduction to first principals
          </li>
          <li className="mt-1">
            Geomety 201 introduction to first principals
          </li>
          <li className="mt-1">
            Linear Algebra 301 introduction to first principals
          </li>
          <li className="mt-1">
            Math 101 introduction to first principals
          </li>
          <li className="mt-1">
            Math 101 introduction to first principals
          </li>
       
        </ul>

      </div>

    </div>
  )
}