import { useEffect, useState } from "react";
import { z } from "zod";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const reviewSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(60, "Name too long"),
  rating: z.number().min(1, "Please select a rating").max(5),
  quote: z.string().trim().min(10, "Review should be at least 10 characters").max(400, "Review too long"),
});

type Review = { name: string; rating: number; quote: string; date: string };

const STORAGE_KEY = "primelimo_reviews";

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setReviews(JSON.parse(raw));
    } catch {}
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = reviewSchema.safeParse({ name, rating, quote });
    if (!result.success) {
      toast({ title: "Check your review", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    const next: Review[] = [{ name, rating, quote, date: new Date().toISOString() }, ...reviews].slice(0, 30);
    setReviews(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setName(""); setQuote(""); setRating(0);
    toast({ title: "Thank you!", description: "Your review has been added." });
  };

  return (
    <section className="py-28 bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-primary">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-light mt-4">Share your <span className="italic font-serif text-gradient-gold">experience</span></h2>
          <p className="text-muted-foreground mt-4">Be one of the first to review Prime Limo.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <Card className="bg-card/60 border-border/60 p-8">
            <form onSubmit={submit} className="space-y-5">
              <div>
                <Label htmlFor="rev-name" className="text-xs tracking-widest uppercase text-muted-foreground">Name</Label>
                <Input id="rev-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={60} placeholder="Your name" className="mt-2 bg-background/60" />
              </div>
              <div>
                <Label className="text-xs tracking-widest uppercase text-muted-foreground">Rating</Label>
                <div className="flex gap-1 mt-2" onMouseLeave={() => setHover(0)}>
                  {[1, 2, 3, 4, 5].map((n) => {
                    const active = (hover || rating) >= n;
                    return (
                      <button key={n} type="button" onClick={() => setRating(n)} onMouseEnter={() => setHover(n)} className="p-1" aria-label={`Rate ${n} stars`}>
                        <Star className={`w-7 h-7 transition-colors ${active ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <Label htmlFor="rev-quote" className="text-xs tracking-widest uppercase text-muted-foreground">Your review</Label>
                <Textarea id="rev-quote" value={quote} onChange={(e) => setQuote(e.target.value)} maxLength={400} rows={4} placeholder="Tell us about your ride…" className="mt-2 bg-background/60 resize-none" />
                <div className="text-xs text-muted-foreground mt-1 text-right">{quote.length}/400</div>
              </div>
              <Button type="submit" className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 h-12 tracking-wider shadow-gold">
                Submit Review
              </Button>
            </form>
          </Card>

          {/* List */}
          <div className="space-y-4">
            {reviews.length === 0 ? (
              <Card className="bg-card/40 border-dashed border-border/60 p-10 text-center">
                <Star className="w-8 h-8 text-primary/60 mx-auto mb-4" />
                <p className="text-muted-foreground">No reviews yet — yours could be the first.</p>
              </Card>
            ) : (
              reviews.map((r, i) => (
                <Card key={i} className="bg-card/60 border-border/60 p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < r.rating ? "text-primary fill-primary" : "text-muted-foreground/40"}`} />
                    ))}
                  </div>
                  <p className="text-foreground/90 leading-relaxed mb-4">"{r.quote}"</p>
                  <div className="text-sm">
                    <span className="font-medium">{r.name}</span>
                    <span className="text-muted-foreground"> · {new Date(r.date).toLocaleDateString()}</span>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
