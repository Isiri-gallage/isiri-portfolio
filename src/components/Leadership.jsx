import { Users } from "lucide-react";
import { leadership } from "../data/content";
import { Reveal, SectionHeading, Card } from "./ui";

const Leadership = () => {
  return (
    <section id="leadership" className="section page-container">
      <SectionHeading title="Leadership" />

      <div className="grid sm:grid-cols-2 gap-5">
        {leadership.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <Card className="h-full flex gap-4">
              <div className="bg-accent-soft text-accent p-2.5 h-fit rounded-none shrink-0">
                <Users size={18} />
              </div>
              <div>
                <h4 className="font-medium text-text text-sm">{item.title}</h4>
                <p className="text-text-secondary text-sm mt-1">{item.org}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
