import React, { useState } from "react";
import { 
  Users, UserPlus, GraduationCap, Award, Heart, CheckCircle, 
  Send, ShieldCheck, ArrowRight, Briefcase, FileText, Check 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function HumanResources() {
  const { language, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    resumeUrl: "",
    statement: ""
  });

  const hrgil_pillars = [
    {
      title: language === "en" ? "Executive Recruitment" : "Recrutement de Cadres",
      desc: language === "en" 
        ? "Acquiring premier consulting partners and multi-national advisory specialists to drive structural solutions."
        : "Recruter des directeurs de conseil de premier plan et des experts internationaux pour piloter des solutions de structure.",
      icon: UserPlus
    },
    {
      title: language === "en" ? "Capacity Upskilling" : "Renforcement des Capacités",
      desc: language === "en"
        ? "Delivering continuous professional development programs to align local subcontractor networks with world-class metrics."
        : "Fournir des programmes d'apprentissage continu pour aligner les réseaux de sous-traitants locaux sur des métriques d'excellence.",
      icon: GraduationCap
    },
    {
      title: language === "en" ? "Meritocratic Advancement" : "Avancement Méritocratique",
      desc: language === "en"
        ? "Structuring fair, transparent career paths where promotions and rewards are based purely on hard work and on-time results."
        : "Structurer des parcours de carrière équitables et transparents où les promotions reposent uniquement sur l'intégrité et les résultats.",
      icon: Award
    },
    {
      title: language === "en" ? "Employee Engagement" : "Engagement des Collaborateurs",
      desc: language === "en"
        ? "Fostering collaboration across our Dallas and Kinshasa divisions to ensure perfect team harmony and a shared corporate vision."
        : "Favoriser la collaboration entre nos pôles de Dallas et Kinshasa pour garantir une parfaite synergie d'équipe et une vision commune.",
      icon: Heart
    }
  ];

  const jobsList = [
    { 
      id: "sba-tx", 
      title: language === "en" ? "Senior Business Analyst" : "Analyste d'Affaires Senior", 
      location: "Dallas, TX // Hybrid", 
      dept: language === "en" ? "Strategy & Advisory" : "Stratégie & Conseil", 
      type: language === "en" ? "Full-Time" : "Temps Plein", 
      salary: "$115k - $140k" 
    },
    { 
      id: "mla-kin", 
      title: language === "en" ? "Managing Logistics Auditor" : "Auditeur de Logistique Directeur", 
      location: "Kinshasa, DRC // On-site", 
      dept: language === "en" ? "Audit & Compliance" : "Audit & Conformité", 
      type: language === "en" ? "Full-Time" : "Temps Plein", 
      salary: language === "en" ? "Regional Contract" : "Contrat Régional" 
    },
    { 
      id: "ste-tx", 
      title: language === "en" ? "Strategic Technology Engineer" : "Ingénieur en Technologie Stratégique", 
      location: "Dallas, TX // Remote US", 
      dept: language === "en" ? "Technology Consulting" : "Conseil Technologique", 
      type: language === "en" ? "Full-Time" : "Temps Plein", 
      salary: "$130k - $165k" 
    },
    { 
      id: "gmc-kin", 
      title: language === "en" ? "Global Marketing Coordinator" : "Coordinateur Marketing Global", 
      location: "Kinshasa, DRC // Hybrid", 
      dept: language === "en" ? "Marketing & Strategy" : "Marketing & Stratégie", 
      type: language === "en" ? "Contract (5+ Years)" : "Contrat (5+ Ans)", 
      salary: language === "en" ? "Competitive Commission" : "Rémunération Compétitive" 
    }
  ];

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    const element = document.getElementById("application-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", portfolio: "", resumeUrl: "", statement: "" });
      setTimeout(() => {
        setFormSubmitted(false);
        setSelectedJob("");
      }, 5000);
    }
  };

  return (
    <div className="flex-1 animate-fade-in py-20 bg-slate-50" id="hr-page-root">
      
      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0A2540] to-slate-950 text-white py-24 relative overflow-hidden" id="hr-hero">
        <div className="absolute inset-0 bg-radial from-blue-900/15 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            {language === "en" ? "Human Capital Division" : "Pôle Capital Humain"}
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {language === "en" ? "Careers & Human Resources" : "Carrières & Ressources Humaines"}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Unlocking human potential, aligning global subcontractor networks, and hiring elite consultants dedicated to execution rigor."
              : "Libérer le potentiel humain, aligner les réseaux mondiaux de sous-traitants et recruter des consultants d'élite dédiés à la rigueur d'exécution."}
          </p>
        </div>
      </section>

      {/* 2. HR Values / Pillars */}
      <section className="py-20" id="hr-pillars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">
              {language === "en" ? "Our Talent Framework" : "Notre Cadre de Talents"}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              {language === "en" ? "How We Cultivate Executive Performance" : "Comment nous cultivons la performance de nos cadres"}
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="hr-pillars-grid">
            {hrgil_pillars.map((item, idx) => {
              const PillarIcon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-sans text-sm font-bold text-slate-900 tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Open Positions */}
      <section className="py-20 bg-slate-100 border-y border-slate-200" id="hr-open-positions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">
              {language === "en" ? "Join Our Ranks" : "Rejoignez Nos Rangs"}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              {language === "en" ? "Current Career Opportunities" : "Opportunités de Carrière Actuelles"}
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-3"></div>
            <p className="text-slate-600 text-xs mt-3 max-w-lg mx-auto font-sans">
              {language === "en"
                ? "We seek qualified professionals who align with our standards of on-time delivery, compliance, and strategic excellence."
                : "Nous recherchons des professionnels qualifiés qui s'alignent sur nos normes d'exécution ponctuelle, de conformité et d'excellence."}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4" id="open-jobs-list">
            {jobsList.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sm:flex items-center justify-between gap-6 hover:border-blue-400 transition-colors"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono text-blue-600 uppercase bg-blue-50 px-2.5 py-0.5 rounded font-bold border border-blue-100">
                      {job.dept}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase bg-slate-100 px-2 py-0.5 rounded font-medium">
                      {job.type}
                    </span>
                  </div>

                  <h4 className="font-sans text-base font-bold text-slate-950 truncate">
                    {job.title}
                  </h4>
                  
                  <p className="text-xs text-slate-400 font-sans">
                    {language === "en" ? "Location" : "Localisation"}: {job.location} // {language === "en" ? "Target Comp" : "Rémunération cible"}: {job.salary}
                  </p>
                </div>

                <div className="mt-4 sm:mt-0 shrink-0">
                  <button
                    onClick={() => handleApply(job.title)}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    id={`apply-btn-${job.id}`}
                  >
                    <span>{language === "en" ? "Apply Now" : "Postuler"}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Interactive Job Application Form */}
      <section className="py-20 scroll-mt-20" id="application-form-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-6">
            
            <div className="space-y-1 text-center">
              <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold block">
                {language === "en" ? "Secure Candidate Portal" : "Portail Candidat Sécurisé"}
              </span>
              <h3 className="font-sans text-xl font-extrabold text-slate-950">
                {language === "en" ? "Submit Your Credentials" : "Soumettez Votre Candidature"}
              </h3>
              <p className="text-slate-500 text-xs font-sans max-w-md mx-auto leading-relaxed">
                {language === "en"
                  ? "Provide your details, professional portfolios, or resume paths. All candidate submissions are processed under strict, encrypted HR privacy standards."
                  : "Fournissez vos coordonnées, vos portfolios professionnels ou vos liens de CV. Toutes les candidatures sont traitées selon des normes strictes de confidentialité."}
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-2 animate-fade-in font-sans">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h5 className="font-bold text-sm font-sans">{language === "en" ? "Application Received Successfully" : "Candidature reçue avec succès"}</h5>
                <p className="text-xs">{language === "en" ? "Your files have been securely indexed. Our HR committee will review and reach out within 5 business days if aligned." : "Vos fichiers ont été indexés en toute sécurité. Notre comité RH vous contactera sous 5 jours ouvrables si votre profil correspond."}</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4" id="job-apply-form">
                
                {/* Auto Selected Job Indicator */}
                {selectedJob && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-800 font-sans font-bold flex items-center justify-between">
                    <span>{language === "en" ? `Applying For: ${selectedJob}` : `Poste sélectionné : ${selectedJob}`}</span>
                    <button 
                      type="button" 
                      onClick={() => setSelectedJob("")}
                      className="text-slate-400 hover:text-slate-600 text-[10px] font-mono uppercase underline tracking-wider"
                    >
                      {language === "en" ? "Clear Selection" : "Effacer"}
                    </button>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Your Full Name *" : "Nom complet *"}</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Carole Boboy"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Personal Email Address *" : "Adresse email personnelle *"}</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. c.boboy@gmail.com"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Selected Job Title" : "Intitulé du poste recherché"}</label>
                    <input 
                      type="text"
                      value={selectedJob}
                      onChange={(e) => setSelectedJob(e.target.value)}
                      placeholder="e.g. Senior Business Analyst"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Resume Link / OneDrive Path *" : "Lien de CV / Fichier OneDrive *"}</label>
                    <input 
                      type="text"
                      required
                      value={formData.resumeUrl}
                      onChange={(e) => setFormData({...formData, resumeUrl: e.target.value})}
                      placeholder="e.g. https://linkedin.com/in/my-profile"
                      className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Professional Statement & Alignment *" : "Déclaration Professionnelle & Alignement *"}</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.statement}
                    onChange={(e) => setFormData({...formData, statement: e.target.value})}
                    placeholder={language === "en" ? "Briefly describe how your experience aligns with PESA's values of absolute rigor and timeliness..." : "Décrivez brièvement comment votre parcours s'aligne sur les exigences de rigueur et de ponctualité de PESA..."}
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors font-sans resize-none"
                  />
                </div>

                {/* Secure audit disclaimer */}
                <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg flex items-start gap-2.5 text-[10px] text-slate-500 leading-normal font-sans">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-600 shrink-0" />
                  <span>
                    {language === "en"
                      ? "By submitting, you authorize PESA's hiring board to verify referenced credentials and conduct secure background compliance checks. We do not charge fees during any phase of candidate screening."
                      : "En soumettant ce formulaire, vous autorisez le comité de recrutement de PESA à vérifier vos diplômes et références et à effectuer des contrôles de conformité. Aucun frais n'est requis durant notre processus."}
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                    id="submit-candidate-application-btn"
                  >
                    <Send className="w-3.5 h-3.5 text-blue-400" />
                    <span>{language === "en" ? "Submit Candidate Profile" : "Soumettre ma candidature"}</span>
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
