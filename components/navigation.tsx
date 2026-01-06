"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "@/hooks/use-theme"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Uyga Yordam Logo" width={60} height={60} className="w-14 h-14" />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight" style={{ color: "#183E9E" }}>
                Uyga Yordam
              </span>
              <span className="text-xs leading-tight" style={{ color: "#183E9E" }}>
                To'g'ridan to'g'ri uyga
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-brand-blue transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/services" className="hover:text-brand-blue transition-colors">
              {t.nav.services}
            </Link>
            <Link href="/about" className="hover:text-brand-blue transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/contact" className="hover:text-brand-blue transition-colors">
              {t.nav.contact}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "uz" ? "ru" : "uz")}
              className="font-semibold"
            >
              {language.toUpperCase()}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 animate-fade-in">
            <Link
              href="/"
              className="block py-2 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/services"
              className="block py-2 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.services}
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
