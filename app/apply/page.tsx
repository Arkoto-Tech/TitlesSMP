import { Navbar } from "@/components/navbar"
import { StarField } from "@/components/star-field"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, Youtube } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ApplyPage() {
  return (
    <div className="min-h-screen">
      <StarField />
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary glow-text mb-4">How to Apply</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6" />
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Join the Era of Titles by submitting your application
            </p>
          </div>

          {/* How to Apply */}
          <section className="mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">How to Apply</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  Submit your application video through our Discord server. Follow the guidelines below to ensure your
                  application is considered.
                </p>
                <div className="flex items-center gap-3 p-4 bg-accent/10 border border-accent/30 rounded">
                  <Youtube className="w-6 h-6 text-accent flex-shrink-0" />
                  <p className="font-semibold text-accent">
                    Create a 40-120 second application video following our guidelines
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Requirements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Requirements</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Age: 13+</p>
                    <p className="text-sm text-muted-foreground">Must be at least 13 years old to apply</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Video Length: 40-120 seconds</p>
                    <p className="text-sm text-muted-foreground">Keep your application concise and engaging</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Java Edition Only</p>
                    <p className="text-sm text-muted-foreground">Minecraft Java Edition required</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Clean Audio Quality</p>
                    <p className="text-sm text-muted-foreground">
                      Ensure clear voice recording without background noise
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">FOV: 30-50</p>
                    <p className="text-sm text-muted-foreground">Recommended field of view for recording</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Good Pacing</p>
                    <p className="text-sm text-muted-foreground">Keep the video engaging from start to finish</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Important Notes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Important Notes</h2>

            <div className="space-y-4">
              <Alert className="bg-destructive/10 border-destructive/30">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <AlertDescription className="text-foreground/90">
                  <span className="font-semibold">Duo applications are NOT allowed.</span> Each player must apply
                  individually.
                </AlertDescription>
              </Alert>

              <Alert className="bg-destructive/10 border-destructive/30">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <AlertDescription className="text-foreground/90">
                  <span className="font-semibold">Reused applications are NOT allowed.</span> Create a new, original
                  video for each application.
                </AlertDescription>
              </Alert>

              <Alert className="bg-accent/10 border-accent/30">
                <AlertCircle className="h-5 w-5 text-accent" />
                <AlertDescription className="text-foreground/90">
                  <span className="font-semibold">Mock Intro videos are ALLOWED</span> but must follow strict
                  guidelines.
                </AlertDescription>
              </Alert>

              <Alert className="bg-secondary/10 border-secondary/30">
                <AlertCircle className="h-5 w-5 text-secondary" />
                <AlertDescription className="text-foreground/90">
                  <span className="font-semibold">SMP-style videos are ALLOWED</span> and encouraged!
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Tips for Success</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">1.</span>
                    <p className="text-foreground/90">
                      <span className="font-semibold text-primary">Be Yourself:</span> Show your personality and what
                      makes you unique as a content creator
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">2.</span>
                    <p className="text-foreground/90">
                      <span className="font-semibold text-primary">Quality Over Quantity:</span> Focus on making a
                      well-edited, engaging 40-120 second video
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">3.</span>
                    <p className="text-foreground/90">
                      <span className="font-semibold text-primary">Showcase Your Skills:</span> Include impressive
                      builds, PvP, or creative editing
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">4.</span>
                    <p className="text-foreground/90">
                      <span className="font-semibold text-primary">Tell a Story:</span> Make your application memorable
                      with a narrative arc
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">5.</span>
                    <p className="text-foreground/90">
                      <span className="font-semibold text-primary">Good Technical Quality:</span> Clear audio, stable
                      frame rate, and appropriate FOV
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* What Helps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">What Helps You Get In</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">Strong content creation skills and editing ability</p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">Active YouTube or streaming presence</p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">Understanding of SMP dynamics and roleplay</p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">Positive attitude and community engagement</p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-foreground/90">Unique personality that adds to the server dynamic</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* SMP Video Guidelines */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">SMP-Style Video Guidelines</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-4 text-foreground/90 leading-relaxed">
                <p>If you choose to submit an SMP-style video as your application, ensure it demonstrates:</p>

                <ul className="space-y-2 ml-6">
                  <li className="list-disc">Clear commentary and engaging narration</li>
                  <li className="list-disc">Good pacing and editing</li>
                  <li className="list-disc">Your personality and content creation style</li>
                  <li className="list-disc">Minecraft gameplay that showcases your skills</li>
                  <li className="list-disc">Professional audio and video quality</li>
                </ul>

                <p className="text-sm text-muted-foreground italic pt-2">
                  Remember: The goal is to show us why you'd be a great addition to Titles SMP!
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Example Application */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Example Application</h2>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6 space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  Watch this example to get an idea of what we're looking for in applications:
                </p>

                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden border border-border">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Example Application Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Youtube className="w-4 h-4" />
                  <p>Example application showcasing good pacing, quality, and personality</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Ready to Apply?</h3>
                <p className="text-foreground/80 max-w-xl mx-auto">
                  Join our Discord server and submit your application video to begin your journey in Titles SMP
                </p>
                <a
                  href="https://discord.gg/Yk9wZnVQZT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent/80 text-accent-foreground rounded-md transition-colors text-lg font-semibold"
                >
                  Join Discord & Apply
                </a>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
