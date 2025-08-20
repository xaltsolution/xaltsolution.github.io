const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="stars-bg h-full w-full"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient animate-fade-in">
            About Xalt Solution
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 shadow-premium animate-scale-in">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              At Xalt Solution, we're pioneering the future of business automation through cutting-edge artificial intelligence. 
              Our mission is to empower businesses of all sizes to unlock their full potential by seamlessly integrating 
              AI-driven solutions that eliminate inefficiencies and accelerate growth.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Founded on the principle that every business deserves access to premium AI technology, we specialize in 
              transforming complex challenges into elegant, automated solutions. Our team of AI experts and automation 
              specialists work tirelessly to ensure that your transition to intelligent operations is smooth, effective, and profitable.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Whether you're looking to automate routine processes, implement intelligent customer service solutions, 
              or integrate advanced AI capabilities into your existing workflows, Xalt Solution is your trusted partner 
              in the journey toward operational excellence and sustainable growth.
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
              <div className="animate-float" style={{ animationDelay: '0s' }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">500+</div>
                <div className="text-muted-foreground">Processes Automated</div>
              </div>
              <div className="animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">99%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">24/7</div>
                <div className="text-muted-foreground">AI Support Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;