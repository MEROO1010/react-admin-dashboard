import { NavLink, Outlet } from "react-router-dom"
import { useTheme } from "@/hooks/useTheme"



export default function Layout() {
  

  const { theme , toggle } = useTheme()
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">Admin</h2>

        <nav className="flex flex-col gap-2">
          <NavLink to="/" className="hover:text-blue-400">
            Dashboard
          </NavLink>
          <NavLink to="/users" className="hover:text-blue-400">
            Users
          </NavLink>
          <NavLink to="/orders" className="hover:text-blue-400">
            Orders
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  )
}
