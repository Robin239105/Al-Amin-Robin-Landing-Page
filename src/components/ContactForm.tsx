import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const SERVICES = [
  "Fullstack Web Development",
  "Cloud Architecture",
  "API Design & Integration",
  "UI/UX Design",
  "Mobile App Development",
  "Other"
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: SERVICES[0],
    budget: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          service: SERVICES[0],
          budget: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 border-2 border-accent-primary bg-accent-primary/5 rounded-lg text-center space-y-4"
      >
        <CheckCircle className="w-16 h-16 text-accent-primary mx-auto" />
        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
        <p className="text-gray-400 font-mono">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-accent-primary font-mono text-sm hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left bg-bg-card p-8 rounded-xl border border-border-default">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Name</label>
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-bg-dark border border-border-default rounded px-4 py-3 text-white focus:border-accent-primary outline-none transition-colors font-mono text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Email</label>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full bg-bg-dark border border-border-default rounded px-4 py-3 text-white focus:border-accent-primary outline-none transition-colors font-mono text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">WhatsApp Number</label>
          <input
            required
            type="tel"
            name="whatsapp"
            autoComplete="tel"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="+880 1XXX XXXXXX"
            className="w-full bg-bg-dark border border-border-default rounded px-4 py-3 text-white focus:border-accent-primary outline-none transition-colors font-mono text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-bg-dark border border-border-default rounded px-4 py-3 text-white focus:border-accent-primary outline-none transition-colors font-mono text-sm appearance-none"
          >
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Budget Range</label>
        <input
          required
          type="text"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="e.g. $2000 - $5000"
          className="w-full bg-bg-dark border border-border-default rounded px-4 py-3 text-white focus:border-accent-primary outline-none transition-colors font-mono text-sm"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">Message</label>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell me about your project..."
          className="w-full bg-bg-dark border border-border-default rounded px-4 py-3 text-white focus:border-accent-primary outline-none transition-colors font-mono text-sm resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm font-mono bg-red-500/10 p-3 rounded border border-red-500/20">
          <AlertCircle size={16} />
          Failed to send message. Please try again.
        </div>
      )}

      <button
        disabled={status === "loading"}
        type="submit"
        className="w-full py-4 bg-accent-primary text-white font-mono font-bold rounded hover:bg-accent-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
