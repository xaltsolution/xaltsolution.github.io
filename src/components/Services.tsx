import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Zap, MessageSquare, Mic, Cpu } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline your operations with intelligent automation solutions that eliminate repetitive tasks, reduce errors, and boost productivity by up to 300%. Transform manual workflows into seamless, automated processes."
  },
  {
    icon: Cpu,
    title: "AI Consulting", 
    description: "Strategic AI implementation guidance tailored to your business needs. Our experts analyze your current processes and design custom AI strategies that deliver measurable ROI and competitive advantage."
  },
  {
    icon: MessageSquare,
    title: "Chatbot Development",
    description: "Deploy intelligent conversational AI that provides 24/7 customer support, automates inquiries, and enhances user experience. Reduce support costs while improving customer satisfaction rates."
  },
  {
    icon: Mic,
    title: "Voice Agent Development",
    description: "Create sophisticated voice-powered AI agents for customer service, sales, and internal operations. Handle complex conversations naturally while maintaining your brand voice and personality."
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Seamlessly integrate cutting-edge AI technologies into your existing systems. From CRM automation to advanced analytics, we ensure smooth deployment with minimal disruption to your operations."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Premium AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our cutting-edge AI services can revolutionize your business operations 
            and drive unprecedented growth through intelligent automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="card-premium hover-lift hover-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-accent to-gold-muted rounded-xl flex items-center justify-center group-hover:animate-glow">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gradient">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;