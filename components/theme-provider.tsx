"use client"

import type React from "react"
import { createContext, useState, useEffect } from "react"

type ThemeContextType = {
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev
      if (newTheme) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
      return newTheme
    })
  }

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}
