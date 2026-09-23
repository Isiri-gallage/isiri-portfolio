import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 16, className = "", ...rest }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ title }) => (
  <Reveal className="flex items-baseline gap-4 mb-12">
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text">{title}</h2>
    <span className="hidden sm:block flex-1 ruler-line ml-2" />
  </Reveal>
);

export const Card = ({ children, className = "", hover = true, ...rest }) => (
  <div
    className={`card-glow corner-marks bg-surface border border-border rounded-none p-6 shadow-[0_1px_2px_rgba(0,0,0,0.2)] ${
      hover ? "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]" : ""
    } ${className}`}
    {...rest}
  >
    {children}
  </div>
);

export const Tag = ({ children }) => (
  <span className="mono text-xs px-2 py-1 rounded-none bg-accent-soft text-accent border border-accent/20">
    [{children}]
  </span>
);

export const Button = ({ href, children, variant = "primary", target, onClick, className = "", ...rest }) => {
  const base =
    "inline-flex items-center gap-2 px-5 py-3 rounded-none mono text-xs uppercase tracking-wider font-medium transition-all duration-300";
  const variants = {
    primary: "gradient-fill text-[#05070c] shadow-[0_8px_20px_-8px_rgba(34,211,238,0.5)] hover:shadow-[0_10px_28px_-8px_rgba(34,211,238,0.65)] hover:-translate-y-0.5",
    outline: "border border-border-strong text-text hover:border-accent hover:text-accent",
    ghost: "text-text-secondary hover:text-text",
  };
  const Component = href ? "a" : "button";
  return (
    <Component
      href={href}
      onClick={onClick}
      target={target}
      rel={target ? "noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
