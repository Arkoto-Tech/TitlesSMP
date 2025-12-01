import { Sparkles } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Titles SMP. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/lore" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Lore
            </Link>
            <Link href="/apply" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Apply
            </Link>
            <a
              href="https://discord.gg/Yk9wZnVQZT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </div>

      {/* Constellation decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  )
}
