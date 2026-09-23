import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile, navLinks } from "../data/content";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "border-b border-transparent"
      }`}
    >
      <nav className="page-container flex items-center justify-between h-18 py-4">
        <a href="#home" className="mono text-lg font-semibold text-text">
          isiri<span className="gradient-text">.</span>gallage
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-sm text-text-secondary hover:text-text transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text transition-colors">
            <GithubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text transition-colors">
            <LinkedinIcon size={18} />
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 mono text-xs uppercase tracking-wider font-medium px-4 py-2 rounded-none border border-border-strong text-text hover:border-accent hover:text-accent transition-colors"
            >
              <Download size={14} /> Download CV
            </a>
          )}
        </div>

        <button
          className="md:hidden text-text"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <div className="page-container flex flex-col py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-text-secondary hover:text-text transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text">
                <GithubIcon size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text">
                <LinkedinIcon size={18} />
              </a>
            </div>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 mono text-xs uppercase tracking-wider font-medium px-4 py-2.5 rounded-none border border-border-strong text-text hover:border-accent hover:text-accent transition-colors w-fit"
              >
                <Download size={14} /> Download CV
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
