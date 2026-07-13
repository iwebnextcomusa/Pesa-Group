import React, { useState, useEffect } from "react";
import { 
  Compass, Cpu, RefreshCw, Users, Briefcase, Layers, Zap, BarChart3, 
  Shield, TrendingUp, GraduationCap, Landmark, Building, Globe,
  ArrowRight, CheckCircle, ShieldAlert, ChevronRight, MessageSquare, 
  Send, HelpCircle, Check
} from "lucide-react";
import { servicesDetailList, ServiceDetail } from "../servicesData";

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (path: string) => void;
}

export default function ServiceDetailComponent({ serviceId, onNavigate }: ServiceDetailProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const service = servicesDetailList.find(s => s.id === serviceId) || servicesDetailList[0];

  // Lucide Icon Map
  const IconMap: { [key: string]: any } = {
    Compass: Compass,
    Cpu: Cpu,
    RefreshCw: RefreshCw,
    Users: Users,
    Briefcase: Briefcase,
    Layers: Layers,
    Zap: Zap,
    BarChart3: BarChart3,
    Shield: Shield,
    TrendingUp: TrendingUp,
    GraduationCap: GraduationCap,
    Landmark: Landmark,
    Building: Building,
    Globe: Globe
  };

  const ServiceIcon = IconMap[service.iconName] || Briefcase;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="service-detail-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="service-detail-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-300 font-bold flex items-center justify-center gap-2">
            <ServiceIcon className="w-4 h-4 text-blue-400" />
            <span>PESA Consulting Divisions</span>
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {service.title}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar: Services Navigation (4 Cols) */}
            <div className="lg:col-span-4 space-y-4" id="service-detail-sidebar">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3">
                  All Service Divisions
                </h4>
                
                <div className="flex flex-col gap-1.5 max-h-[450px] overflow-y-auto no-scrollbar pr-1">
                  {servicesDetailList.map((item) => {
                    const ItemIcon = IconMap[item.iconName] || Briefcase;
                    const isActive = item.id === serviceId;

                    return (
                      <button
                        key={item.id}
                        onClick={() => onNavigate(`/services/${item.id}`)}
                        className={`w-full text-left px-4 py-3 rounded-lg border text-xs font-sans font-bold flex items-center justify-between transition-all group ${
                          isActive 
                            ? "bg-blue-600 border-blue-600 text-white shadow-md" 
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-350"
                        }`}
                        id={`sidebar-link-${item.id}`}
                      >
                        <div className="flex items-center gap-3">
                          <ItemIcon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-slate-500 group-hover:text-blue-600"}`} />
                          <span className="truncate max-w-[180px]">{item.title}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Strict compliance reminder card */}
              <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4.5 h-4.5 text-blue-400 shrink-0" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-blue-300 font-extrabold">PESA Compliance Policy</span>
                </div>
                <h5 className="font-sans text-xs font-bold">Strict Wire-Transfer Payments Only</h5>
                <p className="text-slate-400 text-[10px] leading-relaxed font-sans">
                  PESA Consulting Group enforces a strict ban on physical cash transactions. All contracts are financed exclusively via standard corporate bank transfers. Official banking details are delivered securely directly upon agreement execution.
                </p>
              </div>
            </div>

            {/* Right Main Body: Detailed Sections (8 Cols) */}
            <div className="lg:col-span-8 space-y-12" id="service-detail-main-content">
              
              {/* Overview & Core Purpose */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <ServiceIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 block">Division Deep-Dive</span>
                    <h3 className="font-sans text-xl font-bold text-slate-950">Service Overview</h3>
                  </div>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans">
                  {service.overview}
                </p>
              </div>

              {/* Challenges vs. Solutions split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Challenges Panel */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                    <span>Common Client Challenges</span>
                  </h4>
                  
                  <ul className="space-y-3">
                    {service.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-sans">
                        <span className="text-rose-500 shrink-0 font-bold mt-0.5">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Panel */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>Tangible Benefits & Impact</span>
                  </h4>
                  
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Methodology & Approach */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-3">
                  Our Strategic Approach
                </h4>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-sans italic">
                  "{service.approach}"
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <h5 className="font-sans text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider">Solution Deliverables:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.solutions.map((sol, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-800 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Industries Served */}
              <div className="bg-slate-900 text-white rounded-xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-4">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-blue-300 border-b border-slate-800 pb-3">
                  Industries Served By This Practice
                </h4>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.industries.map((ind, idx) => (
                    <span 
                      key={idx} 
                      className="bg-slate-950 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study Panel */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-blue-600">
                    Featured Case Study
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400">
                    Client Type: {service.caseStudy.clientType}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900">
                    {service.caseStudy.title}
                  </h3>

                  <div className="space-y-3 font-sans text-xs">
                    <div>
                      <strong className="text-slate-900 uppercase tracking-widest text-[10px] block">The Challenge:</strong>
                      <p className="text-slate-600 mt-0.5">{service.caseStudy.challenge}</p>
                    </div>

                    <div>
                      <strong className="text-slate-900 uppercase tracking-widest text-[10px] block">The Solution:</strong>
                      <p className="text-slate-600 mt-0.5">{service.caseStudy.solution}</p>
                    </div>

                    <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                      <strong className="text-blue-900 uppercase tracking-widest text-[10px] block">The Result:</strong>
                      <p className="text-blue-800 font-bold mt-0.5">{service.caseStudy.result}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call To Action & Inquiry Form */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6" id="service-contact-form-section">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold block">Inquire Globally</span>
                  <h3 className="font-sans text-lg font-extrabold text-slate-950">Connect with the {service.title} Desk</h3>
                  <p className="text-slate-500 text-xs font-sans leading-relaxed">
                    Submit your organization's criteria to PESA's global advisory division. An executive partner will correspond within 24 business hours.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-2 animate-fade-in font-sans">
                    <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h5 className="font-bold text-sm">Secure Proposal Registered</h5>
                    <p className="text-xs">Your inquiry was compiled and sent to our Executive Desk. All files are encrypted securely.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4" id="service-inquiry-form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Your Name *</label>
                        <input 
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="e.g. Jean Kabamba"
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Professional Email *</label>
                        <input 
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="e.g. j.kabamba@company.org"
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Institution / Company Name</label>
                      <input 
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="e.g. Kinshasa Commodities SA"
                        className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Inquiry Details & Criteria *</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Detail your requirements, project timelines, and operational needs..."
                        className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                        id="submit-service-inquiry-btn"
                      >
                        <Send className="w-3.5 h-3.5 text-blue-400" />
                        <span>Submit Secure Criteria</span>
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
