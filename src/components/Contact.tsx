import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6 animate-fade-in">
            <div className="glass rounded-2xl p-6">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a 
                href="mailto:mdraiyanrazakhan123@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                mdraiyanrazakhan123@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://linkedin.com/in/mdraiyanrazakhan', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-primary/50 hover:border-primary"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <form className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Input
              placeholder="Your Name"
              className="glass border-border/50 focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="glass border-border/50 focus:border-primary"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              className="glass border-border/50 focus:border-primary resize-none"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
              size="lg"
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
