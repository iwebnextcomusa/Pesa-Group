import React, { useState, useEffect, useRef } from "react";
import { 
  Compass, Cpu, RefreshCw, Users, Briefcase, Layers, Zap, BarChart3, 
  Shield, TrendingUp, GraduationCap, Landmark, Building, Globe, 
  ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Award, 
  Clock, ShieldAlert, Star, Mail, ArrowUpRight, Check
} from "lucide-react";
import { servicesDetailList } from "../servicesData";

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Dynamic rotating carousel for partners, events, etc.
  const carouselItems = [
    { type: "Client Partner", name: "Apex Global Holdings", logoText: "AGH", detail: "Strategic consulting alignment on cross-border operations." },
    { type: "Key Event", name: "Dallas Business Summit 2026", logoText: "DBS", detail: "Keynote presentation on sustainable energy partnerships." },
    { type: "Global Conference", name: "DRC Economic Forum", logoText: "DEF", detail: "Ethical mining and minerals trade logistics workshop." },
    { type: "Community Project", name: "PESA Education Initiative", logoText: "PEI", detail: "Empowering 50+ local scholars with US study pathways." },
    { type: "Client Partner", name: "Vanguard Development Group", logoText: "VDG", detail: "Advisory on luxury mixed-use commercial land development." },
    { type: "International Alliance", name: "Sub-Saharan Trade Council", logoText: "SSTC", detail: "Structuring bilateral commodity exchange agreements." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePartnerIndex((prev) => (prev + 1) % carouselItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  // 2. Testimonials
  const testimonials = [
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
  ];

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
              Transforming Organizations <br />
              Through <span className="text-blue-400 font-black">Strategy, Technology & People</span>
            </h1>

            <p 
              className="text-slate-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-medium"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,0.95)" }}
            >
              We solve complex challenges and elevate global performance. Fully customized consulting divisions delivering operational rigor, technical modernization, global recruitment strategies, and executive transformation models.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate("/services")}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold rounded-lg shadow-lg hover-blue-glow transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
                id="hero-services-cta"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={() => onNavigate("/contact")}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 font-sans font-bold rounded-lg shadow-sm backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-contact-cta"
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DYNAMIC PARTNER SECTION (CAROUSEL) ================= */}
      <section className="py-8 bg-slate-900 border-y border-slate-800 overflow-hidden" id="partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] text-center font-mono uppercase tracking-widest text-slate-400 mb-6 font-bold">
            PESA Network Portfolio, Events & Alliances
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
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-extrabold mb-1">Executive Headquarters</span>
                  <p className="font-sans text-lg font-extrabold">PESA Dallas Advisory Office</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10 opacity-10"></div>
            </div>

            {/* Content Block */}
            <div className="lg:col-span-7 space-y-6" id="about-content-container">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-blue-600 mb-2 font-bold">
                  About PESA Consulting Group
                </p>
                <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  Driving Corporate Value and Structural Innovation
                </h2>
                <div className="w-12 h-[1.5px] bg-blue-600 mt-4"></div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                PESA Consulting Group is a premier corporate advisory and strategy enablement firm built to provide highly tailored, rigorous solutions to visionary organizations worldwide. We guide clients through complex operational structures, technological change, and major financial milestones with absolute clarity and precision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h4 className="font-sans text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>Our Mission</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    To deliver absolute operational excellence and customized strategy assets that empower corporations, investors, and public entities to achieve sustainable growth.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Star className="w-4 h-4 text-blue-600" />
                    <span>Our Vision</span>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    To remain the world's most trusted partner for multi-jurisdictional consulting, pioneering structured change models that translate executive vision into operational success.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate("/about")}
                  className="px-6 py-3 border border-slate-300 hover:border-blue-600 hover:text-blue-600 font-sans font-bold text-xs uppercase tracking-wider rounded-lg text-slate-700 transition-all duration-300 inline-flex items-center gap-2"
                  id="about-learn-more-btn"
                >
                  <span>Read Our Full Story</span>
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
              Consulting Expertise
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
              Our Professional Services
            </h2>
            <div className="w-12 h-[1.5px] bg-blue-600 mx-auto mt-4 mb-4"></div>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Explore our comprehensive divisions. Click on any card below to dive deep into custom solutions, case studies, and methodologies.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid-wrapper">
            {servicesDetailList.map((service) => {
              const ServiceIcon = IconMap[service.iconName] || Briefcase;
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
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed font-sans">
                        {service.overview}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                    <span>Explore Division</span>
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
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-extrabold block">Performance Record</span>
              <h3 className="font-sans text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Why Visionary Leaders Trust PESA Group
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                Our approach blends world-class consulting standards with absolute tactical execution. We measure our achievements based on real financial outcomes and successful regulatory compliance.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              
              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">10+ Years</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">Experience</span>
                <span className="text-[10px] text-slate-400 block leading-snug">Elite advisory history and asset procurement networks.</span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">300+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">Projects Delivered</span>
                <span className="text-[10px] text-slate-400 block leading-snug">Successful cross-border and corporate advisory setups.</span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">30+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">Countries Served</span>
                <span className="text-[10px] text-slate-400 block leading-snug">Managing international investment visas and logistics.</span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1 col-span-2 md:col-span-1">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-blue-400 block tracking-tight">100%</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">Approval Record</span>
                <span className="text-[10px] text-slate-400 block leading-snug">Adjudicated approval rate for global study & EB-5 visas.</span>
              </div>

              <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800/80 backdrop-blur-sm space-y-1 col-span-2 md:col-span-2">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400 block tracking-tight">STRICT B wire only</span>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block">Strict Compliance</span>
                <span className="text-[10px] text-slate-400 block leading-snug">Zero cash handling. Transparent corporate governance and bank-to-bank compliance audits.</span>
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
                Thought Leadership
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                Latest Insights & Research
              </h2>
              <div className="w-12 h-[1.5px] bg-blue-600 mt-4"></div>
            </div>

            <button
              onClick={() => onNavigate("/resources")}
              className="mt-4 md:mt-0 px-5 py-2.5 bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-600 font-sans font-bold text-xs uppercase tracking-wider rounded-lg text-slate-700 transition-all cursor-pointer flex items-center gap-2"
              id="view-all-insights-btn"
            >
              <span>View Knowledge Center</span>
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
                    White Paper
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 block font-semibold uppercase">July 10, 2026 // Strategy</span>
                  <h4 className="font-sans text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                    Multi-Jurisdictional Capital Allocations & Offshore Regulatory Structures
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-sans">
                    A deep dive into cross-border tax compliance, project pre-financing frameworks, and securing direct investor alignment on infrastructure deals.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => onNavigate("/resources")}
                  className="text-xs font-sans font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Read Article</span>
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
                    Research Report
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 block font-semibold uppercase">June 28, 2026 // Cybersecurity</span>
                  <h4 className="font-sans text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                    Securing Multi-Channel Advisory Portals in the Era of AI & Zero Trust
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-sans">
                    How enterprise consulting groups are auditing wire transfers, eliminating physical cash transactions, and enforcing cryptographically validated documentation pipelines.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => onNavigate("/resources")}
                  className="text-xs font-sans font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Read Report</span>
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
                    Case Study
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 block font-semibold uppercase">May 15, 2026 // Case Study</span>
                  <h4 className="font-sans text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                    The PESA Method: Executing Complete Business Transformation for 1,200 Scholars
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed font-sans">
                    An in-depth look at how PESA Education restructured study visa compliance, ensuring 100% approval ratings across selected partner academic institutions.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <button 
                  onClick={() => onNavigate("/resources")}
                  className="text-xs font-sans font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Read Study</span>
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
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-300 font-extrabold pr-2">Secure Publication</span>
          </div>

          <h3 className="font-sans text-2xl sm:text-3xl text-white font-extrabold tracking-tight">
            Stay informed through our newsletter
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Receive the latest job opportunities, company news and industry insights delivered straight from our Executive Desk.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto pt-4" id="newsletter-form">
            {newsletterSubscribed ? (
              <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-4 flex items-center justify-center gap-3 animate-fade-in text-emerald-300">
                <Check className="w-5 h-5" />
                <span className="text-xs font-semibold">Thank you for subscribing! We have registered your secure portal link.</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input 
                  type="email"
                  required
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="Enter your professional email address"
                  className="w-full bg-slate-900 hover:bg-slate-900/80 focus:bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-slate-500 transition-all font-sans"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase tracking-widest rounded-lg shadow-lg hover-blue-glow transition-all duration-300 shrink-0 cursor-pointer"
                  id="newsletter-subscribe-btn"
                >
                  Subscribe
                </button>
              </div>
            )}
          </form>

          <p className="text-[10px] text-slate-500 font-mono leading-normal max-w-lg mx-auto">
            * By subscribing, you agree to receive strategic briefs from PESA Consulting. Your email is encrypted and never shared with third parties. You may unsubscribe securely at any time.
          </p>

        </div>
      </section>

    </div>
  );
}
