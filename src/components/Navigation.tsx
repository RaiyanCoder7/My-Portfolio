import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div />

        <div className="hidden md:flex gap-6">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("about")}
            className="hover:text-primary"
          >
            About
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("projects")}
            className="hover:text-primary"
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("experience")}
            className="hover:text-primary"
          >
            Experience
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
