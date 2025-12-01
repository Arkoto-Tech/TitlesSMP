import { Navbar } from "@/components/navbar"
import { StarField } from "@/components/star-field"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Youtube } from "lucide-react"

export default function PromosPage() {
  return (
    <div className="min-h-screen">
      <StarField />
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary glow-text mb-4">Official Promos</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6" />
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Watch the epic cinematic trailers for Titles SMP
            </p>
          </div>

          {/* Promo 1 */}
          <section className="mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 border-b border-border">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-2">First Promo Release</h2>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Released: November 20, 2025</span>
                      </div>
                    </div>
                    <a
                      href="https://youtu.be/RW2_tIMTIpg?si=vyydBz2cgPjfyNIS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/80 text-primary-foreground rounded-md transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                      <span>Watch on YouTube</span>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden border border-border shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/RW2_tIMTIpg"
                      title="Titles SMP - First Promo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  <p className="text-foreground/80 mt-4 leading-relaxed">
                    The first official promo introducing the world of Titles SMP. Experience the cosmic power system and
                    witness the beginning of the Era of Titles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Promo 2 */}
          <section className="mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-secondary/30 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-secondary/20 to-accent/20 p-6 border-b border-border">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-secondary mb-2">Second Promo Release</h2>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Released: November 29, 2025</span>
                      </div>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=TGkHLW9wvRc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                      <span>Watch on YouTube</span>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden border border-border shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/TGkHLW9wvRc"
                      title="Titles SMP - Second Promo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  <p className="text-foreground/80 mt-4 leading-relaxed">
                    The second promo dives deeper into the battle system and showcases epic S-rank domain abilities.
                    Witness the full power of the Titles system in action.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Additional Info */}
          <section className="text-center">
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-accent">Want to Be Part of This?</h3>
                <p className="text-foreground/80 max-w-xl mx-auto leading-relaxed">
                  Join Titles SMP and create your own legendary moments. Apply today and rise through the ranks!
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <a
                    href="/apply"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-md transition-colors"
                  >
                    How to Apply
                  </a>
                  <a
                    href="https://discord.gg/Yk9wZnVQZT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/80 text-accent-foreground rounded-md transition-colors"
                  >
                    Join Discord
                  </a>
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
