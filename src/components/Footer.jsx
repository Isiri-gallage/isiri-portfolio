import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile, navLinks } from "../data/content";

const Footer = () => (
  <footer className="border-t border-border mt-20">
    <div className="container py-16">
      <div className="grid sm:grid-cols-3 gap-10 pb-12">
        <div>
          <a href="#home" className="mono text-lg font-semibold text-text">
            isiri<span className="gradient-text">.</span>gallage
          </a>
          <p className="text-text-secondary text-sm leading-relaxed mt-4 max-w-xs">
            {profile.role} building end-to-end systems, from backend architecture to AI-integrated functionality.
          </p>
          <div className="flex items-center gap-5 mt-6">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-colors">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="mono text-xs uppercase tracking-wide text-text-tertiary mb-4">Navigate</p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link text-sm text-text-secondary hover:text-text transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono text-xs uppercase tracking-wide text-text-tertiary mb-4">Get In Touch</p>
          <ul className="flex flex-col gap-3">
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors">
                <Mail size={14} /> {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors">
                <Phone size={14} /> {profile.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <MapPin size={14} /> {profile.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="ruler-line" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
        <p className="mono text-xs text-text-tertiary tracking-wide order-last sm:order-none">
          © {new Date().getFullYear()} {profile.name} — PORTFOLIO / REV.2026
        </p>

        <a
          href="#home"
          className="nav-link mono text-xs text-text-secondary hover:text-text transition-colors inline-flex items-center gap-1.5"
        >
          Top <ArrowUp size={12} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
