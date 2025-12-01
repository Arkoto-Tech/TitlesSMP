"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold text-primary glow-text">Titles SMP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/lore" className="text-foreground hover:text-primary transition-colors">
              Lore
            </Link>
            <Link href="/titles" className="text-foreground hover:text-primary transition-colors">
              Titles System
            </Link>
            <Link href="/apply" className="text-foreground hover:text-primary transition-colors">
              How to Apply
            </Link>
            <Link href="/promos" className="text-foreground hover:text-primary transition-colors">
              Promos
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/80 text-accent-foreground">
              <a href="https://discord.gg/Yk9wZnVQZT" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-foreground">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/lore"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lore
            </Link>
            <Link
              href="/titles"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Titles System
            </Link>
            <Link
              href="/apply"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How to Apply
            </Link>
            <Link
              href="/promos"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Promos
            </Link>
            <Button asChild className="w-full bg-accent hover:bg-accent/80 text-accent-foreground">
              <a href="https://discord.gg/Yk9wZnVQZT" target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
