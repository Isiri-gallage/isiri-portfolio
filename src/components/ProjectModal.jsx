import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const highlights =
    project.highlights ||
    project.description
      .split(/(?<=\.)\s+/)
      .map((s) => s.trim())
      .filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="corner-marks relative bg-surface border border-border-strong w-full max-w-2xl max-h-[85vh] overflow-y-auto p-7 sm:p-9 shadow-[0_30px_80px_-20px_rgba(34,211,238,0.25)]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 z-10 text-text-secondary hover:text-text transition-colors bg-surface/80 rounded-full p-1"
        >
          <X size={20} />
        </button>

        {project.image && (
          <div className="-mx-7 -mt-7 sm:-mx-9 sm:-mt-9 mb-6 aspect-video border-b border-border overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} cover`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}

        <p className="mono text-xs text-text-tertiary mb-3">
          {project.role} · {project.date}
        </p>
        <h3 className="text-2xl font-semibold text-text pr-8 mb-2">{project.title}</h3>
        <p className="mono text-xs text-accent mb-6">{project.tech.join(" · ")}</p>

        {project.context && (
          <p className="text-sm text-text-secondary leading-relaxed mb-7">{project.context}</p>
        )}

        {project.contributionTitle && (
          <p className="mono text-xs uppercase tracking-wide text-text-tertiary mb-3">
            {project.contributionTitle}
          </p>
        )}

        <ul className="flex flex-col gap-3 mb-8">
          {highlights.map((line, i) => (
            <li key={i} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
              <span className="mono text-accent mt-0.5 shrink-0">→</span>
              {line}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none mono text-xs uppercase tracking-wider font-medium border border-border-strong text-text hover:border-accent hover:text-accent transition-colors"
            >
              <GithubIcon size={16} /> Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none mono text-xs uppercase tracking-wider font-medium gradient-fill text-[#05070c]"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
