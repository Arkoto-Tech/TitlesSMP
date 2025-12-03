import { Navbar } from "@/components/navbar"
import { StarField } from "@/components/star-field"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles, Zap, Clock, Flame } from "lucide-react"

export default function TitlesPage() {
  return (
    <div className="min-h-screen">
      <StarField />
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary glow-text mb-4">Titles System</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6" />
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Master your unique powers and rise in Titles SMP
            </p>
          </div>

          <section className="mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-3xl text-primary flex items-center gap-2">
                  <Sparkles className="w-8 h-8" />
                  Core Concept
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  In Titles SMP, strength comes from <span className="text-primary font-semibold">Titles</span> —
                  powerful abilities given at the start of your journey.
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p>
                      Maximum <span className="text-primary font-semibold">1 Title per player</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p>Upgrades earned through server events</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p>Titles shape your playstyle</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Titles Structure</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  Each Title has three core components that define its power:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-primary/10 border border-primary/30 rounded">
                    <h3 className="text-xl font-semibold text-primary mb-2">Passive Ability</h3>
                    <p className="text-foreground/80">Continuous effect related to the Title</p>
                  </div>

                  <div className="p-4 bg-secondary/10 border border-secondary/30 rounded">
                    <h3 className="text-xl font-semibold text-secondary mb-2">Active Ability</h3>
                    <p className="text-foreground/80">Activated with keybind F</p>
                  </div>

                  <div className="p-4 bg-accent/10 border border-accent/30 rounded">
                    <h3 className="text-xl font-semibold text-accent mb-2">Debuff</h3>
                    <p className="text-foreground/80">Balances the Title by giving a weakness</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Active Ability Examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Chronos Title */}
              <Card className="bg-card/50 backdrop-blur-sm border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                    <Clock className="w-7 h-7" />
                    Chronos Title
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Badge className="mb-3 bg-primary text-primary-foreground">Time Freeze</Badge>
                    <p className="text-foreground/90 mb-4">
                      Freeze time around you, stopping all entities and projectiles in their tracks
                    </p>
                  </div>
                  <div>
                    <img
                      src="/images/2025-12-03-03.jpeg"
                      alt="Chronos Time Freeze ability example"
                      className="w-full rounded border border-primary/30"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Nova Title */}
              <Card className="bg-card/50 backdrop-blur-sm border-accent/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-accent">
                    <Flame className="w-7 h-7" />
                    Nova Title
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Badge className="mb-3 bg-accent text-accent-foreground">Super Nova</Badge>
                    <p className="text-foreground/90 mb-4">
                      Unleash a devastating explosion of cosmic energy that damages all nearby enemies
                    </p>
                  </div>
                  <div>
                    <img
                      src="/images/2025-12-03-03.png"
                      alt="Nova Super Nova ability example"
                      className="w-full rounded border border-accent/30"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Upgrade System</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Strengthen your Title by participating in server events and earning upgrades.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary mb-1">Event Participation</p>
                      <p className="text-foreground/80">Upgrades are earned by participating in server events</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary mb-1">Damage Boost</p>
                      <p className="text-foreground/80">Each upgrade boosts damage output by 10%</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary mb-1">Chance-Based</p>
                      <p className="text-foreground/80">Upgrades are not guaranteed - test your luck!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Title Examples</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Over <span className="text-primary font-semibold">40 unique Titles</span>, each with its own
                  abilities.
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <p className="font-semibold text-primary mb-1">Chronos</p>
                    <p className="text-sm text-muted-foreground">Start with Chronos Title</p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <p className="font-semibold text-accent mb-1">Nova</p>
                    <p className="text-sm text-muted-foreground">Start with Nova Title</p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4 py-2">
                    <p className="font-semibold text-secondary mb-1">And Many More...</p>
                    <p className="text-sm text-muted-foreground">38+ additional unique Title paths to discover</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Ability Activation</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/10 border border-primary/30 rounded text-center">
                    <p className="text-sm text-muted-foreground mb-2">Active Ability</p>
                    <div className="bg-primary/20 px-4 py-3 rounded font-mono text-primary font-bold text-lg">F</div>
                  </div>

                  <div className="p-4 bg-secondary/10 border border-secondary/30 rounded text-center">
                    <p className="text-sm text-muted-foreground mb-2">Passive Ability</p>
                    <div className="px-4 py-3 rounded text-secondary font-semibold text-lg">Always Active</div>
                  </div>

                  <div className="p-4 bg-accent/10 border border-accent/30 rounded text-center">
                    <p className="text-sm text-muted-foreground mb-2">Debuff</p>
                    <div className="px-4 py-3 rounded text-accent font-semibold text-lg">Auto-Applied</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
