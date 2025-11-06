import { GraduationCap } from "lucide-react";

const education = [
  {
    year: "2023 – 2027",
    degree: "B.Tech, Computer Science and Engineering",
    institution: "JNTUH College of Engineering Hyderabad",
    cgpa: "8.1",
    color: "from-teal-500 to-teal-600"
  },
  {
    year: "2022",
    degree: "ISC, Computer Science",
    institution: "Tarapore School",
    color: "from-blue-500 to-blue-600"
  },
  {
    year: "2020",
    degree: "ICSE, Science",
    institution: "Tarapore School",
    color: "from-purple-500 to-purple-600"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">
          Education
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-24 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="relative flex items-start gap-6 md:gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Year badge */}
                <div className={`flex-shrink-0 w-16 md:w-32 bg-gradient-to-br ${edu.color} text-white rounded-full px-4 py-3 text-center shadow-lg z-10`}>
                  <span className="text-sm md:text-base font-bold">{edu.year}</span>
                </div>
                
                {/* Timeline node */}
                <div className="absolute left-7 md:left-[5.75rem] w-3 h-3 bg-background border-4 border-primary rounded-full z-10" style={{ top: '1.25rem' }} />
                
                {/* Content card */}
                <div className="flex-1 glass border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-glow ml-4 md:ml-0">
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <h3 className="text-lg md:text-xl font-bold leading-tight">{edu.degree}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base mb-2">{edu.institution}</p>
                  {edu.cgpa && (
                    <p className="text-foreground text-sm md:text-base font-medium">CGPA: {edu.cgpa}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
