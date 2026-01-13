"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Send, Phone } from "lucide-react"
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
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
        </div>
      </nav>

      {mobileMenuOpen && (
        <>
          {/* Blurred background with stronger blur effect */}
          <div
            className="fixed inset-0 z-40 backdrop-blur-xl bg-black/30 md:hidden transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Centered menu panel */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none md:hidden">
            <div className="pointer-events-auto bg-background rounded-2xl shadow-2xl p-8 mx-4 w-full max-w-sm animate-fade-in">
              <div className="space-y-6">
                {/* Menu Items */}
                <div className="space-y-4">
                  <Link
                    href="/"
                    className="block text-lg font-semibold text-foreground hover:text-brand-blue transition-colors py-3 px-4 rounded-lg hover:bg-brand-blue/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.home}
                  </Link>
                  <Link
                    href="/services"
                    className="block text-lg font-semibold text-foreground hover:text-brand-blue transition-colors py-3 px-4 rounded-lg hover:bg-brand-blue/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.services}
                  </Link>
                  <Link
                    href="/about"
                    className="block text-lg font-semibold text-foreground hover:text-brand-blue transition-colors py-3 px-4 rounded-lg hover:bg-brand-blue/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.about}
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-lg font-semibold text-foreground hover:text-brand-blue transition-colors py-3 px-4 rounded-lg hover:bg-brand-blue/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.contact}
                  </Link>
                </div>

                {/* Divider */}
                <div className="h-px bg-border" />

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href="https://t.me/uyga_yordam_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand-blue text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Send className="w-5 h-5" />
                    {language === "uz" ? "Shifokorni chaqirish" : "Связаться через Telegram Bot"}
                  </a>
                  <a
                    href="tel:+998901234567"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 border-2 border-brand-blue text-brand-blue rounded-lg font-semibold hover:bg-brand-blue/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5" />
                    +998 90 123 45 67
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
