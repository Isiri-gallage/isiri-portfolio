import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, AlertTriangle } from "lucide-react";
import { profile } from "../data/content";
import { Reveal, SectionHeading, Card } from "./ui";

const items = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: null },
];

const fieldClass =
  "w-full bg-bg border border-border rounded-none px-4 py-3 text-sm text-text placeholder:text-text-tertiary focus:outline-none focus:border-accent transition-colors";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: profile.web3formsAccessKey,
          subject: `Portfolio message from ${form.name}`,
          from_name: form.name,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section container">
      <SectionHeading title="Get In Touch" />

      <div className="grid md:grid-cols-5 gap-10 items-start">
        <Reveal className="md:col-span-3">
          <h3 className="text-2xl font-semibold text-text mb-3">Let's build something together.</h3>
          <p className="text-text-secondary leading-relaxed mb-8 max-w-md">
            Whether you have a question, an opportunity, or just want to say hi — my inbox is open. I'll get back to you as soon as I can.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
            <div>
              <label htmlFor="name" className="mono text-xs text-text-tertiary uppercase tracking-wide block mb-2">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="mono text-xs text-text-tertiary uppercase tracking-wide block mb-2">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="mono text-xs text-text-tertiary uppercase tracking-wide block mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about the opportunity..."
                className={`${fieldClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-none mono text-xs uppercase tracking-wider font-medium gradient-fill text-[#05070c] shadow-[0_8px_20px_-8px_rgba(34,211,238,0.5)] hover:shadow-[0_10px_28px_-8px_rgba(34,211,238,0.65)] transition-all disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              {status !== "sending" && <Send size={14} />}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <Check size={16} /> Message sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertTriangle size={16} /> Something went wrong. Please email me directly instead.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2 flex flex-col gap-3">
          {items.map((item) => {
            const content = (
              <div className="flex items-center gap-4">
                <div className="bg-accent-soft text-accent p-3 rounded-none">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-text-tertiary mono uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm text-text font-medium mt-0.5">{item.value}</p>
                </div>
              </div>
            );
            return item.href ? (
              <a key={item.label} href={item.href}>
                <Card>{content}</Card>
              </a>
            ) : (
              <Card key={item.label} hover={false}>
                {content}
              </Card>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
