import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "https://uakg9u0vtibqfzny.public.blob.vercel-storage.com/Animate_storyboard_sequence_Pesa%E2%80%A6_202607042233.mp4";
import Features from "./components/Features";
import MediaGallery from "./components/MediaGallery";
import ThreeDShowcase from "./components/ThreeDShowcase";
import TeamSection from "./components/TeamSection";
import OperationsSection from "./components/OperationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatbotWidget from "./components/ChatbotWidget";
import { Sparkles, Activity, ShieldCheck, Cpu } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("hero");

  // Setup a custom intersection observer or scroll event to detect current visible section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "assets", "interactive-3d", "team", "operations", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-100 selection:text-[#0A2540]" id="pesa-app-root">
      
      {/* 1. Header Navigation Bar */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. Hero Presentation Block */}
      <Hero />

      {/* 3. Core Corporate Pillars (Features Section) */}
      <Features />

      {/* 4. Luxury Assets Portfolio (Media Gallery Section) */}
      <MediaGallery />

      {/* 5. Interactive 3D Assembly & Structure System */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden" id="interactive-3d">
        <div className="absolute inset-0 bg-radial from-slate-900 via-slate-950 to-slate-950 pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* 3D Information Sidebar (5 Cols) */}
            <div className="lg:col-span-5 space-y-6" id="three-d-info-panel">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-bold flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                  <span>Interactive Real-time Core</span>
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                  The PESA System Metaphor
                </h2>
                <div className="w-12 h-[1.5px] bg-blue-500 mt-3"></div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                Interact with our custom simulated 3D geometry core. Just like PESA structures capital investments and compiles global assets, our interactive 3D module lets you visualize, rotate, and interact with mathematical representations of <strong>Structure</strong>, <strong>Expansion</strong>, and <strong>Assembly</strong>.
              </p>

              {/* Specs and guidelines */}
              <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-blue-500 shrink-0" />
                  <p className="text-slate-300 font-mono text-[11px]">Mouse Interaction: Shifts viewport gravity</p>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                  <p className="text-slate-300 font-mono text-[11px]">GPU Optimized WebGL & Particle Buffering</p>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic">
                * Note: Hover, click, and slide parameters are processed locally to maximize performance. Toggle between core modes using the shape controllers.
              </p>
            </div>

            {/* 3D WebGL Canvas (7 Cols) */}
            <div className="lg:col-span-7" id="three-d-canvas-panel">
              <ThreeDShowcase />
            </div>

          </div>

        </div>
      </section>

      {/* 6. Executive Team Profiles Section */}
      <TeamSection />

      {/* 6.5. Governance, Procedures & Commission Section */}
      <OperationsSection />

      {/* 7. Contact Directory & Secure Form Inquiry Section */}
      <ContactSection />

      {/* 8. Corporate Compliance Footer */}
      <Footer />

      {/* 9. Scroll to top utility button */}
      <ScrollToTop />

      {/* 10. Floating Executive AI Chatbot */}
      <ChatbotWidget />

    </div>
  );
}
