import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 p-4">
      <nav className="space-y-2">
        <NavLink to="/" className="block">Dashboard</NavLink>
        <NavLink to="/users" className="block">Users</NavLink>
        <NavLink to="/orders" className="block">Orders</NavLink>
      </nav>
    </aside>
  )
}