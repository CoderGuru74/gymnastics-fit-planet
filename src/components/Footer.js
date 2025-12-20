import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-2xl font-black uppercase italic">Gymnastics <span className="text-gymRed">Fit Planet</span></h2>
          <p className="text-gray-500 mt-2 text-sm max-w-xs">Building legends since 2023. Join the movement.</p>
        </div>
        
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          <a href="/services" className="hover:text-white transition">Services</a>
          <a href="/register" className="hover:text-white transition">Pricing</a>
          <a href="/about" className="hover:text-white transition">About</a>
        </div>
      </div>

      <div className="h-px bg-gray-800 my-10 max-w-7xl mx-auto"></div>

      {/* Agency Attribution Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-600 font-medium italic">© 2025 Gymnastics Fit Planet. All Rights Reserved.</p>
        
        <div className="flex items-center gap-2 group cursor-default">
          <span className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter">Designed & Developed by</span>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10 group-hover:border-gymYellow transition">
            <span className="text-xs font-black text-white group-hover:text-gymYellow transition">Pixel</span>
            <span className="text-xs font-black text-gymRed">Node</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;