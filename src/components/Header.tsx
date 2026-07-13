import { useState } from "react";
import { Menu, X, Shield, Globe, ArrowUpRight, ChevronDown } from "lucide-react";

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/system", label: "PESA System" },
    { path: "/team", label: "Executive Team" },
    { path: "/offices", label: "Offices" },
    { path: "/careers", label: "Careers" },
    { path: "/resources", label: "Resources" },
    { path: "/contact", label: "Contact" }
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" id="app-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Signature */}
          <div 
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 cursor-pointer select-none group"
            id="brand-logo-trigger"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0A2540] group-hover:bg-blue-600 flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm border border-slate-700/10 transition-colors">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-base sm:text-lg font-extrabold tracking-tight text-slate-900 uppercase">
                PESA Consulting
              </span>
              <span className="text-[9px] text-slate-500 font-mono tracking-widest uppercase -mt-1 font-semibold">
                Group & Global Capital
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== "/" && currentPath.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`text-[10px] uppercase font-mono tracking-widest transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                      : "text-slate-600 hover:text-slate-900 font-medium hover:border-b-2 hover:border-slate-300 pb-1"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Global indicator */}
          <div className="hidden xl:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded text-[9px] font-mono font-medium text-slate-600">
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>Dallas // Kinshasa Hubs</span>
            </div>
            
            <button
              onClick={() => handleNavClick("/contact")}
              id="header-cta-btn"
              className="px-4 py-2.5 text-[10px] uppercase font-mono tracking-widest bg-[#0A2540] text-white hover:bg-slate-800 rounded font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow"
            >
              <span>Connect Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 p-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300" id="mobile-navigation-drawer">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== "/" && currentPath.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  id={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`text-left px-4 py-2.5 rounded text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 px-4 py-1 text-xs text-slate-600 font-mono font-medium">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>Direct Wire-Only Channels Active</span>
            </div>
            <button
              onClick={() => handleNavClick("/contact")}
              id="mobile-header-cta-btn"
              className="w-full text-center py-3 text-xs uppercase font-mono tracking-widest bg-[#0A2540] text-white hover:bg-slate-800 rounded font-semibold transition-colors cursor-pointer"
            >
              Inquire Securely
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
