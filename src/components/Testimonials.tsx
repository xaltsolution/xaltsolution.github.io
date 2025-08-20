import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechFlow Solutions",
    content: "Xalt Solution transformed our business operations completely. Their AI automation reduced our processing time by 80% and increased our team's productivity dramatically. The ROI was evident within just 3 months!",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Operations Director, GlobalCorp",
    content: "The chatbot and voice agent solutions from Xalt Solution have revolutionized our customer service. We now handle 5x more inquiries with the same team size, and customer satisfaction has never been higher.",
    rating: 5
  },
  {
    name: "Elena Vasquez",
    role: "Founder, InnovateLab",
    content: "Working with Xalt Solution was a game-changer. Their AI consulting helped us identify automation opportunities we never knew existed. The implementation was seamless and the results exceeded our expectations.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "CTO, DataStream Inc",
    content: "The AI integration services provided by Xalt Solution perfectly aligned with our existing systems. Their expertise in process automation has given us a significant competitive advantage in our industry.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-fade-in">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how businesses worldwide are transforming their operations 
            with our premium AI automation solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-premium hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-gradient">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;