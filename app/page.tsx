import { Navbar } from "@/components/navbar"
import { StarField } from "@/components/star-field"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Sword, Trophy, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <StarField />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Cosmic Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-background to-background" />

        {/* Shattered Constellation Silhouette */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg width="800" height="800" viewBox="0 0 800 800" className="max-w-full">
            <line
              x1="400"
              y1="100"
              x2="500"
              y2="200"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary constellation-line"
            />
            <line
              x1="500"
              y1="200"
              x2="450"
              y2="300"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary constellation-line"
            />
            <line
              x1="450"
              y1="300"
              x2="550"
              y2="350"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary constellation-line"
            />
            <line
              x1="300"
              y1="200"
              x2="400"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary constellation-line"
            />
            <line
              x1="300"
              y1="200"
              x2="350"
              y2="300"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary constellation-line"
            />
            <circle cx="400" cy="100" r="8" fill="currentColor" className="text-primary" />
            <circle cx="500" cy="200" r="6" fill="currentColor" className="text-secondary" />
            <circle cx="300" cy="200" r="6" fill="currentColor" className="text-secondary" />
            <circle cx="450" cy="300" r="5" fill="currentColor" className="text-accent" />
            <circle cx="350" cy="300" r="5" fill="currentColor" className="text-accent" />
            <circle cx="550" cy="350" r="4" fill="currentColor" className="text-primary" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-primary glow-text animate-fade-in">Titles SMP</h1>
            <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Awaken Power. Shape Fate. Rise Through the Titles.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
                <Link href="/lore">Read the Lore</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
              >
                <Link href="/apply">How to Join</Link>
              </Button>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/80 text-accent-foreground">
                <a href="https://discord.gg/Yk9wZnVQZT" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* What is Titles SMP Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Is Titles SMP?</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6" />
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border pixel-border">
            <CardContent className="p-8 space-y-4 text-lg leading-relaxed text-foreground/90">
              <p>
                Titles SMP is a Minecraft survival multiplayer server with a custom power system that transforms
                ordinary players into legendary warriors.
              </p>
              <p>
                Players obtain <span className="text-primary font-semibold">Titles</span> through gameplay achievements,
                each granting unique abilities ranked from <span className="text-muted-foreground">C</span>,{" "}
                <span className="text-secondary">B</span>,<span className="text-primary"> A</span>, to the ultimate{" "}
                <span className="text-accent font-bold">S-Class</span>.
              </p>
              <p>
                With a limit of <span className="text-primary font-semibold">3 Titles per player</span>, every choice
                matters. Unlock passive resistances, devastating active abilities, and reality-warping S-rank domain
                powers.
              </p>
              <p className="text-primary">Competitive progression. Limited S-rank paths. Epic PvE & PvP battles.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Server Highlights</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">40+ Title Paths</h3>
                <p className="text-sm text-muted-foreground">Discover diverse progression paths for every playstyle</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-secondary transition-all group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Quest Progression</h3>
                <p className="text-sm text-muted-foreground">Complete trials to rank up your Titles</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-accent transition-all group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-accent">Active Abilities</h3>
                <p className="text-sm text-muted-foreground">Unleash powerful attacks and domain abilities</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sword className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Epic Battles</h3>
                <p className="text-sm text-muted-foreground">Engage in intense PvE and PvP combat</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ready to Begin?</h2>
          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
            Join the Era of Titles and forge your legend among the stars
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 bg-transparent"
            >
              <Link href="/titles">Learn the System</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
