import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, MessageSquare, Globe } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/bangkok-hero.jpg")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Personal Bangkok Guide
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Discover the best of Bangkok with AI-powered travel recommendations
          </p>
          <div className="space-x-4">
            <Link href="/chat">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Planning
              </Button>
            </Link>
            <Link href="/explore">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20">
                Explore Bangkok
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Travel Assistant?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">
                Get insider tips and recommendations from our AI trained on Bangkok's best spots
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Smart Planning</h3>
              <p className="text-muted-foreground">
                Create personalized itineraries based on your preferences and travel dates
              </p>
            </Card>
            <Card className="p-6 text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Interactive Chat</h3>
              <p className="text-muted-foreground">
                Ask questions and get instant, accurate responses about Bangkok
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Cultural Insights</h3>
              <p className="text-muted-foreground">
                Learn about Thai culture, customs, and local etiquette
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
