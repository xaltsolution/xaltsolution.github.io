import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    title: "AI-Driven Retail Automation",
    description: "Implemented comprehensive AI automation for a major retail chain, including inventory management, customer behavior analysis, and automated reordering systems. Result: 60% reduction in operational costs and 40% increase in customer satisfaction.",
    technologies: ["Machine Learning", "Process Automation", "Predictive Analytics", "API Integration"],
    category: "E-commerce"
  },
  {
    title: "Healthcare Chatbot Revolution",
    description: "Developed an intelligent healthcare chatbot for patient scheduling, symptom checking, and medical information queries. The system handles 10,000+ interactions daily while maintaining HIPAA compliance and reducing staff workload by 70%.",
    technologies: ["Natural Language Processing", "HIPAA Compliance", "Voice Recognition", "Medical AI"],
    category: "Healthcare"
  },
  {
    title: "Financial Services Voice Agent",
    description: "Created sophisticated voice agents for a leading bank to handle customer inquiries, account management, and transaction processing. Achieved 95% accuracy in intent recognition and reduced call center costs by 50%.",
    technologies: ["Voice AI", "Financial APIs", "Security Protocols", "Real-time Processing"],
    category: "Financial Services"
  },
  {
    title: "Manufacturing Process Optimization",
    description: "Deployed AI-powered process automation across manufacturing lines, including quality control, predictive maintenance, and supply chain optimization. Delivered 35% improvement in production efficiency and 90% reduction in defects.",
    technologies: ["IoT Integration", "Predictive Analytics", "Computer Vision", "Workflow Automation"],
    category: "Manufacturing"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-fade-in">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of transformative AI solutions that have delivered 
            measurable results across diverse industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="card-premium hover-lift hover-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium">
                    {item.category}
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-xl font-semibold text-gradient mb-2">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                  {item.description}
                </CardDescription>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-accent hover:text-gold-muted transition-colors cursor-pointer group">
                  <span className="text-sm font-medium">View Case Study</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to become our next success story?
          </p>
          <button 
            onClick={() => window.open('https://calendly.com/ijawadahmad40/ai-automation-business-growth-strategy-call', '_blank')}
            className="btn-hero inline-flex items-center"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;