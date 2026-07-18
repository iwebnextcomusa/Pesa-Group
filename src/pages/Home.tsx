import React, { useState, useEffect, useRef } from "react";
import { 
  Compass, Cpu, RefreshCw, Users, Briefcase, Layers, Zap, BarChart3, 
  Shield, TrendingUp, GraduationCap, Landmark, Building, Globe, 
  ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Award, 
  Clock, ShieldAlert, Star, Mail, ArrowUpRight, Check
} from "lucide-react";
import { servicesDetailList } from "../servicesData";
import { useLanguage } from "../context/LanguageContext";

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { language, t } = useLanguage();
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Dynamic rotating carousel for partners, events, etc.
  const carouselItems = language === "en" ? [
    { type: "Client Partner", name: "Apex Global Holdings", logoText: "AGH", detail: "Strategic consulting alignment on cross-border operations." },
    { type: "Key Event", name: "Dallas Business Summit 2026", logoText: "DBS", detail: "Keynote presentation on sustainable energy partnerships." },
    { type: "Global Conference", name: "DRC Economic Forum", logoText: "DEF", detail: "Ethical mining and minerals trade logistics workshop." },
    { type: "Community Project", name: "PESA Education Initiative", logoText: "PEI", detail: "Empowering 50+ local scholars with US study pathways." },
    { type: "Client Partner", name: "Vanguard Development Group", logoText: "VDG", detail: "Advisory on luxury mixed-use commercial land development." },
    { type: "International Alliance", name: "Sub-Saharan Trade Council", logoText: "SSTC", detail: "Structuring bilateral commodity exchange agreements." }
  ] : [
    { type: "Partenaire Client", name: "Apex Global Holdings", logoText: "AGH", detail: "Alignement du conseil stratégique sur les opérations transfrontalières." },
    { type: "Événement Majeur", name: "Sommet des Affaires de Dallas 2026", logoText: "SAD", detail: "Présentation principale sur les partenariats énergétiques durables." },
    { type: "Conférence Mondiale", name: "Forum Économique de la RDC", logoText: "DEF", detail: "Atelier sur l'exploitation minière éthique et la logistique du commerce des minerais." },
    { type: "Projet Communautaire", name: "Initiative PESA Éducation", logoText: "PEI", detail: "Autonomisation de plus de 50 universitaires locaux avec des parcours d'études américains." },
    { type: "Partenaire Client", name: "Vanguard Development Group", logoText: "VDG", detail: "Conseil en aménagement de terrains commerciaux de luxe à usage mixte." },
    { type: "Alliance Internationale", name: "Conseil du Commerce Subsaharien", logoText: "SSTC", detail: "Structuration d'accords bilatéraux d'échange de matières premières." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePartnerIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  // 2. Testimonials
  const testimonials = language === "en" ? [
    {
      quote: "PESA Consulting Group has redefined our understanding of international advisory. Under Camy Likobe's leadership, we structured an extremely complex cross-border financial model with absolute compliance and zero friction.",
      author: "David Vance",
      role: "Managing Director, Apex Global Holdings",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "The digital transformation PESA engineered for our logistics framework completely eliminated our operational bottlenecks. Their commitment to deadlines, quality of work, and strict performance metrics is truly exceptional.",
      author: "Marie-Claire Boboy",
      role: "VP of Supply Chain, DRC Trade Union",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "We partnered with PESA for our master-planned real estate development in Texas. Their team handled environmental due diligence, municipal approvals, and structured private capital beautifully. A flawless corporate execution.",
      author: "Marcus Brody",
      role: "Principal Architect, Sundance Chateau Group",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ] : [
    {
      quote: "Le groupe de conseil PESA a redéfini notre vision de l'advisory international. Sous la direction de Camy Likobe, nous avons structuré un modèle financier transfrontalier extrêmement complexe avec une conformité absolue et zéro friction.",
      author: "David Vance",
      role: "Directeur Général, Apex Global Holdings",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "La transformation numérique conçue par PESA pour notre cadre logistique a complètement éliminé nos goulots d'étranglement opérationnels. Leur respect des délais, la qualité de leur travail et la rigueur de leurs indicateurs de performance sont exceptionnels.",
      author: "Marie-Claire Boboy",
      role: "Vice-présidente de la chaîne d'approvisionnement, DRC Trade Union",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "Nous nous sommes associés à PESA pour notre projet d'aménagement immobilier au Texas. Leur équipe a parfaitement géré les audits environnementaux, les autorisations municipales et la structuration du capital privé. Une exécution d'entreprise sans faille.",
      author: "Marcus Brody",
      role: "Architecte Principal, Sundance Chateau Group",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const frenchServiceTranslations: Record<string, { title: string; overview: string }> = {
    "strategy-consulting": {
      title: "Conseil en Stratégie",
      overview: "Chez PESA Consulting Group, notre pôle de Conseil en Stratégie collabore avec les dirigeants pour définir leur vision, naviguer sur des marchés en mutation et aligner les investissements sur des performances durables. Nous apportons une rigueur analytique, des modèles financiers sur mesure et des feuilles de route exploitables."
    },
    "technology-consulting": {
      title: "Conseil Technologique",
      overview: "Nous aidons les organisations à transformer la technologie d'un centre de coûts en un puissant moteur de croissance. Notre pôle de Conseil Technologique fournit des conseils objectifs et experts sur l'architecture informatique, la modernisation des systèmes et l'optimisation des outils numériques."
    },
    "digital-transformation": {
      title: "Transformation Digitale",
      overview: "La transformation digitale ne consiste pas seulement à adopter de nouvelles technologies, mais à repenser la façon dont votre organisation crée de la valeur. PESA travaille avec les entreprises pour automatiser les flux de travail clés et instaurer des cultures numériques centrées sur l'expérience client."
    },
    "human-resources": {
      title: "Ressources Humaines",
      overview: "Le principal avantage stratégique d'une organisation réside dans ses collaborateurs. Le pôle Ressources Humaines de PESA vous aide à acquérir, développer, retenir et inspirer des talents d'élite. Nous concevons des structures organisationnelles modernes et des systèmes de rémunération attractifs."
    },
    "project-management": {
      title: "Gestion de Projet",
      overview: "Les grandes idées exigent une exécution sans faille. Le pôle Gestion de Projet de PESA déploie des directeurs de projet certifiés et expérimentés pour piloter vos initiatives prioritaires. Nous apportons ordre, prévisibilité et dynamique aux programmes complexes."
    },
    "change-management": {
      title: "Conduite du Changement",
      overview: "Même la meilleure stratégie ou technologie échoue si vos équipes ne l'adoptent pas. Le pôle Conduite du Changement de PESA se concentre sur le facteur humain. Nous préparons et accompagnons vos employés à adopter de nouveaux processus et outils."
    },
    "business-process-improvement": {
      title: "Amélioration des Processus",
      overview: "Dans un paysage concurrentiel, l'efficacité opérationnelle est essentielle. Notre pôle d'Amélioration des Processus applique les principes du Lean et du Six Sigma pour analyser vos flux de travail existants, éliminer les goulets d'étranglement et automatiser les tâches."
    },
    "data-analytics": {
      title: "Données & Analyses",
      overview: "La donnée est votre actif le plus précieux. Notre pôle Données & Analyses vous aide à capturer, nettoyer, organiser et analyser l'information pour prendre des décisions plus rapides et fiables. Des tableaux de bord interactifs à la modélisation prédictive, nous convertissons la complexité en clarté."
    },
    "cybersecurity": {
      title: "Cybersécurité",
      overview: "Avec l'expansion numérique, les cybermenaces se multiplient. Le pôle Cybersécurité de PESA propose une gestion complète des risques, des audits de conformité, une surveillance des menaces et des systèmes de réponse rapide pour protéger vos actifs stratégiques."
    },
    "financial-advisory": {
      title: "Conseil Financier",
      overview: "Le pôle Conseil Financier de PESA accompagne les organisations lors de transactions critiques, d'expansions de capital et de cadres réglementaires complexes. Nous nous spécialisons dans la finance transfrontalière et la trésorerie."
    },
    "training": {
      title: "Formation & Renforcement",
      overview: "La croissance durable exige une culture d'apprentissage continu. Le pôle Formation de PESA conçoit et dispense des programmes de haut niveau, des formations techniques et des modules de conformité adaptés à vos défis."
    },
    "government-consulting": {
      title: "Conseil au Secteur Public",
      overview: "PESA accompagne les municipalités, États et gouvernements nationaux pour fournir des services publics efficaces, moderniser les systèmes d'information et planifier les infrastructures stratégiques, avec une intégrité absolue."
    },
    "private-sector": {
      title: "Conseil au Secteur Privé",
      overview: "Notre pôle dédié au Secteur Privé collabore avec les créateurs de startups, les entreprises familiales et les ETI pour structurer leurs opérations, étendre leur présence géographique et optimiser leurs chaînes logistiques."
    },
    "international-development": {
      title: "Développement International",
      overview: "Le pôle Développement International de PESA collabore avec les banques de développement, les ONG et les nations souveraines pour structurer des projets d'infrastructure, d'énergie propre et d'éducation sur les marchés émergents."
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // 3. Lucide Icon Map for 14 services
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setNewsletterSubscribed(true);
      setEmailValue("");
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  return (
    <div className="flex-1 animate-fade-in" id="home-page-root">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-32 pb-24 md:py-44 text-white min-h-[95vh] flex flex-col justify-center bg-slate-950 isolate" id="hero">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-20" id="hero-media-wrapper">
          <video
            ref={videoRef}
            src="https://uakg9u0vtibqfzny.public.blob.vercel-storage.com/Animate_storyboard_sequence_Pesa%E2%80%A6_202607042233.mp4"
            className="w-full h-full object-cover scale-100 transition-transform duration-700"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />
        </div>

        {/* Minimal shadow overlay for legibility */}
        <div className="absolute inset-0 bg-black/40 -z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-slate-950 to-transparent -z-10 pointer-events-none" />

        {/* Floating premium audio toggle */}
        <div className="absolute top-6 right-6 z-20">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center gap-2 bg-slate-900/90 hover:bg-blue-600 hover:text-white px-3.5 py-2 rounded-full text-xs text-blue-300 font-mono border border-slate-800 hover:border-blue-500 transition-all duration-300 shadow-xl backdrop-blur-md cursor-pointer select-none active:scale-95"
            title={isMuted ? "Unmute Video" : "Mute Video"}
            id="hero-video-mute-toggle"
          >
            {isMuted ? "UNMUTE AUDIO" : "MUTE AUDIO"}
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          {/* Top Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 text-blue-300 border border-blue-500/30 shadow-md backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[10px] uppercase font-mono tracking-widest font-extrabold">
                PESA Consulting Group LLC
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 
              className="font-sans text-4xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tight leading-[1.1] mb-6 uppercase"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.8)" }}
            >
              {language === "en" ? (
                <>
                  We Provide <span className="text-blue-400 font-black">Real Solutions</span> <br className="hidden sm:inline" />
                  for Real People
                </>
              ) : (
                <>
                  Nous Apportons des <span className="text-blue-400 font-black">Solutions Réelles</span> <br className="hidden sm:inline" />
                  pour de Vraies Personnes
                </>
              )}
            </h1>

            <p 
              className="text-slate-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-medium"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,0.95)" }}
            >
              {language === "en" ? (
                "A diversified multi-national corporation and elite advisory firm. Under President Camy Likobe, we deliver strategic consulting, luxury real estate brokerage, sustainable construction, private jet procurement, international student visas, and ethical mining logistics."
              ) : (
                "Une multinationale diversifiée et un cabinet de conseil d'élite. Sous la direction du Président Camy Likobe, nous offrons des services de conseil stratégique, de courtage immobilier de luxe, de construction durable, d'approvisionnement en jets privés, de visas d'études internationaux et de logistique minière éthique."
              )}
            </p>

            {/* Official Brochure Branding: PESA Framework */}
            <div className="max-w-4xl mx-auto mb-10 p-6 sm:p-8 bg-slate-900/40 rounded-2xl border border-slate-800/80 text-center backdrop-blur-md animate-fade-in" id="pesa-acronym-showcase">
              <h4 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-blue-400 font-extrabold mb-6 text-center">
                PESA PHILOSOPHY: PURPOSE • EXPANSION • STRUCTURE • ASSEMBLY
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-slate-100">
                {/* Card P */}
                <div className="bg-[#050e1e]/90 hover:bg-[#08152e] border border-blue-900/30 hover:border-blue-500/40 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:shadow-blue-950/20">
                  <span className="text-xs sm:text-sm font-mono font-extrabold text-blue-400 uppercase tracking-widest block">
                    P • PURPOSE
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase tracking-wider">
                    {language === "fr" ? "Objectif" : "Purpose"}
                  </span>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans mt-3 text-center px-1">
                    {language === "fr" 
                      ? "Nous donnons un sens stratégique à chaque projet." 
                      : "We provide a strategic purpose and direction to every project."}
                  </p>
                </div>

                {/* Card E */}
                <div className="bg-[#050e1e]/90 hover:bg-[#08152e] border border-blue-900/30 hover:border-blue-500/40 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:shadow-blue-950/20">
                  <span className="text-xs sm:text-sm font-mono font-extrabold text-blue-400 uppercase tracking-widest block">
                    E • EXPANSION
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase tracking-wider">
                    {language === "fr" ? "Expansion" : "Expansion"}
                  </span>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans mt-3 text-center px-1">
                    {language === "fr" 
                      ? "Nous favorisons la croissance durable et l'innovation." 
                      : "We foster sustainable growth and continuous innovation."}
                  </p>
                </div>

                {/* Card S */}
                <div className="bg-[#050e1e]/90 hover:bg-[#08152e] border border-blue-900/30 hover:border-blue-500/40 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:shadow-blue-950/20">
                  <span className="text-xs sm:text-sm font-mono font-extrabold text-blue-400 uppercase tracking-widest block">
                    S • STRUCTURE
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase tracking-wider">
                    {language === "fr" ? "Structure" : "Structure"}
                  </span>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans mt-3 text-center px-1">
                    {language === "fr" 
                      ? "Nous mettons en place des bases solides et performantes." 
                      : "We establish robust, high-performance foundations."}
                  </p>
                </div>

                {/* Card A */}
                <div className="bg-[#050e1e]/90 hover:bg-[#08152e] border border-blue-900/30 hover:border-blue-500/40 p-5 rounded-xl transition-all duration-300 text-center flex flex-col justify-center items-center min-h-[140px] shadow-lg hover:shadow-blue-950/20">
                  <span className="text-xs sm:text-sm font-mono font-extrabold text-blue-400 uppercase tracking-widest block">
                    A • ASSEMBLY
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase tracking-wider">
                    {language === "fr" ? "Assemblage" : "Assembly"}
                  </span>
                  <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans mt-3 text-center px-1">
                    {language === "fr" 
                      ? "Nous coordonnons les ressources pour un impact maximal." 
                      : "We coordinate resources for maximum global impact."}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate("/services")}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold rounded-lg shadow-lg hover-blue-glow transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
                id="hero-services-cta"
              >
                <span>{t("Our Services")}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => onNavigate("/contact")}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 font-sans font-bold rounded-lg shadow-sm backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-contact-cta"
              >
                <span>{t("Contact Us")}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DYNAMIC PARTNER SECTION (CAROUSEL) ================= */}
      <section className="py-8 bg-slate-900 border-y border-slate-800 overflow-hidden" id="partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] text-center font-mono uppercase tracking-widest text-slate-400 mb-6 font-bold">
            {t("PESA Network Portfolio, Events & Alliances")}
          </p>
          
          <div className="relative max-w-5xl mx-auto" id="partners-carousel-wrapper">
            <div className="flex items-center justify-between gap-6 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* Active carousel items */}
                {carouselItems.slice(activePartnerIndex % (carouselItems.length - 1), (activePartnerIndex % (carouselItems.length - 1)) + 2).map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-slate-950/80 p-5 rounded-xl border border-slate-800/80 shadow-md flex items-start gap-4 transition-all duration-500 hover:border-blue-500/30"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 font-mono font-black text-xs border border-blue-900/40">
                      {item.logoText}
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest block font-bold mb-1">
                        {item.type}
                      </span>
                      <h4 className="text-white font-sans text-sm font-bold tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-slate-400 text-xs mt-1 font-sans">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-1.5 mt-5">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePartnerIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activePartnerIndex === index ? "bg-blue-500 w-5" : "bg-slate-700 hover:bg-slate-500"
                  }`}
                  id={`dot-partner-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT PESA DIVISION ================= */}
      <section className="py-24 bg-white" id="about-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Block */}
            <div className="lg:col-span-5 relative" id="about-visual-container">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" 
                  alt="PESA Consulting Executive Suite" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-extrabold mb-1">
                    {language === "en" ? "Executive Headquarters" : "Siège Exécutif"}
                  </span>
                  <p className="font-sans text-lg font-extrabold">
                    {language === "en" ? "PESA Dallas Advisory Office" : "Bureau d'Advisory PESA Dallas"}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10 opacity-10"></div>
            </div>

            {/* Content Block */}
            <div className="lg:col-span-7 space-y-6" id="about-content-container">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
                  {language === "en" ? "About PESA Consulting Group" : "À Propos de PESA Consulting Group"}
                </p>
                <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  {language === "en" ? "Driving Corporate Value and Structural Innovation" : "Soutenir la Valeur d'Entreprise et l'Innovation Structurelle"}
                </h2>
                <div className="w-12 h-[1.5px] bg-blue-600 mt-4"></div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                {language === "en" 
                  ? "PESA Consulting Group is a premier corporate advisory and strategy enablement firm built to provide highly tailored, rigorous solutions to visionary organizations worldwide. We guide clients through complex operational structures, technological change, and major financial milestones with absolute clarity and precision."
                  : "PESA Consulting Group est un cabinet d'advisory d'entreprise de premier plan conçu pour fournir des solutions rigoureuses et hautement personnalisées aux organisations visionnaires du monde entier. Nous guidons nos clients à travers des structures opérationnelles complexes, le changement technologique et des étapes financières majeures avec une clarté et une précision absolues."
                }
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h4 className="font-sans text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>{language === "en" ? "Our Mission" : "Notre Mission"}</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {language === "en"
                      ? "To deliver absolute operational excellence and customized strategy assets that empower corporations, investors, and public entities to achieve sustainable growth."
                      : "Offrir une excellence opérationnelle absolue et des atouts stratégiques personnalisés qui permettent aux entreprises, aux investisseurs et aux entités publiques de réaliser une croissance durable."
                    }
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Star className="w-4 h-4 text-blue-600" />
                    <span>{language === "en" ? "Our Vision" : "Notre Vision"}</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {language === "en"
                      ? "To remain the world's most trusted partner for multi-jurisdictional consulting, pioneering structured change models that translate executive vision into operational success."
                      : "Demeurer le partenaire le plus fiable au monde pour le conseil multi-juridictionnel, en ouvrant la voie à des modèles de changement structurés qui traduisent la vision de la direction en succès opérationnel."
                    }
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate("/about")}
                  className="px-6 py-3 border border-slate-300 hover:border-blue-600 hover:text-blue-600 font-sans font-bold text-xs uppercase tracking-wider rounded-lg text-slate-700 transition-all duration-300 inline-flex items-center gap-2"
                  id="about-learn-more-btn"
                >
                  <span>{language === "en" ? "Read Our Full Story" : "Lire Notre Histoire Complète"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES PREVIEW GRID ================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-200" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
              {language === "en" ? "Consulting Expertise" : "Expertise en Conseil"}
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
              {language === "en" ? "Our Professional Services" : "Nos Services Professionnels"}
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-4 mb-4"></div>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              {language === "en"
                ? "Explore our comprehensive divisions. Click on any card below to dive deep into custom solutions, case studies, and methodologies."
                : "Explorez nos divisions complètes. Cliquez sur une carte ci-dessous pour plonger au cœur de nos solutions sur mesure, études de cas et méthodologies."
              }
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid-wrapper">
            {servicesDetailList.map((service) => {
              const ServiceIcon = IconMap[service.iconName] || Briefcase;
              const isFr = language === "fr";
              const title = isFr ? (frenchServiceTranslations[service.id]?.title || service.title) : service.title;
              const overview = isFr ? (frenchServiceTranslations[service.id]?.overview || service.overview) : service.overview;

              return (
                <div 
                  key={service.id}
                  onClick={() => onNavigate(`/services/${service.id}`)}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-lg hover:border-blue-400 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                  id={`service-card-${service.id}`}
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                    
                    <div>
                      <h4 className="font-sans text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                        {title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed font-sans">
                        {overview}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                    <span>{language === "en" ? "Explore Division" : "Découvrir la Division"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE PESA (STATS) ================= */}
      <section className="py-24 bg-[#0A2540] text-white relative overflow-hidden" id="why-choose-pesa">
        <div className="absolute inset-0 bg-radial from-slate-900 via-transparent to-transparent pointer-events-none opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-extrabold block">
                {language === "en" ? "Performance Record" : "Historique de Performance"}
              </span>
              <h3 className="font-sans text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                {language === "en" ? "Why Visionary Leaders Trust PESA Group" : "Pourquoi les Dirigeants Visionnaires Font Confiance au Groupe PESA"}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                {language === "en"
                  ? "Our approach blends world-class consulting standards with absolute tactical execution. We measure our achievements based on real financial outcomes and successful regulatory compliance."
                  : "Notre approche associe des standards de conseil de classe mondiale à une exécution tactique absolue. Nous mesurons nos réalisations sur la base de résultats financiers réels et d'une conformité réglementaire rigoureuse."
                }
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">10+ {language === "en" ? "Years" : "Ans"}</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">{language === "en" ? "Experience" : "Expérience"}</span>
                <span className="text-[10px] text-slate-400 block leading-snug">
                  {language === "en"
                    ? "Elite advisory history and asset procurement networks."
                    : "Historique d'advisory d'élite et réseaux d'approvisionnement d'actifs."
                  }
                </span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">300+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">{language === "en" ? "Projects Delivered" : "Projets Livrés"}</span>
                <span className="text-[10px] text-slate-400 block leading-snug">
                  {language === "en"
                    ? "Successful cross-border and corporate advisory setups."
                    : "Configurations d'advisory d'entreprise et transfrontalières réussies."
                  }
                </span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">30+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">{language === "en" ? "Countries Served" : "Pays Desservis"}</span>
                <span className="text-[10px] text-slate-400 block leading-snug">
                  {language === "en"
                    ? "Managing international investment visas and logistics."
                    : "Gestion de visas d'investissement internationaux et de la logistique."
                  }
                </span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1 col-span-2 md:col-span-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">100%</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">{language === "en" ? "Approval Record" : "Taux d'Approbation"}</span>
                <span className="text-[10px] text-slate-400 block leading-snug">
                  {language === "en"
                    ? "Adjudicated approval rate for global study & EB-5 visas."
                    : "Taux d'approbation certifié pour les visas d'études et EB-5."
                  }
                </span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1 col-span-2 md:col-span-2">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400 block tracking-tight">
                  {language === "en" ? "STRICT B wire only" : "VIREMENT UNIQUEMENT"}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">{language === "en" ? "Strict Compliance" : "Strict Conformité"}</span>
                <span className="text-[10px] text-slate-400 block leading-snug">
                  {language === "en"
                    ? "Zero cash handling. Transparent corporate governance and bank-to-bank compliance audits."
                    : "Aucune manipulation d'espèces. Gouvernance d'entreprise transparente et audits de conformité bancaires."
                  }
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS SLIDER ================= */}
      <section className="py-24 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
              Client Feedback
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
              Testimonials From Global Leaders
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto relative px-12" id="testimonial-slider">
            {/* Nav Arrows */}
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer select-none"
              id="prev-testimonial-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer select-none"
              id="next-testimonial-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Quote block */}
            <div className="space-y-6 transition-all duration-500" id="active-testimonial-panel">
              <div className="flex justify-center gap-1">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="font-sans text-base sm:text-lg md:text-xl text-slate-700 italic leading-relaxed max-w-2xl mx-auto">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].author}
                  className="w-10 h-10 rounded-full border border-slate-200" 
                />
                <div className="text-left">
                  <h5 className="font-sans text-xs font-bold text-slate-900">
                    {testimonials[activeTestimonial].author}
                  </h5>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= LATEST INSIGHTS ================= */}
      <section className="py-24 bg-slate-50 border-t border-slate-200" id="insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
                {language === "en" ? "Thought Leadership" : "Pensée Stratégique"}
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                {language === "en" ? "Latest Insights & Research" : "Dernières Analyses & Recherches"}
              </h2>
              <div className="w-12 h-[1.5px] bg-blue-600 mt-4"></div>
            </div>

            <button
              onClick={() => onNavigate("/resources")}
              className="mt-4 md:mt-0 px-5 py-2.5 bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-600 font-sans font-bold text-xs uppercase tracking-wider rounded-lg text-slate-700 transition-all cursor-pointer flex items-center gap-2"
              id="view-all-insights-btn"
            >
              <span>{language === "en" ? "View Knowledge Center" : "Voir le Centre de Connaissances"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="insights-grid-wrapper">
            
            {/* Article 1 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400" 
                    alt="Strategic Advisory Research" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A2540] text-blue-300 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded font-bold border border-slate-800">
                    {language === "en" ? "White Paper" : "Livre Blanc"}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 block font-semibold uppercase">
                    {language === "en" ? "July 10, 2026 // Strategy" : "10 Juillet 2026 // Stratégie"}
                  </span>
                  <h4 className="font-sans text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                    {language === "en" 
                      ? "Multi-Jurisdictional Capital Allocations & Offshore Regulatory Structures" 
                      : "Allocations de capital multi-juridictionnelles & structures réglementaires offshore"
                    }
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-sans">
                    {language === "en"
                      ? "A deep dive into cross-border tax compliance, project pre-financing frameworks, and securing direct investor alignment on infrastructure deals."
                      : "Une analyse approfondie de la conformité fiscale transfrontalière, des cadres de préfinancement de projet et de la sécurisation des investisseurs sur les accords d'infrastructure."
                    }
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => onNavigate("/resources")}
                  className="text-xs font-sans font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>{language === "en" ? "Read Article" : "Lire l'Article"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400" 
                    alt="Cybersecurity Systems" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A2540] text-blue-300 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded font-bold border border-slate-800">
                    {language === "en" ? "Research Report" : "Rapport de Recherche"}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 block font-semibold uppercase">
                    {language === "en" ? "June 28, 2026 // Cybersecurity" : "28 Juin 2026 // Cybersécurité"}
                  </span>
                  <h4 className="font-sans text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                    {language === "en"
                      ? "Securing Multi-Channel Advisory Portals in the Era of AI & Zero Trust"
                      : "Sécurisation des portails de conseil multi-canaux à l'ère de l'IA & du Zero Trust"
                    }
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-sans">
                    {language === "en"
                      ? "How enterprise consulting groups are auditing wire transfers, eliminating physical cash transactions, and enforcing cryptographically validated documentation pipelines."
                      : "Comment les groupes de conseil auditent les virements, éliminent les transactions en espèces et imposent des flux documentaires cryptographiquement validés."
                    }
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => onNavigate("/resources")}
                  className="text-xs font-sans font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>{language === "en" ? "Read Report" : "Lire le Rapport"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400" 
                    alt="Talent Management Meeting" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A2540] text-blue-300 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded font-bold border border-slate-800">
                    {language === "en" ? "Case Study" : "Étude de Cas"}
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 block font-semibold uppercase">
                    {language === "en" ? "May 15, 2026 // Case Study" : "15 Mai 2026 // Étude de Cas"}
                  </span>
                  <h4 className="font-sans text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                    {language === "en"
                      ? "The PESA Method: Executing Complete Business Transformation for 1,200 Scholars"
                      : "La méthode PESA : réussir la transformation complète pour 1 200 boursiers"
                    }
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-sans">
                    {language === "en"
                      ? "An in-depth look at how PESA Education restructured study visa compliance, ensuring 100% approval ratings across selected partner academic institutions."
                      : "Un aperçu détaillé de la façon dont PESA Education a restructuré la conformité des visas d'études, garantissant des taux d'approbation de 100%."
                    }
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => onNavigate("/resources")}
                  className="text-xs font-sans font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>{language === "en" ? "Read Study" : "Lire l'Étude"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= NEWSLETTER SECTION ================= */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden" id="newsletter">
        <div className="absolute inset-0 bg-radial from-blue-900/20 via-transparent to-transparent pointer-events-none -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          <div className="inline-flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-full">
            <Mail className="w-3.5 h-3.5 text-blue-400 ml-1" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-300 font-extrabold pr-2">
              {language === "en" ? "Secure Publication" : "Publication Sécurisée"}
            </span>
          </div>

          <h3 className="font-sans text-2xl sm:text-3xl text-white font-extrabold tracking-tight">
            {language === "en" ? "Stay informed through our newsletter" : "Restez informé grâce à notre newsletter"}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            {language === "en"
              ? "Receive the latest job opportunities, company news and industry insights delivered straight from our Executive Desk."
              : "Recevez les dernières opportunités de carrière, les actualités de l'entreprise et les analyses sectorielles directement de notre bureau exécutif."
            }
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto pt-4" id="newsletter-form">
            {newsletterSubscribed ? (
              <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-4 flex items-center justify-center gap-3 animate-fade-in text-emerald-300">
                <Check className="w-5 h-5" />
                <span className="text-xs font-semibold">
                  {language === "en"
                    ? "Thank you for subscribing! We have registered your secure portal link."
                    : "Merci pour votre abonnement ! Nous avons enregistré votre lien de portail sécurisé."
                  }
                </span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input 
                  type="email"
                  required
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder={language === "en" ? "Enter your professional email address" : "Saisissez votre adresse e-mail professionnelle"}
                  className="w-full bg-slate-900 hover:bg-slate-900/80 focus:bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-500 transition-all font-sans"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg hover-blue-glow transition-all duration-300 shrink-0 cursor-pointer"
                  id="newsletter-subscribe-btn"
                >
                  {language === "en" ? "Subscribe" : "S'abonner"}
                </button>
              </div>
            )}
          </form>

          <p className="text-[10px] text-slate-500 font-mono leading-normal max-w-lg mx-auto">
            {language === "en"
              ? "* By subscribing, you agree to receive strategic briefs from PESA Consulting. Your email is encrypted and never shared with third parties. You may unsubscribe securely at any time."
              : "* En vous abonnant, vous acceptez de recevoir des notes stratégiques de PESA Consulting. Votre e-mail est chiffré et ne sera jamais partagé. Vous pouvez vous désabonner en toute sécurité à tout moment."
            }
          </p>

        </div>
      </section>

    </div>
  );
}
