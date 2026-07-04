import { Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540] text-white py-12 border-t border-slate-800" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Logo brand / design */}
        <div className="flex flex-col items-center justify-center gap-1.5">
          <div className="w-9 h-9 rounded bg-blue-600 flex items-center justify-center text-white font-sans font-extrabold text-base shadow shadow-blue-500/20">
            P
          </div>
          <span className="font-sans text-sm tracking-wider uppercase text-blue-300 font-bold">
            Pesa Group
          </span>
          <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
            PESA Consulting Group LLC
          </p>
        </div>

        {/* Global disclaimer on corporate operations */}
        <p className="text-slate-400 text-[10px] leading-relaxed max-w-2xl mx-auto font-sans">
          PESA Consulting Group LLC is a private international advisory firm and asset broker. Real estate services are operated in compliance with Texas Real Estate Commission rules. Educational visa consulting services do not constitute official immigration legal advice. Critical minerals contracts adhere strictly to sustainable local mining protocols.
        </p>

        {/* Development attribution + copyright block */}
        <div className="pt-8 border-t border-slate-800 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5 text-blue-500" />
            <span>© {currentYear} Pesa Group. All Rights Reserved.</span>
          </div>

          <p className="text-slate-300 text-xs font-mono">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 underline transition-colors font-bold">iWebNext</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
