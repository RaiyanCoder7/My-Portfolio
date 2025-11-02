import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent blur-3xl animate-glow-pulse" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in-up">
        {/* Greeting */}
        <div className="mb-6 inline-block">
          <span className="text-muted-foreground text-lg md:text-xl">
            Hi, I'm <span className="gradient-text font-semibold">Md Raiyan Raza Khan</span> 👋
          </span>
        </div>

        {/* Main heading with typing effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Building lovable{" "}
          <span className="gradient-text">AI-powered</span>
          <br />
          web experiences with
          <br />
          <span className="glow-text">I'm a Software Engineer</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          CSE Undergrad | Aspiring Software Developer | AI & Tech Enthusiast from Hyderabad, India
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105" onClick={() => window.open('https://linkedin.com/in/mdraiyanrazakhan', '_blank')}>
            <Linkedin className="mr-2 h-5 w-5" />
            Let's Connect
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-primary/50 hover:border-primary text-foreground px-8 py-6 text-lg rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-105">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default Hero;