import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, Clock, ShieldCheck, Phone, Star, MapPin, Users, Briefcase, Wifi, Award } from "lucide-react";
import heroImg from "@/assets/hero-limo.jpg";
import suv1 from "@/assets/fleet-sedan.jpg";
import suv2 from "@/assets/fleet-suv.jpg";
import suv3 from "@/assets/fleet-stretch.jpg";
import ReviewSection from "@/components/ReviewSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl tracking-[0.2em] font-light">PRIME</span>
            <span className="text-2xl tracking-[0.2em] text-gradient-gold font-semibold">LIMO</span>
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wider uppercase text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#fleet" className="hover:text-foreground transition-colors">Fleet</a>
            <a href="#why" className="hover:text-foreground transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <a href="tel:+18628422947">
            <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
              <Phone className="w-4 h-4 mr-2" /> Book Now
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 pt-32">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Prime Limo black Suburban SUV at airport at dusk" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">Premium Airport Transfers</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6">
              Premium service <span className="italic text-gradient-gold font-serif">every time.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Discreet, punctual, and immaculately appointed Suburban SUVs. The standard for executive airport transportation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 px-8 h-14 text-base tracking-wider shadow-gold">
                  Reserve Your Ride
                </Button>
              </a>
              <a href="#fleet">
                <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-foreground/5 h-14 px-8 text-base tracking-wider">
                  Explore Fleet
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-8 mt-14 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Fully insured</div>
              <div className="hidden md:flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> 24/7 service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 relative">
        <div className="absolute inset-0 radial-glow pointer-events-none" />
        <div className="container relative">
          <div className="max-w-2xl mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-primary">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-light mt-4">Tailored to every <span className="italic font-serif text-gradient-gold">journey</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Plane, title: "Airport Transfers", desc: "Door-to-terminal service with flight tracking and complimentary wait time on every booking." },
              { icon: Briefcase, title: "Corporate Travel", desc: "Reliable executive transport for meetings, roadshows, and client visits with monthly billing available." },
              { icon: Users, title: "Group & Events", desc: "Weddings, galas, and group transfers — multiple SUVs coordinated to the minute." },
            ].map((s) => (
              <Card key={s.title} className="bg-card/60 border-border/60 p-8 hover:border-primary/60 transition-all duration-500 group">
                <s.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="py-28 bg-secondary/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary">The Fleet</span>
              <h2 className="text-4xl md:text-5xl font-light mt-4">A signature <span className="italic font-serif text-gradient-gold">Suburban</span> experience</h2>
            </div>
            <p className="text-muted-foreground max-w-md">Every vehicle is a late-model black Chevrolet Suburban — meticulously detailed, professionally maintained, and stocked for your comfort.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { img: suv2, name: "Executive Suburban", capacity: "Up to 4 passengers", luggage: "4 large suitcases" },
              { img: suv1, name: "Premium Suburban", capacity: "Up to 6 passengers", luggage: "5 large suitcases" },
              { img: suv3, name: "Suburban Plus", capacity: "Up to 7 passengers", luggage: "6 large suitcases" },
            ].map((v) => (
              <div key={v.name} className="group">
                <div className="relative overflow-hidden bg-background border border-border/60">
                  <img src={v.img} alt={v.name} loading="lazy" width={1024} height={768} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="pt-6">
                  <h3 className="text-2xl font-light">{v.name}</h3>
                  <div className="gold-divider my-4" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" />{v.capacity}</span>
                    <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" />{v.luggage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-primary">Why Prime</span>
              <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">The details that set us <span className="italic font-serif text-gradient-gold">apart</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                We built Prime Limo for travelers who measure quality in minutes saved, doors held, and silence kept. Here is what every booking includes.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Plane, title: "Flight Tracking", desc: "We monitor your flight and adjust pickup in real time — no charge for delays." },
                  { icon: ShieldCheck, title: "Vetted Chauffeurs", desc: "Background-checked, suited professionals with an average of 8+ years of experience." },
                  { icon: Wifi, title: "Onboard Comfort", desc: "Wi-Fi, bottled water, phone chargers, and climate control set to your preference." },
                  { icon: Award, title: "Flat-Rate Pricing", desc: "No surge, no hidden fees. Confirmed price at booking — guaranteed." },
                ].map((f) => (
                  <div key={f.title} className="flex gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1">{f.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl" />
              <img src={suv3} alt="Chauffeur loading luggage into Suburban" loading="lazy" width={1024} height={768} className="relative w-full aspect-[4/5] object-cover shadow-elegant" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewSection />

      {/* CTA / Contact */}
      <section id="contact" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 radial-glow" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-primary">Reserve</span>
            <h2 className="text-4xl md:text-6xl font-light mt-4 mb-6">Ready when <span className="italic font-serif text-gradient-gold">you are</span>.</h2>
            <p className="text-muted-foreground text-lg mb-10">Book online in under a minute or call our concierge line — available 24 hours a day, 365 days a year.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="tel:+18628422947">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 h-14 px-8 text-base tracking-wider shadow-gold">
                  <Phone className="w-4 h-4 mr-2" /> (862) 842-2947
                </Button>
              </a>
              <a href="mailto:primelimo.info1@gmail.com">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base tracking-wider border-foreground/20">
                  primelimo.info1@gmail.com
                </Button>
              </a>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-border/60">
              <div>
                <Clock className="w-5 h-5 text-primary mx-auto mb-3" />
                <div className="text-sm text-muted-foreground">24/7 Concierge</div>
              </div>
              <div>
                <MapPin className="w-5 h-5 text-primary mx-auto mb-3" />
                <div className="text-sm text-muted-foreground">All major airports</div>
              </div>
              <div>
                <ShieldCheck className="w-5 h-5 text-primary mx-auto mb-3" />
                <div className="text-sm text-muted-foreground">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border/60">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="tracking-[0.2em] text-foreground">PRIME</span>
            <span className="tracking-[0.2em] text-gradient-gold font-semibold">LIMO</span>
          </div>
          <div>© {new Date().getFullYear()} Prime Limo. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
