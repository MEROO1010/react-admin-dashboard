export function useTheme() {
  const toggle = () => {
    document.documentElement.classList.toggle('dark')
  }

  return { toggle }
}