import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/content";
import { Button } from "./ui";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const callouts = [
  { label: "ROLE", value: profile.role },
  { label: "BASE", value: profile.location },
  { label: "STATUS", value: profile.available ? "Open to work" : "Not available" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center container pt-28 pb-16 overflow-hidden">
      <span className="hidden lg:block absolute top-28 right-6 mono text-[11px] text-text-tertiary tracking-widest [writing-mode:vertical-rl]">
        PORTFOLIO / REV.2026
      </span>

      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-16 items-center w-full">
        <div className="max-w-2xl">
          {profile.available && (
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mono text-xs text-text-secondary border border-border px-3 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              STATUS: AVAILABLE FOR OPPORTUNITIES
            </motion.div>
          )}

          <motion.h1 {...fadeUp(0.1)} className="text-5xl sm:text-6xl font-semibold tracking-tight mb-3">
            <span className="gradient-text">{profile.name}</span>
            <span className="text-text">.</span>
          </motion.h1>

          <motion.h2 {...fadeUp(0.15)} className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-secondary mb-6">
            {profile.role}.
          </motion.h2>

          <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mb-10 border-l-2 border-border pl-4">
            {profile.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.25)} className="flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary">
              View My Work <ArrowRight size={14} />
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
            {profile.resumeUrl && (
              <Button href={profile.resumeUrl} download variant="ghost">
                Download CV <Download size={14} />
              </Button>
            )}
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="flex items-center gap-5 mt-14">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${profile.email}`} className="mono text-sm text-text-secondary hover:text-accent transition-colors">
              {profile.email}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col gap-6 max-w-[340px] justify-self-end"
        >
          <div className="relative">
            <div
              className="absolute -inset-3 -z-10 opacity-40 blur-2xl rounded-full"
              style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
            />
            <div className="corner-marks relative aspect-[3/4] bg-surface border border-border overflow-hidden shadow-[0_24px_60px_-24px_rgba(34,211,238,0.3)]">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover object-top" />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                >
                  <span className="text-8xl font-semibold gradient-text" style={{ fontFamily: "var(--font-heading)" }}>
                    {profile.initials}
                  </span>
                </div>
              )}
              <span className="absolute bottom-3 left-3 mono text-[10px] text-text-tertiary bg-surface/90 px-1.5 py-0.5 border border-border">
                REF—01
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {callouts.map((c) => (
              <div key={c.label} className="flex items-center gap-3 mono text-xs">
                <span className="text-text-tertiary tracking-wider">{c.label}</span>
                <span className="flex-1 ruler-line" />
                <span className="text-text">{c.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
