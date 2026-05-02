import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build <span className="gradient-text">something solid</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Backend, IT systems or design — I&apos;d love to hear what you&apos;re working on.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "natnael.deribe@example.com" },
              { icon: Phone, label: "Phone", value: "+251 900 000 000" },
              { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-card glow-on-hover flex items-center gap-4 rounded-2xl p-5">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-bg-primary text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="truncate text-sm font-medium">{value}</div>
                </div>
              </div>
            ))}

            <div className="glass-card flex items-center justify-between rounded-2xl p-5">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-2">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="glass grid h-9 w-9 place-items-center rounded-full text-foreground transition-all hover:text-primary hover:shadow-glow"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="glass-card grid gap-4 rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="Project inquiry" />
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me a bit about the project…"
                className="w-full resize-none rounded-xl border border-border bg-input/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-glow"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full gradient-bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              {sent ? "Message sent ✓" : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-glow"
      />
    </div>
  );
}
