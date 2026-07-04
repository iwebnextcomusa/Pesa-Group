import { ArrowRight, Sparkles, Building, Globe, Landmark } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 mesh-bg" id="hero">
      
      {/* Decorative Blur Backdrops for luxurious feeling */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-blue-200/10 rounded-full blur-3xl -z-10 animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-slate-300/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Elite top badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 shadow-sm animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="text-[10px] uppercase font-mono tracking-widest font-extrabold">
              Redefining Global Excellence
            </span>
          </div>
        </div>

        {/* Hero Copywriting Content */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-600 mb-3 font-bold">
            PESA CONSULTING GROUP LLC
          </p>
          
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl text-slate-900 font-extrabold tracking-tight leading-[1.1] mb-6">
            We Provide <span className="text-blue-600 font-black">Real Solutions</span> <br className="hidden sm:inline" />
            for Real People
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            A diversified multi-national corporation and elite advisory firm. Under President Camy Likobe, we deliver strategic consulting, luxury real estate brokerage, sustainable construction, private jet procurement, international student visas, and ethical mining logistics.
          </p>

          {/* Official Brochure Branding: PESA Framework */}
          <div className="max-w-4xl mx-auto mb-12 p-5 bg-blue-50/50 rounded-2xl border border-blue-100/70 text-left sm:text-center animate-fade-in" id="pesa-acronym-showcase">
            <h4 className="text-xs font-mono uppercase tracking-widest text-blue-600 font-extrabold mb-4 sm:text-center">
              PESA Philosophy: Purpose • Expansion • Structure • Assembly
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-slate-800">
              <div className="space-y-1 p-3 bg-white rounded-xl border border-slate-200/50 shadow-xs">
                <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-wider block">P • Purpose</span>
                <span className="text-[10px] text-slate-400 font-mono block mb-1">Objectif</span>
                <p className="text-xs text-slate-600 leading-snug font-sans">Nous donnons un sens stratégique à chaque projet.</p>
              </div>
              <div className="space-y-1 p-3 bg-white rounded-xl border border-slate-200/50 shadow-xs">
                <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-wider block">E • Expansion</span>
                <span className="text-[10px] text-slate-400 font-mono block mb-1">Expansion</span>
                <p className="text-xs text-slate-600 leading-snug font-sans">Nous favorisons la croissance durable et l'innovation.</p>
              </div>
              <div className="space-y-1 p-3 bg-white rounded-xl border border-slate-200/50 shadow-xs">
                <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-wider block">S • Structure</span>
                <span className="text-[10px] text-slate-400 font-mono block mb-1">Structure</span>
                <p className="text-xs text-slate-600 leading-snug font-sans">Nous mettons en place des bases solides et performantes.</p>
              </div>
              <div className="space-y-1 p-3 bg-white rounded-xl border border-slate-200/50 shadow-xs">
                <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-wider block">A • Assembly</span>
                <span className="text-[10px] text-slate-400 font-mono block mb-1">Assemblage</span>
                <p className="text-xs text-slate-600 leading-snug font-sans">Nous coordonnons les ressources pour un impact maximal.</p>
              </div>
            </div>
          </div>

          {/* Luxury CTA button block */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection("services")}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold rounded-lg shadow-lg shadow-blue-200/50 hover-blue-glow transition-all duration-300 flex items-center justify-center gap-3"
              id="hero-explore-pillars-btn"
            >
              <span>Explore Strategic Pillars</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-sans font-bold rounded-lg shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
              id="hero-contact-office-btn"
            >
              <span>Global Office Directory</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          
          {/* Stat 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm flex items-start gap-4 hover:border-blue-400 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <p className="font-sans text-2xl font-extrabold text-slate-900 tracking-tight">$300M+</p>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 font-semibold">Capital Market Advisory</p>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">Empowering companies with custom financial structures & allocation projections.</p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm flex items-start gap-4 hover:border-blue-400 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <p className="font-sans text-2xl font-extrabold text-slate-900 tracking-tight">100% Approval</p>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 font-semibold">EB-5 Visa Programs</p>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">Adjudicated approval rate for over 300 global immigrant investors across 30+ nations.</p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm flex items-start gap-4 hover:border-blue-400 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <p className="font-sans text-2xl font-extrabold text-slate-900 tracking-tight font-black">Multi-Pillar</p>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 font-semibold">Diversified Ecosystem</p>
              <p className="text-[11px] text-slate-600 mt-1 leading-snug">Seamless operations across luxury real estate, mining, aviation, and student visas.</p>
            </div>
          </div>

        </div>

        {/* Video Integration section (Premium Auto-play background concept card) */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl relative border border-slate-200 bg-slate-950" id="hero-media-wrapper">
          
          {/* Muted background luxury clip placeholder */}
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
              alt="PESA Group Architectural Headquarters" 
              className="w-full h-full object-cover brightness-[0.4]"
            />
            
            {/* HUD / Overlay elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent p-6 sm:p-10 flex flex-col justify-end">
              <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest mb-1.5 font-bold">
                PESA Executive Documentaries // 01
              </span>
              <h3 className="font-sans text-xl sm:text-2xl md:text-3xl text-white font-extrabold tracking-tight mb-2 max-w-xl">
                Redesigning International Advisory & Real Estate Brokerage
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl hidden sm:block leading-relaxed">
                Watch how PESA Group builds mutual trust, aligns with strict corporate governance, and structures high-impact investments between global capital channels and prime assets in Texas and Central Africa.
              </p>
            </div>

            {/* Micro decorative recording overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-1 rounded text-[9px] text-blue-400 font-mono border border-blue-500/20 font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span>HD PLAYBACK ACTIVE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
