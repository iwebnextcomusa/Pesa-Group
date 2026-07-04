import { useState } from "react";
import { Menu, X, Shield, Globe, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Executive Desk" },
    { id: "services", label: "Services & Pillars" },
    { id: "assets", label: "Premium Assets" },
    { id: "interactive-3d", label: "PESA System" },
    { id: "team", label: "Executive Team" },
    { id: "operations", label: "Governance & Ops" },
    { id: "contact", label: "Global Offices" }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200" id="app-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Signature */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0A2540] flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm border border-slate-700/10">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-lg font-extrabold tracking-tight text-slate-900 uppercase">
                Pesa Group
              </span>
              <span className="text-[9px] text-slate-500 font-mono tracking-widest uppercase -mt-1 font-semibold">
                Consulting & Assets
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-${item.id}`}
                className={`text-xs uppercase font-mono tracking-widest transition-all duration-300 ${
                  activeTab === item.id 
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "text-slate-600 hover:text-slate-900 font-medium"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTA & Global indicator */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] text-slate-600 font-mono font-medium">
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>US-DRC Direct</span>
            </div>
            
            <button
              onClick={() => handleNavClick("contact")}
              id="header-cta-btn"
              className="px-5 py-2.5 text-xs uppercase font-mono tracking-widest bg-[#0A2540] text-white hover:bg-slate-800 rounded font-semibold transition-all duration-300 flex items-center gap-2 hover-blue-glow"
            >
              <span>Secure Advisory</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 transition-colors"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300" id="mobile-navigation-drawer">
          <div className="flex flex-col gap-2.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`mobile-nav-${item.id}`}
                className={`text-left px-4 py-2.5 rounded text-xs uppercase font-mono tracking-wider transition-colors ${
                  activeTab === item.id
                    ? "bg-slate-55 bg-blue-50 text-blue-600 font-semibold"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 px-4 py-2 text-xs text-slate-600 font-mono font-medium">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Dallas // Kinshasa Channels Open</span>
            </div>
            <button
              onClick={() => handleNavClick("contact")}
              id="mobile-header-cta-btn"
              className="w-full text-center py-3 text-xs uppercase font-mono tracking-widest bg-[#0A2540] text-white hover:bg-slate-800 rounded font-semibold transition-colors"
            >
              Secure Advisory Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
