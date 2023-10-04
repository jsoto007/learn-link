import Image from "next/image"

export default function UserDashboard() {
   
  return( 
    <div className="flex">
      <div className="bg-dark-blue h-screen p-5 pt-8 w-72 flex justify-center">
        <div className="">
          <img 
            className="h-20 mx-auto object-cover rounded-full w-20 border-2"
            src="https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
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