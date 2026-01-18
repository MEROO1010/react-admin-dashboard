import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}