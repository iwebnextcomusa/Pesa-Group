import React, { useState } from "react";
import { 
  Briefcase, Heart, Globe, GraduationCap, Award, ShieldCheck, 
  Send, ArrowRight, CheckCircle, Target, Users, Landmark, Check
} from "lucide-react";

export default function CareersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "graduate",
    experience: "",
    portfolioUrl: ""
  });

  const benefits = [
    { title: "Bilateral Experience", desc: "Gain highly unique corporate advisory experience bridging North American capital models and Central African trade logistics." },
    { title: "Long-Term Security", desc: "Since we prioritize 5+ year contracts, our agents enjoy high-performing dividend distributions and stable monthly remunuration." },
    { title: "Rigorous Training", desc: "Gain continuous capacity building, mentoring under CEO Camy Likobe, and training in legacy enterprise IT modernization." },
    { title: "Meritocratic Growth", desc: "We completely set aside favoritism and personal affinities to reward pure quality of work, strict timeliness, and task precision." }
  ];

  const jobs = [
    { id: "1", title: "Senior Business Analyst", dept: "Strategy Consulting", loc: "Dallas, TX // Hybrid", pay: "$115,000 - $140,000" },
    { id: "2", title: "Managing Logistics Auditor", dept: "Audit & Operations", loc: "Kinshasa, DRC // On-site", pay: "Competitive Contract" },
    { id: "3", title: "Strategic Technology Engineer", dept: "Technology Consulting", loc: "Dallas, TX // Remote", pay: "$130,000 - $165,000" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", program: "graduate", experience: "", portfolioUrl: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="careers-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="careers-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            Career Horizons
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            Careers at PESA Consulting Group
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Build your professional legacy with a global firm committed to absolute execution rigor, zero-cash transparency, and five-year strategic contracts.
          </p>
        </div>
      </section>

      {/* 2. Culture & Benefits */}
      <section className="py-20" id="careers-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold block">PESA Environment</span>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                An Elite Culture of Rigorous Execution
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                At PESA Consulting Group, we believe that world-class deliverables can only be produced when team members are held to absolute compliance, quality work, and strict deadline adherence. We maintain a lean, high-velocity organization and reward outstanding performance according to pre-established profit margin formulas.
              </p>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">Pre-financing security and zero cash policy</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">Weekly and monthly progress monitoring reports</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">Distributed administrative hubs in Dallas and Kinshasa</span>
                </div>
              </div>
            </div>

            {/* Benefits Grid (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6" id="benefits-grid">
              {benefits.map((ben, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-slate-900">{ben.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-sans">{ben.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Internships & Graduate Programs */}
      <section className="py-20 bg-slate-900 text-white border-y border-slate-800" id="careers-pathways">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">Talent Pipelines</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">Our Internship & Graduate Entry Programs</h2>
            <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="pathways-grid">
            
            {/* Internship Card */}
            <div className="bg-slate-950/80 p-6 sm:p-8 rounded-xl border border-slate-800/80 shadow-md space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 border border-blue-900/40">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-sans text-base sm:text-lg font-bold text-white tracking-tight">PESA Strategic Internship Program</h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                A highly competitive 12-week program designed for elite university students in Dallas and Kinshasa. Interns work directly alongside our senior auditors and consultants, assisting in compiling market evaluations, drafting transaction briefs, and analyzing tech-stack gaps.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-blue-400 font-mono font-bold">
                <span>Summer & Spring cohorts active</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Graduate Card */}
            <div className="bg-slate-950/80 p-6 sm:p-8 rounded-xl border border-slate-800/80 shadow-md space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 border border-blue-900/40">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-sans text-base sm:text-lg font-bold text-white tracking-tight">PESA Global Graduate Scheme</h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                Our accelerated path for high-achieving master's graduates. Scheme members are placed immediately into key client account support tracks, rotating through Strategy, Technology Consulting, and Audit practices under direct advisory oversight.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-blue-400 font-mono font-bold">
                <span>2-Year Rotation Cycle</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Careers Form / Portal */}
      <section className="py-20" id="careers-portal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-6">
            
            <div className="space-y-1 text-center">
              <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold block">Candidate Registry</span>
              <h3 className="font-sans text-xl font-extrabold text-slate-950">PESA Global Talent Sourcing Portal</h3>
              <p className="text-slate-500 text-xs font-sans max-w-md mx-auto leading-relaxed">
                Applying for an internship or our graduate program? Submit your credentials securely to register your interest with PESA's talent acquisition committee.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-2 animate-fade-in font-sans">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h5 className="font-bold text-sm">Registry Record Completed</h5>
                <p className="text-xs font-sans">Your application dataset was securely saved and passed to our hiring committees. No candidate fees apply.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="careers-program-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Your Full Name *</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Carole Boboy"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Email Address *</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. c.boboy@pesa-alumni.org"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Target Pathway *</label>
                    <select 
                      value={formData.program}
                      onChange={(e) => setFormData({...formData, program: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none font-sans"
                    >
                      <option value="internship">PESA Strategic Internship Program</option>
                      <option value="graduate">PESA Global Graduate Scheme</option>
                      <option value="general-senior">General Senior Advisory Opening</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Profile / Portfolio URL *</label>
                    <input 
                      type="text"
                      required
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({...formData, portfolioUrl: e.target.value})}
                      placeholder="e.g. https://linkedin.com/in/my-profile"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Academic background & Motivation *</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    placeholder="Briefly state your university, GPA/honors, and why you wish to align with PESA..."
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none font-sans resize-none"
                  />
                </div>

                <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg flex items-start gap-2 text-[10px] text-slate-500 font-sans leading-normal">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Submissions are audited under standard EEOC metrics. PESA Consulting Group never charges fees or solicits financial transactions for candidate recruitment.</span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                    id="submit-careers-portal-btn"
                  >
                    <Send className="w-3.5 h-3.5 text-blue-400" />
                    <span>Submit Candidate Profile</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
