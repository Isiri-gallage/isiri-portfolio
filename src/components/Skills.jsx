import { skillCategories, skillIconMap } from "../data/content";
import { Reveal, SectionHeading, Card } from "./ui";

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <SectionHeading title="Technical Skills" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.06}>
            <Card className="h-full">
              <h3 className="mono text-xs uppercase tracking-wide font-semibold text-accent mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 text-sm text-text-secondary bg-bg border border-border rounded-none px-2.5 py-1.5"
                  >
                    {skillIconMap[skill] && (
                      <img
                        src={`https://skillicons.dev/icons?i=${skillIconMap[skill]}`}
                        alt=""
                        className="w-4 h-4 rounded-sm"
                        loading="lazy"
                      />
                    )}
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
