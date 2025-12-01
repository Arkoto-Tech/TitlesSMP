import { Navbar } from "@/components/navbar"
import { StarField } from "@/components/star-field"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Sparkles, Flame, Eye, Zap } from "lucide-react"

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
              Master the ancient power system and rise through the ranks
            </p>
          </div>

          {/* Core Concept */}
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
                  powerful abilities earned through gameplay milestones, kills, secrets, and hidden conditions.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p>
                      Maximum <span className="text-primary font-semibold">3 Titles per player</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p>
                      Rank system: <span className="text-muted-foreground">C</span> {">"}{" "}
                      <span className="text-secondary">B</span> {">"} <span className="text-primary">A</span> {">"}{" "}
                      <span className="text-accent font-bold">S</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p>Earned through achievements and hidden triggers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <p>Strategic choices shape your playstyle</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Rank Types */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Rank Types</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* C Rank */}
              <Card className="bg-card/50 backdrop-blur-sm border-muted-foreground/30">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-2xl text-muted-foreground">C Rank</span>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      Passive
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-foreground/90">
                  <p className="text-lg font-semibold text-primary">Damage Negation</p>
                  <p>Negates damage from a specific source completely</p>
                  <p className="text-sm text-muted-foreground">
                    Example: C-Rank Blaze Title makes you immune to fire damage from Blazes
                  </p>
                </CardContent>
              </Card>

              {/* B Rank */}
              <Card className="bg-card/50 backdrop-blur-sm border-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-2xl text-secondary">B Rank</span>
                    <Badge className="text-lg px-3 py-1 bg-secondary text-secondary-foreground">Passive</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-foreground/90">
                  <p className="text-lg font-semibold text-primary">Damage Increase</p>
                  <p>Increases damage dealt to that specific source</p>
                  <p className="text-sm text-muted-foreground">
                    Example: B-Rank Blaze Title deals bonus damage to all Blazes
                  </p>
                </CardContent>
              </Card>

              {/* A Rank */}
              <Card className="bg-card/50 backdrop-blur-sm border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-2xl text-primary">A Rank</span>
                    <Badge className="text-lg px-3 py-1 bg-primary text-primary-foreground">Active</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-foreground/90">
                  <p className="text-lg font-semibold text-primary">Active Ability Unlocked</p>
                  <p>Unleash a powerful attack with a 30-second cooldown</p>
                  <div className="pt-2">
                    <img
                      src="/minecraft-player-using-fire-wave-attack-ability.jpg"
                      alt="A-Rank ability example"
                      className="w-full rounded border border-primary/30"
                    />
                    <p className="text-xs text-muted-foreground mt-2">Example: Fire wave attack ability</p>
                  </div>
                </CardContent>
              </Card>

              {/* S Rank */}
              <Card className="bg-card/50 backdrop-blur-sm border-accent/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                <CardHeader className="relative">
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-2xl text-accent font-bold glow-text">S Rank</span>
                    <Badge className="text-lg px-3 py-1 bg-accent text-accent-foreground">Domain</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-foreground/90 relative">
                  <p className="text-lg font-semibold text-primary">Static Domain Ability</p>
                  <p>Create a reality-warping zone that lasts ~45 seconds</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>2-minute cooldown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Flame className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Passive tick damage to enemies within</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Eye className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Minimal knockback effect</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <img
                      src="/minecraft-domain-expansion-purple-energy-field.jpg"
                      alt="S-Rank domain ability example"
                      className="w-full rounded border border-accent/50"
                    />
                    <p className="text-xs text-muted-foreground mt-2">Example: Domain expansion ability</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Title Paths */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Title Paths</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Over <span className="text-primary font-semibold">40+ unique Title paths</span> are available, each
                  with its own progression system and abilities.
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <p className="font-semibold text-primary">Blaze Path</p>
                    <p className="text-sm text-muted-foreground">
                      100 Blaze kills → C-Rank Blaze Title + quest path unlocked
                    </p>
                  </div>

                  <div className="border-l-4 border-secondary pl-4 py-2">
                    <p className="font-semibold text-secondary">Enderman Path</p>
                    <p className="text-sm text-muted-foreground">
                      100 Enderman kills → C-Rank Enderman Title + quest path unlocked
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-4 py-2">
                    <p className="font-semibold text-accent">40+ More Paths</p>
                    <p className="text-sm text-muted-foreground">Discover hidden conditions and secret triggers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Quest Promotion */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Quest Promotion System</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Rank up your Titles by completing challenging quests assigned by The System.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-muted-foreground/20 text-muted-foreground px-3 py-1 rounded font-bold">
                      C → B
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/90">Complete System-assigned quest to upgrade to B-Rank</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 text-secondary px-3 py-1 rounded font-bold">B → A</div>
                    <div className="flex-1">
                      <p className="text-foreground/90">Complete advanced quest to unlock active abilities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 text-primary px-3 py-1 rounded font-bold">A → S</div>
                    <div className="flex-1">
                      <p className="text-foreground/90">Complete elite quest to unlock domain abilities</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded">
                    <p className="text-accent font-semibold mb-2">⚠️ Important Note</p>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      Once you reach <span className="text-accent font-bold">S-Rank</span> in a path, all other Title
                      paths are <span className="font-semibold">permanently locked</span> at their current level unless
                      you void your Title or get death-banned.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Ability Activation */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Ability Activation</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Activate your Title abilities using a simple control system.
                </p>

                <div className="flex items-center gap-4 p-4 bg-primary/10 border border-primary/30 rounded">
                  <div className="bg-primary/20 px-4 py-2 rounded font-mono text-primary">Right/Left Click</div>
                  <span className="text-foreground/90">+</span>
                  <div className="bg-muted/50 px-4 py-2 rounded font-semibold">Stick</div>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  Note: May change to a custom item in future updates
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
