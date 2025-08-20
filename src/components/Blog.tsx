import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of AI Automation: Trends to Watch in 2024",
    excerpt: "Discover the latest trends in AI automation that are reshaping industries. From advanced machine learning algorithms to sophisticated voice agents, explore what's coming next in business automation.",
    category: "Industry Insights",
    readTime: "5 min read",
    publishDate: "December 15, 2024",
    slug: "future-ai-automation-trends-2024"
  },
  {
    title: "ROI of AI Implementation: A Complete Guide for Business Leaders",
    excerpt: "Learn how to calculate and maximize the return on investment for AI automation projects. This comprehensive guide covers cost-benefit analysis, implementation strategies, and success metrics.",
    category: "Business Strategy",
    readTime: "8 min read", 
    publishDate: "December 10, 2024",
    slug: "roi-ai-implementation-guide"
  },
  {
    title: "Chatbots vs Voice Agents: Choosing the Right AI Solution",
    excerpt: "Compare the benefits and use cases of chatbots versus voice agents for your business. Understand which technology fits your customer service needs and operational requirements.",
    category: "Technology",
    readTime: "6 min read",
    publishDate: "December 5, 2024", 
    slug: "chatbots-vs-voice-agents-comparison"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-fade-in">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights on AI automation, 
            business transformation, and emerging technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="card-premium hover-lift hover-glow group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gradient group-hover:text-accent transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.publishDate}
                  </div>
                  <div className="flex items-center text-accent group-hover:text-gold-muted transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to stay updated with the latest AI trends and insights?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-premium px-6 py-3 rounded-lg">
              Subscribe to Newsletter
            </button>
            <button className="text-accent hover:text-gold-muted transition-colors font-medium">
              View All Articles →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;