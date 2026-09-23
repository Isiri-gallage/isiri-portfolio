import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { about, profile } from "../data/content";
import { Reveal, SectionHeading, Card } from "./ui";

const facts = [
  { icon: GraduationCap, label: "Education", value: "B.Sc. IT & Management, UoM" },
  { icon: Briefcase, label: "Focus", value: "Full-stack & AI-integrated systems" },
  { icon: MapPin, label: "Based in", value: profile.location },
];

const About = () => {
  return (
    <section id="about" className="section container">
      <SectionHeading title="About Me" />

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 flex flex-col gap-5 min-w-0">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-text-secondary leading-relaxed text-[1.05rem]">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <Card hover={false} className="flex flex-col gap-5">
            {facts.map((f, i) => (
              <div key={f.label} className={`flex gap-3 ${i !== 0 ? "pt-5 border-t border-border" : ""}`}>
                <f.icon size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-text-tertiary mono uppercase tracking-wide">{f.label}</p>
                  <p className="text-sm text-text mt-1">{f.value}</p>
                </div>
              </div>
            ))}
          </Card>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
