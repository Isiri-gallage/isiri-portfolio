import { Award } from "lucide-react";
import { certifications } from "../data/content";
import { Reveal, SectionHeading, Card } from "./ui";

const Certifications = () => {
  return (
    <section id="certifications" className="section page-container">
      <SectionHeading title="Certifications" />

      <div className="grid sm:grid-cols-2 gap-5">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.06}>
            <Card className="h-full flex gap-4">
              <div className="bg-accent-soft text-accent p-2.5 h-fit rounded-none shrink-0">
                <Award size={18} />
              </div>
              <div>
                <h4 className="font-medium text-text text-sm">{cert.title}</h4>
                <p className="text-text-secondary text-sm mt-1">{cert.issuer}</p>
                <p className="mono text-xs text-accent mt-2">{cert.date}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
