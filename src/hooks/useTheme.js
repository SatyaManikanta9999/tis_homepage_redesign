import { useCallback, useEffect, useState } from 'react'

const read = () => {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
  } catch { /* storage unavailable */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function useTheme() {
  const [dark, setDark] = useState(read)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* ignore */ }
  }, [dark])

  const toggle = useCallback(() => setDark((d) => !d), [])
  return [dark, toggle]
}
