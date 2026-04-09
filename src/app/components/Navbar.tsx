import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronLeft } from 'lucide-react';
import svgPaths from "@/imports/svg-by6trk53vw";

const Logo = () => (
  <div className="h-[28px] relative shrink-0 w-[131px]" data-name="Logo Light">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 28.0001">
      <g id="Logo Light">
        <path d={svgPaths.p448e700} fill="url(#paint0_linear_navbar)" id="Union" />
        <path d={svgPaths.p1c4a4400} fill="url(#paint1_linear_navbar)" id="Union_2" />
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_navbar" x1="40.7642" x2="0.0513522" y1="6.29987" y2="23.919">
          <stop stopColor="#FFE666" />
          <stop offset="1" stopColor="#FFBB00" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_navbar" x1="42.8865" x2="132.318" y1="21.7781" y2="11.707">
          <stop stopColor="#653B9B" />
          <stop offset="1" stopColor="#9D61E2" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#f6f6f6] flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-medium text-[#3a3a3c] hover:bg-gray-100 transition-colors"
      >
        <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center border border-gray-200">
           {language === 'ru' ? '🇷🇺' : '🇰🇿'}
        </span>
        <span className="uppercase">{language === 'ru' ? 'РУС' : 'ҚАЗ'}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            key="desktop-lang"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-24 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
          >
            <button 
              onClick={() => { setLanguage('kk'); setIsOpen(false); }}
              className="w-full px-4 py-2 text-left text-xs hover:bg-gray-50 flex items-center gap-2"
            >
              <span>🇰🇿</span> ҚАЗ
            </button>
            <button 
              onClick={() => { setLanguage('ru'); setIsOpen(false); }}
              className="w-full px-4 py-2 text-left text-xs hover:bg-gray-50 flex items-center gap-2"
            >
              <span>🇷🇺</span> РУС
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface NavbarProps {
  onBack?: () => void;
  onNavigateToBusiness?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBack, onNavigateToBusiness }) => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t('nav_how'), href: '#how' },
    { label: t('nav_raffles'), href: '#raffles' },
    { label: t('nav_winners'), href: '#winners' },
    { label: t('nav_blog'), href: '#blog' },
    { label: t('nav_questions'), href: '#faq' },
    { label: t('nav_partner'), href: '#partners' },
  ];

  return (
    <>
      <nav className="w-full bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-gray-100/50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[132px] h-[72px] md:h-[88px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-1 text-sm font-medium text-[#8F80E2] hover:text-[#7a6bc9] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                {t('nav_back')}
              </button>
            )}
            <Logo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href === '#partners' ? (
                onNavigateToBusiness ? (
                  <button
                    key={link.href}
                    onClick={onNavigateToBusiness}
                    className="bg-[#8F80E2] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#7a6bc9] transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="bg-[#8F80E2] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#7a6bc9] transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold text-[#0f0f0f] hover:text-[#8F80E2] transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Burger */}
          <button 
            className="md:hidden p-2 text-[#0f0f0f]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            key="mobile-nav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col"
          >
            <div className="p-4 flex items-center justify-between border-b border-gray-100">
              <Logo />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#0f0f0f]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
              {onBack && (
                <button
                  onClick={() => { setIsMobileMenuOpen(false); onBack(); }}
                  className="flex items-center gap-1 text-sm font-medium text-[#8F80E2] hover:text-[#7a6bc9] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  {t('nav_back')}
                </button>
              )}
              {navLinks.map((link) =>
                link.href === '#partners' && onNavigateToBusiness ? (
                  <button
                    key={link.href}
                    onClick={() => { setIsMobileMenuOpen(false); onNavigateToBusiness(); }}
                    className="text-xl font-bold text-[#0f0f0f] hover:text-[#653B9B]"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold text-[#0f0f0f] hover:text-[#653B9B]"
                  >
                    {link.label}
                  </a>
                )
              )}

              <div className="mt-8 border-t border-gray-100 pt-8 w-full flex justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
