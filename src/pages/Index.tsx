import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import ChatBot from "@/components/ChatBot";
import Contact from "@/components/Contact";
const Index = () => {
  return <div className="relative min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <ChatBot />
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/30">
        <p className="text-sm">© 2025 All Rights Reserved<span className="text-primary">💜</span> and AI by Md Raiyan Raza Khan
        </p>
      </footer>
    </div>;
};
export default Index;