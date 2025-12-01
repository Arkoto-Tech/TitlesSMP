import { Navbar } from "@/components/navbar"
import { StarField } from "@/components/star-field"
import { Footer } from "@/components/footer"
import { Sparkles } from "lucide-react"

export default function LorePage() {
  return (
    <div className="min-h-screen">
      <StarField />
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary glow-text mb-4">The Origin Story</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6" />
            <p className="text-xl text-secondary">Titles SMP — The Beginning of Power</p>
          </div>

          {/* Story Content */}
          <article className="prose prose-invert prose-lg max-w-none space-y-12">
            {/* Chapter 1 */}
            <section className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-transparent" />

              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-primary m-0">Before Creation</h2>
              </div>

              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Long before the world took shape, the sky was ruled by the{" "}
                  <span className="text-primary font-semibold">Constellations</span> — ancient beings whose names alone
                  carried immense power. Each constellation embodied a unique force, balancing creation and destruction
                  in perfect harmony.
                </p>
                <p>
                  But among them existed one anomaly:{" "}
                  <span className="text-accent font-semibold">a being born without a name</span>.
                </p>
              </div>
            </section>

            {/* Constellation Decoration */}
            <div className="flex items-center justify-center py-8">
              <svg width="200" height="60" viewBox="0 0 200 60" className="opacity-50">
                <line x1="20" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="1" className="text-primary" />
                <line
                  x1="60"
                  y1="30"
                  x2="100"
                  y2="30"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-secondary"
                />
                <line x1="100" y1="30" x2="140" y2="30" stroke="currentColor" strokeWidth="1" className="text-accent" />
                <line
                  x1="140"
                  y1="30"
                  x2="180"
                  y2="30"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary"
                />
                <circle cx="20" cy="30" r="3" fill="currentColor" className="text-primary" />
                <circle cx="60" cy="30" r="3" fill="currentColor" className="text-secondary" />
                <circle cx="100" cy="30" r="4" fill="currentColor" className="text-accent" />
                <circle cx="140" cy="30" r="3" fill="currentColor" className="text-secondary" />
                <circle cx="180" cy="30" r="3" fill="currentColor" className="text-primary" />
              </svg>
            </div>

            {/* Chapter 2 */}
            <section className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent via-primary to-transparent" />

              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
                <h2 className="text-3xl font-bold text-accent m-0">The Nameless One</h2>
              </div>

              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  This nameless entity possessed no power of its own and lived in the shadow of the others. Yet through
                  struggle and desperation, it discovered something no constellation ever had —{" "}
                  <span className="text-secondary font-semibold">the ability to wield the powers of others</span>. And
                  with this discovery came a hunger that grew into pure obsession.
                </p>
                <p>
                  In secret, the nameless one learned to steal the essence tied to a constellation's name. One by one,
                  stars dimmed. One by one, those ancient guardians fell. With every name taken, the nameless one
                  reshaped himself into something far beyond what existence had ever seen.
                </p>
                <p className="text-destructive font-semibold text-xl">The balance of the universe shattered.</p>
              </div>
            </section>

            {/* Divider */}
            <div className="flex items-center justify-center py-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>

            {/* Chapter 3 */}
            <section className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary via-accent to-transparent" />

              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-secondary" />
                <h2 className="text-3xl font-bold text-secondary m-0">The Ancient Ones Awaken</h2>
              </div>

              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Only then did the <span className="text-secondary font-semibold">Ancient Ones</span>, beings older and
                  far greater than the constellations, break their eternal neutrality. They joined forces for the first
                  time in eons, unleashing their collective might to erase the nameless one forever.
                </p>
                <p className="text-primary font-semibold text-xl">The battle was catastrophic.</p>
                <p>
                  When their final strike landed, the power of the Ancient Ones collided with the stolen constellation
                  energy. The resulting shockwave tore through existence — and scattered every fragment of the nameless
                  one's stolen power back to the world where he was born.
                </p>
              </div>
            </section>

            {/* Chapter 4 */}
            <section className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-transparent" />

              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-primary m-0">The System</h2>
              </div>

              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Weakened and unable to recover, the Ancient Ones made one final choice. If the power of the nameless
                  one was to return again, it needed to be controlled. Guided. Contained.
                </p>
                <p>
                  So they created <span className="text-primary font-semibold text-xl">The System</span>.
                </p>
                <p>
                  A framework woven into the fabric of the world — one that distributes the shattered powers as{" "}
                  <span className="text-primary font-semibold">Titles</span>, each carrying a piece of the abilities
                  once stolen by the nameless one. Only those who prove themselves through trials, achievements, and
                  hidden challenges can awaken these Titles.
                </p>
                <p className="text-primary font-semibold text-xl">This decision marked the beginning of a new era.</p>
              </div>
            </section>

            {/* Constellation Decoration */}
            <div className="flex items-center justify-center py-12">
              <svg width="300" height="100" viewBox="0 0 300 100" className="opacity-30">
                <line x1="50" y1="50" x2="150" y2="30" stroke="currentColor" strokeWidth="2" className="text-primary" />
                <line
                  x1="150"
                  y1="30"
                  x2="250"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-secondary"
                />
                <line x1="50" y1="50" x2="100" y2="80" stroke="currentColor" strokeWidth="1" className="text-accent" />
                <line x1="250" y1="50" x2="200" y2="80" stroke="currentColor" strokeWidth="1" className="text-accent" />
                <circle cx="50" cy="50" r="5" fill="currentColor" className="text-primary" />
                <circle cx="150" cy="30" r="6" fill="currentColor" className="text-secondary" />
                <circle cx="250" cy="50" r="5" fill="currentColor" className="text-primary" />
                <circle cx="100" cy="80" r="4" fill="currentColor" className="text-accent" />
                <circle cx="200" cy="80" r="4" fill="currentColor" className="text-accent" />
              </svg>
            </div>

            {/* Chapter 5 */}
            <section className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-accent via-primary to-transparent" />

              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
                <h2 className="text-3xl font-bold text-accent m-0">The Era of Titles</h2>
              </div>

              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  The shockwave that ended the nameless one reshaped the world entirely. What rose from the ruins was a
                  land filled with wonder, danger, and possibilities no civilization had ever seen before. Nightfall
                  brought undead that clawed their way through the dark, spiders the size of wolves roamed ancient
                  forests, and strange beasts emerged from places untouched since the first stars were born.
                </p>
                <p>But for every new threat, new power surfaced as well.</p>
                <p>
                  The fragments of constellation energy — now regulated by the System — began choosing humans. Some
                  gained Titles through great acts of courage. Others triggered them by accident, simply meeting the
                  hidden conditions woven into the world. Titles became more than blessings; they were echoes of the
                  heavens themselves, granting strength, resilience, and abilities once possessed only by the
                  constellations.
                </p>
              </div>
            </section>

            {/* Chapter 6 */}
            <section className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary via-primary to-transparent" />

              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-secondary" />
                <h2 className="text-3xl font-bold text-secondary m-0">Where Players Begin</h2>
              </div>

              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  With time, entire kingdoms rose around those who held these powers. Empires were forged by warriors
                  whose Titles made them legends, while rebellions were led by ordinary people who suddenly awakened
                  extraordinary potential. History became a cycle of rise and fall, shaped not only by steel and
                  strategy, but by the unpredictable force of Titles.
                </p>
                <p>
                  Now, a millennia later, powers lay dormant within the system, ready to be awakened into the most
                  average of people at any given moment, and the world remains one of peace.
                </p>
                <p className="text-primary font-semibold text-2xl text-center pt-8">For now…</p>
              </div>
            </section>
          </article>

          {/* CTA */}
          <div className="mt-16 text-center space-y-6">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent mb-8" />
            <p className="text-xl text-foreground/80">Your story begins here</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/titles"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/80 text-primary-foreground rounded-md transition-colors"
              >
                Explore the Titles System
              </a>
              <a
                href="/apply"
                className="inline-flex items-center justify-center px-6 py-3 border border-secondary text-secondary hover:bg-secondary/10 rounded-md transition-colors"
              >
                Apply to Join
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
