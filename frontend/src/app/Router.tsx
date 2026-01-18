import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/layout/Layout"
import DashboardPage from "../features/dashboard/DashboardPage"
import UsersPage from "@/features/users/UsersPage"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "users", element: <UsersPage /> }
    ]
  }
])

