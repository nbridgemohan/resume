'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsSun, BsMoon } from 'react-icons/bs'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-3 rounded-full bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-300/30 dark:border-slate-600/30 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <BsSun className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
      ) : (
        <BsMoon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
      )}
    </button>
  )
} 