/*
 * Contact Page — Dark Authority Design
 */
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "oklch(0.20 0.04 240)",
    border: "1px solid oklch(1 0 0 / 0.12)",
    color: "white",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9375rem",
    padding: "0.85rem 1rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "oklch(0.62 0.025 240)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.16 0.035 240)" }}>
      <Navigation />

      {/* Page header */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{ background: "oklch(0.12 0.03 240)", borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}
      >
        <div className="container">
          <p className="section-label mb-4">Talk to Us</p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "white",
              lineHeight: 0.95,
            }}
          >
            GET IN TOUCH
          </h1>
          <p
            className="mt-6 max-w-xl"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.65 }}
          >
            Tell us about your project. Whether you're planning a hotel fit-out, a stadium installation, or a complex commercial relocation, we'd like to hear from you.
          </p>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Info */}
            <div>
              <div className="space-y-10">
                <div>
                  <p className="section-label mb-3">New Zealand Locations</p>
                  <div className="space-y-5">
                    <div>
                      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "white", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.25rem" }}>Auckland (Head Office)</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.72 0.025 240)", lineHeight: 1.8 }}>
                        <strong style={{ color: "white" }}>Dwyane Hitchens</strong><br />
                        NZ Branch Manager<br />
                        1/31 Ha Crescent, Wiri, Auckland<br />
                        <a href="tel:+64204243242" style={{ color: "oklch(0.63 0.18 38)" }}>M: +64 204 243 242</a><br />
                        <a href="mailto:dwyane.h@specificgroup.co.nz" style={{ color: "oklch(0.63 0.18 38)" }}>dwyane.h@specificgroup.co.nz</a>
                      </p>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "white", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.25rem" }}>Christchurch</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.72 0.025 240)", lineHeight: 1.65 }}>
                        2/925 Halswell Junction Road<br />Islington, Christchurch
                      </p>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "white", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.25rem" }}>Central Otago</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.72 0.025 240)", lineHeight: 1.65 }}>
                        14 Venning Crescent<br />Cromwell 9310
                      </p>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "white", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.25rem" }}>Otago / Southland</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.72 0.025 240)", lineHeight: 1.65 }}>
                        57 Ellis Street, Otautau
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="section-label mb-3">Australia (Head Office)</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem", color: "oklch(0.72 0.025 240)", lineHeight: 1.65 }}>
                    <a href="tel:1300524461" style={{ color: "oklch(0.63 0.18 38)" }}>1300 524 461</a><br />
                    <a href="https://specificgroup.com.au" target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.60 0.12 185)" }}>
                      specificgroup.com.au →
                    </a>
                  </p>
                </div>
                {/* NZBN */}
                <div style={{ paddingTop: "0.5rem", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
                  <p className="section-label mb-3">Company Details</p>
                  <div className="space-y-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.72 0.025 240)", lineHeight: 1.7 }}>
                    <p><span style={{ color: "oklch(0.62 0.025 240)", fontWeight: 600 }}>NZBN</span> &nbsp;94 29048495585</p>
                    <p><span style={{ color: "oklch(0.62 0.025 240)", fontWeight: 600 }}>Entity</span> &nbsp;Specific NZ Ltd</p>
                  </div>
                </div>

                {/* Certifications */}
                <div style={{ paddingTop: "0.5rem", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
                  <p className="section-label mb-3">Certifications</p>
                  <div className="space-y-3">
                    {[
                      { code: "ISO 45001:2018", label: "WHS / Safety", desc: "Work Health & Safety Management", color: "oklch(0.63 0.18 38)" },
                      { code: "ISO 9001:2015", label: "Quality", desc: "Quality Management System", color: "oklch(0.60 0.12 185)" },
                      { code: "ISO 14001:2015", label: "Environment", desc: "Environmental Management", color: "oklch(0.55 0.14 155)" },
                      { code: "SiteSafe NZ", label: "Site Safety", desc: "Site Safe New Zealand certified", color: "oklch(0.63 0.18 38)" },
                    ].map((c) => (
                      <div key={c.code} className="flex items-start gap-3" style={{ padding: "0.6rem 0.75rem", background: "oklch(0.20 0.04 240)" }}>
                        <div className="w-1 self-stretch flex-shrink-0" style={{ background: c.color }} />
                        <div>
                          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.75rem", color: c.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>{c.code}</p>
                          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "white" }}>{c.label}</p>
                          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "oklch(0.58 0.025 240)", lineHeight: 1.4 }}>{c.desc} — <span style={{ color: "oklch(0.55 0.12 155)" }}>Active</span></p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Operations AI */}
                <div style={{ paddingTop: "0.5rem", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
                  <p className="section-label mb-3">Operations Platform</p>
                  <div style={{ background: "oklch(0.20 0.04 240)", borderLeft: "3px solid oklch(0.60 0.12 185)", padding: "0.875rem 1rem" }}>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", letterSpacing: "0.04em", marginBottom: "0.35rem" }}>Operations AI Database</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "oklch(0.65 0.025 240)", lineHeight: 1.6 }}>Specific NZ runs a proprietary AI-powered operations database — enabling real-time project tracking, asset management, and logistics coordination across all NZ sites.</p>
                  </div>
                </div>

                <div style={{ paddingTop: "0.5rem", borderTop: "1px solid oklch(1 0 0 / 0.08)" }}>
                  <p className="section-label mb-3">Project Types</p>
                  <ul className="space-y-2">
                    {["FF&E Delivery & Installation", "Commercial Installations", "Corporate Relocations", "Logistics Management", "Warehousing & Storage"].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span style={{ color: "oklch(0.63 0.18 38)", fontWeight: 700 }}>—</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.025 240)" }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  className="p-10 text-center"
                  style={{ background: "oklch(0.20 0.04 240)", borderTop: "3px solid oklch(0.63 0.18 38)" }}
                >
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "2rem",
                      color: "white",
                      marginBottom: "1rem",
                    }}
                  >
                    MESSAGE RECEIVED
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", color: "oklch(0.65 0.025 240)", lineHeight: 1.65 }}>
                    Thank you for getting in touch. A member of the Specific NZ team will respond to your enquiry within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.63 0.18 38)"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(1 0 0 / 0.12)"; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.63 0.18 38)"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(1 0 0 / 0.12)"; }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.63 0.18 38)"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(1 0 0 / 0.12)"; }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(0.63 0.18 38)"; }}
                        onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "oklch(1 0 0 / 0.12)"; }}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = "oklch(0.63 0.18 38)"; }}
                      onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = "oklch(1 0 0 / 0.12)"; }}
                    >
                      <option value="" style={{ background: "oklch(0.16 0.035 240)" }}>Select a service...</option>
                      <option value="ffe" style={{ background: "oklch(0.16 0.035 240)" }}>FF&E Delivery & Installation</option>
                      <option value="installation" style={{ background: "oklch(0.16 0.035 240)" }}>Commercial Installations</option>
                      <option value="relocation" style={{ background: "oklch(0.16 0.035 240)" }}>Corporate Relocation</option>
                      <option value="logistics" style={{ background: "oklch(0.16 0.035 240)" }}>Logistics Management</option>
                      <option value="other" style={{ background: "oklch(0.16 0.035 240)" }}>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Project Details *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project — location, timeline, scope, and any specific requirements."
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        color: formData.message ? "white" : "oklch(0.45 0.02 240)",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor = "oklch(0.63 0.18 38)";
                        (e.target as HTMLTextAreaElement).style.color = "white";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLTextAreaElement).style.borderColor = "oklch(1 0 0 / 0.12)";
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      background: "oklch(0.63 0.18 38)",
                      color: "white",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "1rem 2.5rem",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.55 0.18 38)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.63 0.18 38)"; }}
                  >
                    Send Enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
