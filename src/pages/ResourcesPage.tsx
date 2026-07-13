import { useState } from "react";
import { 
  FileText, Download, Play, HelpCircle, ChevronDown, BookOpen, 
  Search, ExternalLink, ShieldCheck, ArrowRight, Video, Bookmark 
} from "lucide-react";

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const resources = [
    {
      id: "r1",
      category: "white-paper",
      title: "Multi-Jurisdictional Capital Allocations & Offshore Regulatory Structures",
      date: "July 2026",
      desc: "An in-depth white paper charting cross-border tax compliance, project pre-financing frameworks, and securing direct investor alignment on international infrastructure deals.",
      readTime: "12 min read",
      author: "Camy Likobe & Laetitia Kalala",
      downloads: "1,200+"
    },
    {
      id: "r2",
      category: "case-study",
      title: "The PESA Method: Execuring Complete Business Transformation for 1,200 Scholars",
      date: "May 2026",
      desc: "A detailed client case study assessing how PESA Education restructured study visa compliance, ensuring 100% approval ratings across selected partner academic institutions.",
      readTime: "8 min read",
      author: "Carole Boboy",
      downloads: "850+"
    },
    {
      id: "r3",
      category: "research-report",
      title: "Sub-Saharan Mineral Supply-Chains: Ethical Compliance & Logistics Security",
      date: "April 2026",
      desc: "Strategic research tracking supply-chain safety parameters, environmental due diligence, and structuring bilateral critical minerals contracts under strict international transparency standards.",
      readTime: "15 min read",
      author: "PESA Mining Research Division",
      downloads: "620+"
    },
    {
      id: "r4",
      category: "white-paper",
      title: "Securing Multi-Channel Advisory Portals in the Era of AI & Zero Trust",
      date: "June 2026",
      desc: "Technical frameworks designed to audit corporate wire transfers, eliminate physical cash transactions, and enforce cryptographically validated documentation pipelines.",
      readTime: "10 min read",
      author: "PESA Tech Board",
      downloads: "980+"
    },
    {
      id: "r5",
      category: "video",
      title: "Executive Address: Scaling Corporate Operations Across Dallas & Kinshasa Channels",
      date: "March 2026",
      desc: "A masterclass video led by President Camy Likobe detailing the core values of performance, timeliness, and the lean organization structure of PESA Consulting Group.",
      readTime: "18 min video",
      author: "Camy Likobe",
      downloads: "2,400+ views"
    }
  ];

  const faqs = [
    {
      q: "What is PESA's policy regarding cash transactions?",
      a: "PESA Consulting Group enforces a strict cash ban across all global operations. Under no circumstances should cash payments be delivered to any representative. All operations, contracts, and invoices must be funded exclusively via secure corporate bank wire transfers. Detailed coordinate documents are shared directly upon agreement execution."
    },
    {
      q: "How does the pre-financing model work?",
      a: "PESA provides two financing methodologies: 1) Pre-financing by PESA, which strictly requires the execution of an official Contract or Memorandum of Understanding (MOU) first, and 2) Financing by the Client, which can be structured in standard milestone installments or in full."
    },
    {
      q: "What are the core professional values governing PESA's teams?",
      a: "Our organizational culture is built strictly on quality of work, strict adherence to deadlines, and absolute rigor in execution. Under CEO Camy Likobe's leadership, personal friendships, affinities, and favoritism are completely set aside to guarantee optimal corporate deliverables."
    },
    {
      q: "How is PESA's organizational structure optimized?",
      a: "We maintain a lean, high-speed organization by utilizing professional outsourcing for physical operations, while retaining strategic control: the USA Team (Dallas) manages executive governance, tech infrastructures, and corporate financing, while the Kinshasa Team manages finance, audits, local subcontractors, and regional marketing."
    },
    {
      q: "Does PESA provide immigration legal advice under PESA Education?",
      a: "PESA Education simplifies study abroad paths and provides expert student visa (F-1) document compiling and interview prep. These programs represent professional administrative consulting and do not constitute official legal immigration advisory services."
    }
  ];

  const filteredResources = resources.filter(res => {
    const matchesTab = activeTab === "all" || res.category === activeTab;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="resources-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="resources-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            Knowledge Center
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            Insights, White Papers & FAQs
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Access our vetted publications, strategic research, case studies, and comprehensive compliance guides from PESA's Executive Board.
          </p>
        </div>
      </section>

      {/* 2. Knowledge Center Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Tabs & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-10" id="resources-controls">
            <div className="flex flex-wrap gap-1.5" id="resources-tabs">
              {[
                { id: "all", label: "All Insights" },
                { id: "white-paper", label: "White Papers" },
                { id: "case-study", label: "Case Studies" },
                { id: "research-report", label: "Research Reports" },
                { id: "video", label: "Videos" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-sans font-bold border transition-colors ${
                    activeTab === tab.id 
                      ? "bg-blue-600 border-blue-600 text-white" 
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                  id={`tab-resource-${tab.id}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72" id="resources-search-wrapper">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources..."
                className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-sans"
              />
            </div>
          </div>

          {/* Resources listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="resources-grid">
            {filteredResources.map((res) => (
              <div 
                key={res.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
                id={`resource-card-${res.id}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-600 uppercase bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded font-bold">
                      {res.category.replace("-", " ")}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold">{res.date}</span>
                  </div>

                  <h3 className="font-sans text-base font-bold text-slate-950 leading-snug">
                    {res.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                    {res.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <div className="text-[10px] font-mono text-slate-400">
                    Author: {res.author} // {res.readTime}
                  </div>
                  
                  <button 
                    onClick={() => alert(`Secure file download initiated: ${res.title}.pdf`)}
                    className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-sans font-bold cursor-pointer"
                  >
                    {res.category === "video" ? <Play className="w-3.5 h-3.5 shrink-0" /> : <Download className="w-3.5 h-3.5 shrink-0" />}
                    <span>{res.category === "video" ? "Watch Video" : "Download PDF"}</span>
                  </button>
                </div>
              </div>
            ))}

            {filteredResources.length === 0 && (
              <div className="col-span-full text-center py-12 text-slate-500 text-xs font-sans">
                No articles or papers matched your parameters. Please refine your query keywords.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ================= FAQs SECTION ================= */}
      <section className="py-20 bg-slate-100 border-t border-slate-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">Frequently Answered</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              General Compliance & Operations FAQ
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-3"></div>
          </div>

          <div className="space-y-4" id="faq-accordions">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div 
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                  id={`faq-item-${idx}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 font-sans text-sm font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed font-sans border-t border-slate-50 animate-fade-in whitespace-pre-wrap">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
