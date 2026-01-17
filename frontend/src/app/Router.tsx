import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import DashboardPage from '@/features/dashboard/DashboardPage'
import UsersPage from '@/features/dashboard/users/UsersPage'
import  OrdersPage from "@/orders/OrdersPage"


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'users', element: <UsersPage /> },
      { path: 'orders', element: <OrdersPage /> },
    ],
  },
])