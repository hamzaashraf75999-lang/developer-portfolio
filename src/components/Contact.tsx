"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Get in Touch</h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-accent to-purple-400 mx-auto rounded-full" />
          <p className="mt-6 text-muted max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I&apos;m
            always open to discussing new ideas and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Email */}
            <a
              href="mailto:hamza@example.com"
              className="group flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:border-accent/30 hover:bg-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted group-hover:text-accent transition-colors">
                  hamza@example.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/hamzaashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:border-accent/30 hover:bg-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">GitHub</p>
                <p className="text-sm text-muted group-hover:text-accent transition-colors">
                  github.com/hamzaashraf
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/hamzaashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:border-accent/30 hover:bg-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">LinkedIn</p>
                <p className="text-sm text-muted group-hover:text-accent transition-colors">
                  linkedin.com/in/hamzaashraf
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 bg-card border border-border rounded-2xl space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full px-6 py-3.5 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === "sent"
                    ? "bg-success text-white"
                    : status === "sending"
                    ? "bg-accent/70 text-white cursor-wait"
                    : "bg-accent hover:bg-accent-hover text-white"
                }`}
              >
                {status === "sending" && (
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
                {status === "sent" && (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent!"}
                {status === "error" && "Try Again"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

