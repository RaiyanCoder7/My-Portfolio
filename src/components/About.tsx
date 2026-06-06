import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-8 md:p-12 shadow-card animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Avatar with glow effect */}
            <div className="relative flex justify-center md:justify-start">
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-glow-pulse">
                <Avatar className="w-full h-full">
                  <AvatarImage src={profileImage} alt="Md Raiyan Raza Khan" className="object-cover" />
                  <AvatarFallback className="text-5xl bg-card text-primary">RK</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* About text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                About Me
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm a final year Computer Science Engineering student driven by a passion for coding, 
                software development, and APIs. With hands-on experience in AI-based and full-stack projects, 
                I enjoy solving real-world problems through code and design.
                <br /><br />
                Beyond academics, I'm an avid football player and an active member of developer communities 
                like GDG and Postman. My journey reflects creativity, collaboration, and curiosity toward 
                building impactful tech solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
