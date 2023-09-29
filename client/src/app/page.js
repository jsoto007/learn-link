import NavBar from "./components/NavBar"
import UserDashboard from "./components/UserDashboard"

export default function Home() {
  return (
    <div className="display flex flex-col">
      <NavBar className="fixed" />
      <UserDashboard />
    </div>
  )
}
