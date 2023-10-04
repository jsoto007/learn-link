import Image from "next/image"
import user from "../../../public/user.svg"
import book from "../../../public/book.svg"
import trending from "../../../public/trending.svg"
import sliders from "../../../public/sliders.svg"
import logOut from "../../../public/logOut.svg"


export default function UserDashboard() {
   
  return( 
    <div className="flex">
      <div className="bg-dark-blue h-screen p-5 pt-8 w-72 flex justify-center">
        <div className="">
          <img 
            className="h-20 mx-auto object-cover rounded-full w-20 border-2"
            src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div className="sm:mt-10 dm:mt-10 lg:mt-20">
          <Image
            src={user}
            width={40}
            height="auto"
            className="ml-5 mb-2"
          />
          <spam className="flex justify-center text-white text-sm">
            Profole
          </spam>
          
          </div>
          <div className="sm:mt-4 dm:mt-6 lg:mt-10">
          <Image
            src={book}
            width={40}
            height="auto"
            className="ml-5 mb-2"
          />
          <spam className="flex justify-center text-white text-sm">
            Lessons
          </spam>
          
          </div>

          <div className="sm:mt-4 dm:mt-6 lg:mt-10">
            <Image
              src={trending}
              width={40}
              height="auto"
              className="ml-5 mb-2"
            />
            <spam className="flex justify-center text-white text-sm">
              My Progress
            </spam>
          </div>

          <div className="sm:mt-4 dm:mt-6 lg:mt-10">
            <Image
              src={sliders}
              width={40}
              height="auto"
              className="ml-5 mb-2"
            />
            <spam className="flex justify-center text-white text-sm">
              Accessibility
            </spam>
          </div>

          
          {/* <div className="flex sm:mt-8 dm:mt-12 lg:mt-20 text-sm">
            <Image
              src={logOut}
              width={40}
              height="auto"
              className="ml-5 mb-2"
            />
            <spam className="flex items-center text-white text-sm ml-2">
              Log out
            </spam>
          </div> */}
        </div>
      </div>
     
      <div className="p-7">
        <h1 className="text-2xl font-semibold">
        Home Page
        </h1>
      </div>
     
    </div>
  )
}