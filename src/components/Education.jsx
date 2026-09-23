import { Award } from "lucide-react";
import { education } from "../data/content";
import { Reveal, SectionHeading, Card } from "./ui";

const Education = () => {
  return (
    <section id="education" className="section container">
      <SectionHeading title="Education" />

      <div className="flex flex-col gap-5">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.1}>
            <Card className="flex flex-col sm:flex-row sm:items-start gap-4">
              <img src={edu.logo} alt="" className="w-12 h-12 object-contain shrink-0" />
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-text">{edu.degree}</h3>
                  <span className="mono text-xs text-text-tertiary border border-border px-3 py-1 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <p className="text-accent text-sm mt-1 font-medium">{edu.institution}</p>
                <p className="text-text-secondary text-sm mt-3">{edu.detail}</p>
                {edu.note && (
                  <p className="flex items-center gap-1.5 text-sm text-amber-400 mt-2">
                    <Award size={14} /> {edu.note}
                  </p>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Education;
