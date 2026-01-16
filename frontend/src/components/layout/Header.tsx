import { useTheme } from '@/hooks/useTheme'

export default function Header() {
  const { toggle } = useTheme()

  return (
    <header className="flex justify-between p-4 bg-white dark:bg-gray-800">
      <h1 className="font-bold">Admin Dashboard</h1>
      <button onClick={toggle}>Toggle Theme</button>
    </header>
  )
}