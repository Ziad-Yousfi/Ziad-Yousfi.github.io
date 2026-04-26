import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button
        onClick={toggleLanguage}
        className="relative w-14 h-14 flex items-center justify-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front Side (Current Language) */}
        <div className={`absolute inset-0 flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)] [backface-visibility:hidden] transition-all duration-300 group-hover:border-white/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]`}>
          <span className="text-sm font-bold tracking-wider text-white">
            {language.toUpperCase()}
          </span>
        </div>

        {/* Back Side (Next Language) */}
        <div className={`absolute inset-0 flex items-center justify-center rounded-full border-2 border-white/50 bg-white/20 backdrop-blur-md [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
          <span className="text-sm font-bold tracking-wider text-white">
            {language === 'fr' ? 'EN' : 'FR'}
          </span>
        </div>

        {/* Decorative Ring */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </button>
      
      {/* Tooltip */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {language === 'fr' ? 'Switch to English' : 'Passer au Français'}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
