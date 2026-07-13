import React, { useState } from "react";
import { 
  Phone, Mail, MessageSquare, Clock, Landmark, Globe, 
  Send, CheckCircle, ShieldCheck, ArrowUpRight, Sparkles 
} from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Advisory Consultation",
    message: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "Advisory Consultation", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="contact-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="contact-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            Executive Desk
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            Connect With PESA Group
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Inquire about our comprehensive strategy divisions, global audits, study-abroad programs, or private asset acquisitions.
          </p>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Contact Metrics & Opening Hours (5 Cols) */}
            <div className="lg:col-span-5 space-y-8" id="contact-details-panel">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-extrabold block">Executive Registry</span>
                <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Direct Executive Contact Channels
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                  PESA's advisory teams correspond through secure corporate channels. Access our US and African operational hubs directly below:
                </p>
              </div>

              {/* Channels List */}
              <div className="space-y-4" id="direct-channels">
                
                {/* Channel 1: US Office */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-extrabold block bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                      North America Hub
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-bold text-slate-900">Dallas Headquarters</h4>
                  <div className="space-y-1.5 font-sans text-xs text-slate-600">
                    <p className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-mono">+1 (682) 424-5857</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-mono">dallas.desk@pesagroup.org</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Mon - Fri: 08:30 - 17:30 (CST)</span>
                    </p>
                  </div>
                </div>

                {/* Channel 2: DRC Office */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-extrabold block bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                      Central Africa Hub
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-bold text-slate-900">Kinshasa Operations</h4>
                  <div className="space-y-1.5 font-sans text-xs text-slate-600">
                    <p className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-mono">+243 821 368 004</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="font-mono">kinshasa.desk@pesagroup.org</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Mon - Fri: 08:30 - 17:30 (WAT)</span>
                    </p>
                  </div>
                </div>

                {/* WhatsApp Channel */}
                <a 
                  href="https://wa.me/243821368004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100/70 p-4 rounded-xl border border-emerald-200 shadow-sm flex items-center justify-between group transition-colors cursor-pointer block"
                  id="whatsapp-channel-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                      W
                    </div>
                    <div>
                      <h4 className="font-sans text-xs font-bold text-slate-900">Direct WhatsApp Executive Line</h4>
                      <p className="text-[10px] text-slate-500 font-sans">Chat instantly with PESA's international coordinators.</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform" />
                </a>

              </div>
            </div>

            {/* Right Column: Secure Contact Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7" id="contact-form-panel">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-10 space-y-6">
                
                <div className="space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
                    Secure Consultation Portal
                  </span>
                  <h3 className="font-sans text-xl font-extrabold text-slate-950">
                    Submit Advisory Request
                  </h3>
                  <p className="text-slate-500 text-xs font-sans leading-relaxed">
                    Compile your criteria framework below. Your inputs are cryptographically encrypted and channeled directly to CEO Camy Likobe's executive assistants.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-2 animate-fade-in font-sans">
                    <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h5 className="font-bold text-sm font-sans">Inquiry Submitted Successfully</h5>
                    <p className="text-xs">Your inquiry record was completed. Direct wire bank transfer details or administrative credentials will be processed securely.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4" id="executive-contact-form">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Your Full Name *</label>
                        <input 
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="e.g. Carole Boboy"
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Email Address *</label>
                        <input 
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="e.g. c.boboy@pesagroup.org"
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Telephone Number</label>
                        <input 
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="e.g. +1 (682) 424-5857"
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Advisory Topic *</label>
                        <select 
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans"
                        >
                          <option value="Advisory Consultation">Strategy or Business Startup Consulting</option>
                          <option value="Technology Audit">Enterprise Tech Audit or Modernization</option>
                          <option value="Executive Recruitment">Global Talent Sourcing & HR Recruitment</option>
                          <option value="Mining & Sourcing">Ethical Minerals Sourcing Compliance</option>
                          <option value="Asset Procurement">Private Jet or Luxury Land Acquisition</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Proposal Details & Project Scope *</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Detail your operational timelines, target budgets, and consulting parameters..."
                        className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans resize-none"
                      />
                    </div>

                    {/* Wire transfer and secure compliance warning */}
                    <div className="p-3.5 bg-slate-50 border border-slate-150 rounded-lg flex items-start gap-2.5 text-[10px] text-slate-500 leading-normal font-sans">
                      <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Security Notice: We strictly prohibit cash processing of any kind. Strategic pre-financing contracts are release-gated exclusively under signed Memorandum of Understanding (MOU) standards.</span>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                        id="submit-executive-request-btn"
                      >
                        <Send className="w-3.5 h-3.5 text-blue-400" />
                        <span>Transmit Advisory Criteria</span>
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
