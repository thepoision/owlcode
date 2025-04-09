import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Landmark, 
  Utensils, 
  ShoppingBag, 
  TreePine, 
  Building2, 
  Train 
} from 'lucide-react';

const categories = [
  {
    title: 'Temples & Culture',
    icon: Landmark,
    description: 'Explore Bangkok\'s most beautiful temples and cultural sites',
    link: '/explore/temples'
  },
  {
    title: 'Food & Dining',
    icon: Utensils,
    description: 'Discover the best local restaurants and street food spots',
    link: '/explore/food'
  },
  {
    title: 'Shopping',
    icon: ShoppingBag,
    description: 'Find the best markets, malls, and shopping districts',
    link: '/explore/shopping'
  },
  {
    title: 'Parks & Nature',
    icon: TreePine,
    description: 'Escape the city in Bangkok\'s beautiful parks and gardens',
    link: '/explore/parks'
  },
  {
    title: 'Modern Bangkok',
    icon: Building2,
    description: 'Experience the city\'s modern side and skyline views',
    link: '/explore/modern'
  },
  {
    title: 'Transportation',
    icon: Train,
    description: 'Learn about getting around Bangkok efficiently',
    link: '/explore/transport'
  }
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Explore Bangkok</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Discover different aspects of Bangkok through our curated categories
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.title} href={category.link}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <category.icon className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button variant="ghost" className="w-full">
                  Explore {category.title}
                </Button>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 