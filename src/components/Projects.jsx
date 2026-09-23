import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects } from "../data/content";
import { Reveal, SectionHeading, Card, Tag } from "./ui";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section page-container">
      <SectionHeading title="Projects" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 0.1}>
            <Card
              className="h-full flex flex-col cursor-pointer"
              onClick={() => setActive(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActive(project)}
            >
              {project.image && (
                <div className="-m-6 mb-4 aspect-video border-b border-border overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} cover`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              )}

              <span className="mono text-[10px] tracking-widest mb-3 font-semibold text-accent inline-block w-fit px-1.5 py-0.5 bg-accent-soft">
                P.{String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="text-lg font-semibold text-text">{project.title}</h3>
                <div className="flex items-center gap-3 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-text-secondary hover:text-accent transition-colors"
                      aria-label={`${project.title} source on GitHub`}
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-text-secondary hover:text-accent transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mono text-xs text-text-tertiary mb-4">
                {project.role} · {project.date}
              </p>

              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <span className="mono text-xs text-accent">View details →</span>
            </Card>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Projects;
