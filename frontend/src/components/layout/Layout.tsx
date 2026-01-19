import { NavLink, Outlet } from "react-router-dom"

const linkClass =
  "flex items-center gap-3 px-4 py-2 rounded-lg transition"

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h1 className="text-xl font-bold text-indigo-600 mb-8">
          AdminPanel
        </h1>

        <nav className="space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `${linkClass} ${
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            Orders
          </NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}
