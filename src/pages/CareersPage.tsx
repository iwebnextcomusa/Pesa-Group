import React, { useState } from "react";
import { 
  Briefcase, Heart, Globe, GraduationCap, Award, ShieldCheck, 
  Send, ArrowRight, CheckCircle, Users, Landmark, Check
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CareersPage() {
  const { language, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "graduate",
    experience: "",
    portfolioUrl: ""
  });

  const benefits = language === "en" ? [
    { title: "Bilateral Experience", desc: "Gain highly unique corporate advisory experience bridging North American capital models and Central African trade logistics." },
    { title: "Long-Term Security", desc: "Since we prioritize 5+ year contracts, our agents enjoy high-performing dividend distributions and stable monthly remunuration." },
    { title: "Rigorous Training", desc: "Gain continuous capacity building, mentoring under CEO Camy Likobe, and training in legacy enterprise IT modernization." },
    { title: "Meritocratic Growth", desc: "We completely set aside favoritism and personal affinities to reward pure quality of work, strict timeliness, and task precision." }
  ] : [
    { title: "Expérience Bilatérale", desc: "Bénéficiez d'une expérience unique en conseil d'entreprise, liant les modèles financiers nord-américains et la logistique d'Afrique centrale." },
    { title: "Sécurité à Long Terme", desc: "Parce que nous priorisons les contrats de plus de 5 ans, nos collaborateurs bénéficient de revenus stables et de primes de performance élevées." },
    { title: "Formation Rigoureuse", desc: "Profitez d'un développement continu de vos compétences, d'un mentorat sous la direction du PDG Camy Likobe, et de formations avancées." },
    { title: "Croissance Méritocratique", desc: "Nous écartons tout favoritisme personnel afin de récompenser uniquement la qualité pure de votre travail, la ponctualité et la précision." }
  ];

  const jobs = language === "en" ? [
    { id: "1", title: "Senior Business Analyst", dept: "Strategy Consulting", loc: "Dallas, TX // Hybrid", pay: "$115,000 - $140,000" },
    { id: "2", title: "Managing Logistics Auditor", dept: "Audit & Operations", loc: "Kinshasa, DRC // On-site", pay: "Competitive Contract" },
    { id: "3", title: "Strategic Technology Engineer", dept: "Technology Consulting", loc: "Dallas, TX // Remote", pay: "$130,000 - $165,000" }
  ] : [
    { id: "1", title: "Analyste d'Affaires Principal", dept: "Conseil Stratégique", loc: "Dallas, TX // Hybride", pay: "115 000 $ - 140 000 $" },
    { id: "2", title: "Auditeur Logistique Principal", dept: "Audit & Opérations", loc: "Kinshasa, RDC // Sur site", pay: "Contrat Compétitif" },
    { id: "3", title: "Ingénieur en Technologie Stratégique", dept: "Conseil Technologique", loc: "Dallas, TX // À distance", pay: "130 000 $ - 165 000 $" }
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
            {t("Career Horizons")}
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">
            {language === "en" ? "Careers at PESA Consulting Group" : "Carrières chez PESA Consulting Group"}
          </h1>
          <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-2"></div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Build your professional legacy with a global firm committed to absolute execution rigor, zero-cash transparency, and five-year strategic contracts."
              : "Bâtissez votre héritage professionnel au sein d'un cabinet mondial engagé pour une rigueur d'exécution absolue, une transparence zéro-cash et des contrats stratégiques de cinq ans."}
          </p>
        </div>
      </section>

      {/* 2. Culture & Benefits */}
      <section className="py-20" id="careers-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold block">{t("PESA Environment")}</span>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {language === "en" ? "An Elite Culture of Rigorous Execution" : "Une Culture d'Élite d'Exécution Rigoureuse"}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "At PESA Consulting Group, we believe that world-class deliverables can only be produced when team members are held to absolute compliance, quality work, and strict deadline adherence. We maintain a lean, high-velocity organization and reward outstanding performance according to pre-established profit margin formulas."
                  : "Chez PESA Consulting Group, nous sommes convaincus que des livrables de classe mondiale ne peuvent être produits que si les membres de notre équipe respectent une conformité stricte et des délais rigoureux. Nous récompensons les performances exceptionnelles selon des formules de marge bénéficiaire prédéfinies."}
              </p>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">{language === "en" ? "Pre-financing security and zero cash policy" : "Sécurité de préfinancement et politique zéro cash"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">{language === "en" ? "Weekly and monthly progress monitoring reports" : "Rapports de suivi hebdomadaires et mensuels"}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-semibold">{language === "en" ? "Distributed administrative hubs in Dallas and Kinshasa" : "Pôles administratifs répartis à Dallas et Kinshasa"}</span>
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
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">{t("Talent Pipelines")}</span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">{language === "en" ? "Our Internship & Graduate Entry Programs" : "Nos Programmes de Stages & Jeunes Diplômés"}</h2>
            <div className="w-12 h-[1.5px] bg-blue-500 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="pathways-grid">
            
            {/* Internship Card */}
            <div className="bg-slate-950/80 p-6 sm:p-8 rounded-xl border border-slate-800/80 shadow-md space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 border border-blue-900/40">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-sans text-base sm:text-lg font-bold text-white tracking-tight">
                {language === "en" ? "PESA Strategic Internship Program" : "Programme de Stage Stratégique PESA"}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "A highly competitive 12-week program designed for elite university students in Dallas and Kinshasa. Interns work directly alongside our senior auditors and consultants, assisting in compiling market evaluations, drafting transaction briefs, and analyzing tech-stack gaps."
                  : "Un programme hautement sélectif de 12 semaines pour les étudiants d'élite à Dallas et Kinshasa. Les stagiaires travaillent directement avec nos auditeurs et consultants pour compiler des analyses, rédiger des briefs de transaction et évaluer les besoins techniques."}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-blue-400 font-mono font-bold">
                <span>{language === "en" ? "Summer & Spring cohorts active" : "Cohortes de printemps & d'été actives"}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Graduate Card */}
            <div className="bg-slate-950/80 p-6 sm:p-8 rounded-xl border border-slate-800/80 shadow-md space-y-4">
              <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 border border-blue-900/40">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-sans text-base sm:text-lg font-bold text-white tracking-tight">
                {language === "en" ? "PESA Global Graduate Scheme" : "Programme Global pour Jeunes Diplômés"}
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "Our accelerated path for high-achieving master's graduates. Scheme members are placed immediately into key client account support tracks, rotating through Strategy, Technology Consulting, and Audit practices under direct advisory oversight."
                  : "Notre parcours accéléré pour les diplômés de master à fort potentiel. Les participants intègrent immédiatement les équipes clients et effectuent des rotations dans les pôles de stratégie, de technologie et d'audit sous mentorat direct."}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-blue-400 font-mono font-bold">
                <span>{language === "en" ? "2-Year Rotation Cycle" : "Cycle de rotation de 2 ans"}</span>
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
              <span className="text-[9px] font-mono uppercase tracking-widest text-blue-600 font-bold block">{t("Candidate Registry")}</span>
              <h3 className="font-sans text-xl font-extrabold text-slate-950">{language === "en" ? "PESA Global Talent Sourcing Portal" : "Portail de Recrutement Global PESA"}</h3>
              <p className="text-slate-500 text-xs font-sans max-w-md mx-auto leading-relaxed">
                {language === "en"
                  ? "Applying for an internship or our graduate program? Submit your credentials securely to register your interest with PESA's talent acquisition committee."
                  : "Vous postulez pour un stage ou notre programme de jeunes diplômés ? Soumettez vos informations de manière sécurisée auprès de notre comité d'acquisition de talents."}
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-800 space-y-2 animate-fade-in font-sans">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h5 className="font-bold text-sm">{language === "en" ? "Registry Record Completed" : "Candidature Enregistrée"}</h5>
                <p className="text-xs font-sans">{language === "en" ? "Your application dataset was securely saved and passed to our hiring committees. No candidate fees apply." : "Votre dossier a été enregistré de manière sécurisée et transmis à notre comité de recrutement. Aucun frais n'est requis."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="careers-program-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Your Full Name *" : "Nom complet *"}</label>
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
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Email Address *" : "Adresse email *"}</label>
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
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Target Pathway *" : "Programme ciblé *"}</label>
                    <select 
                      value={formData.program}
                      onChange={(e) => setFormData({...formData, program: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none font-sans"
                    >
                      <option value="internship">{language === "en" ? "PESA Strategic Internship Program" : "Programme de Stage Stratégique PESA"}</option>
                      <option value="graduate">{language === "en" ? "PESA Global Graduate Scheme" : "Programme Global pour Jeunes Diplômés"}</option>
                      <option value="general-senior">{language === "en" ? "General Senior Advisory Opening" : "Candidature Libre - Conseiller Principal"}</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Profile / Portfolio URL *" : "URL du profil / portfolio *"}</label>
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
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">{language === "en" ? "Academic background & Motivation *" : "Parcours universitaire & Motivation *"}</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    placeholder={language === "en" ? "Briefly state your university, GPA/honors, and why you wish to align with PESA..." : "Décrivez brièvement votre université, vos diplômes et pourquoi vous souhaitez rejoindre PESA..."}
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none font-sans resize-none"
                  />
                </div>

                <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg flex items-start gap-2 text-[10px] text-slate-500 font-sans leading-normal">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{language === "en" ? "Submissions are audited under standard EEOC metrics. PESA Consulting Group never charges fees or solicits financial transactions for candidate recruitment." : "Les dossiers sont évalués conformément aux normes de recrutement. PESA Consulting Group ne facture aucuns frais et ne sollicite jamais de transferts de fonds pour l'embauche."}</span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0A2540] hover:bg-slate-800 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                    id="submit-careers-portal-btn"
                  >
                    <Send className="w-3.5 h-3.5 text-blue-400" />
                    <span>{language === "en" ? "Submit Candidate Profile" : "Soumettre ma Candidature"}</span>
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
