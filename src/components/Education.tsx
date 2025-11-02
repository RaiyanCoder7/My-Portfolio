import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "JNTUH College of Engineering Hyderabad",
    period: "2023 – 2027"
  },
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Global Institute of Engineering and Technology",
    period: "2023 – 2027"
  },
  {
    degree: "ISC, Computer Science",
    institution: "Tarapore School",
    period: "2020 – 2022"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Education
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="mb-3">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                <p className="text-primary text-sm font-semibold">{edu.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
