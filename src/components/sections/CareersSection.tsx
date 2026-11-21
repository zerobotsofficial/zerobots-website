"use client";

import { motion, type Variants } from "framer-motion";
import { Cpu, Zap, Mail, ExternalLink } from "lucide-react";
import { FadeInSection } from "@/components/layout/FadeInSection";

// Replace with your actual Google Form URL
const GOOGLE_FORM_URL = "https://forms.gle/Vz4eD4XBxgTr21SY8";

const roles = [
  {
    id: "mechanical-design",
    title: "Mechanical Design Intern",
    department: "Hardware Engineering",
    icon: "Cpu",
    accentColor: "cyan",
    gradient: "from-cyan-500/10 via-transparent to-transparent",
    borderAccent: "group-hover:border-cyan-400/40",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/10 border-cyan-400/20",
    badgeBg: "bg-cyan-400/10 border-cyan-400/20 text-cyan-300",
    dotColor: "bg-cyan-400",
    description:
      "Join our hardware team to help design the physical architecture of Blob, our flagship autonomous desktop companion robot. Work closely with senior engineers on CAD modelling, prototyping, and mechanical systems integration.",
    responsibilities: [
      "3D CAD modelling (SolidWorks / Fusion 360) of robot chassis and enclosures",
      "Prototype fabrication and iterative design testing",
      "Design for manufacturability (DFM) and assembly (DFA)",
      "Collaborate with electronics and firmware teams for hardware fit",
      "Document design specs, BOM, and technical drawings",
    ],
    requirements: [
      "Pursuing B.E./B.Tech in Mechanical or Mechatronics Engineering",
      "Proficiency in SolidWorks, Fusion 360, or equivalent CAD tools",
      "Understanding of GD&T, tolerance analysis, and material selection",
      "Familiarity with 3D printing and rapid prototyping",
      "Strong attention to detail and problem-solving mindset",
    ],
    meta: [
      { label: "Location", value: "Remote / Hybrid" },
      { label: "Duration", value: "3 – 6 Months" },
      { label: "Type", value: "Internship" },
    ],
  },
  {
    id: "electronics-design",
    title: "Electronics Design Intern",
    department: "Embedded Systems",
    icon: "Zap",
    accentColor: "violet",
    gradient: "from-violet-500/10 via-transparent to-transparent",
    borderAccent: "group-hover:border-violet-400/40",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10 border-violet-400/20",
    badgeBg: "bg-violet-400/10 border-violet-400/20 text-violet-300",
    dotColor: "bg-violet-400",
    description:
      "Help us design and validate the electronics powering Blob's intelligence. Work on schematic capture, PCB layout, and bring-up of custom embedded systems aimed at creating seamless human-robot interaction.",
    responsibilities: [
      "Schematic design and PCB layout using KiCad or Altium Designer",
      "Component selection, BOM management, and vendor evaluation",
      "Prototype bring-up, debugging, and functional testing",
      "Design of power management, sensing, and motor control circuits",
      "Collaborate with firmware engineers for hardware-software integration",
    ],
    requirements: [
      "Pursuing B.E./B.Tech in ECE, EEE, or Embedded Systems",
      "Experience with schematic capture and PCB layout tools (KiCad / Altium)",
      "Understanding of analog/digital circuits, sensors, and microcontrollers",
      "Familiarity with communication protocols (I2C, SPI, UART, CAN)",
      "Analytical thinking and a passion for hardware problem-solving",
    ],
    meta: [
      { label: "Location", value: "Remote / Hybrid" },
      { label: "Duration", value: "3 – 6 Months" },
      { label: "Type", value: "Internship" },
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
  }),
};

export function CareersSection() {
  return (
    <FadeInSection id="careers" className="relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-[0.25em] text-white mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Now Hiring · Internships 2025</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
            Build the{" "}
            <span className="cyber-gradient-text">future of robotics</span>
            <br className="hidden sm:block" /> with us.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We are looking for passionate engineers to join the ZeroBots team. Work on real hardware,
            ship real products, and help shape the next generation of intelligent autonomous companions.
          </p>
        </div>

        {/* ROLE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {roles.map((role, i) => (
            <motion.article
              key={role.id}
              id={role.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              className={`group relative cyber-glass cyber-glass-interactive rounded-[2rem] p-8 md:p-10 flex flex-col gap-6 overflow-hidden border border-white/5 ${role.borderAccent} transition-all duration-700`}
            >
              {/* Ambient gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] pointer-events-none`}
              />

              {/* Header */}
              <div className="relative z-10 flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${role.iconBg}`}>
                  {role.icon === "Cpu" ? (
                    <Cpu className={`w-5 h-5 ${role.iconColor}`} />
                  ) : (
                    <Zap className={`w-5 h-5 ${role.iconColor}`} />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white leading-tight">{role.title}</h3>
                  <p className="text-sm text-slate-400 font-light mt-0.5">{role.department}</p>
                </div>
              </div>

              {/* Meta chips */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {role.meta.map(({ label, value }) => (
                  <span
                    key={value}
                    className={`inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${role.badgeBg}`}
                  >
                    {label}: {value}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="relative z-10 text-slate-400 text-sm leading-relaxed font-light">
                {role.description}
              </p>

              {/* Responsibilities */}
              <div className="relative z-10">
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {role.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300 font-light">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${role.dotColor} opacity-70`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="relative z-10">
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3">
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {role.requirements.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300 font-light">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-white/20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card CTA */}
              <div className="relative z-10 pt-2 border-t border-white/5">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`apply-${role.id}`}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide text-white border transition-all duration-300 hover:scale-[1.02] cyber-btn ${role.accentColor === "cyan"
                    ? "border-cyan-400/30 bg-cyan-400/10 hover:bg-cyan-400/20 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
                    : "border-violet-400/30 bg-violet-400/10 hover:bg-violet-400/20 hover:border-violet-400/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                    }`}
                >
                  Apply via Google Form
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CONTACT STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="cyber-glass rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-1">For further queries</p>
            <a
              href="mailto:carreers@zerobots.in"
              id="careers-email-link"
              className="inline-flex items-center gap-2 text-white hover:text-cyan-300 transition-colors font-medium text-base group"
            >
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              careers@zerobots.in
            </a>
            <p className="text-xs text-slate-500 font-light mt-1">
              Include your resume and a brief note about your interest.
            </p>
          </div>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="careers-apply-form"
            className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase text-black bg-white hover:bg-slate-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.12)] hover:shadow-[0_0_60px_rgba(255,255,255,0.22)] cyber-btn"
          >
            <span>Apply Now</span>
            <ExternalLink className="w-4 h-4 text-black" />
          </a>
        </motion.div>

      </div>
    </FadeInSection>
  );
}