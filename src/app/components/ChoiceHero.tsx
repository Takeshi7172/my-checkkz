import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import svgPaths from '@/imports/svg-by6trk53vw';
import img16 from '@/assets/1fbf9ff2ab7596cc85d05cb6c6b9072ec853a197.png';
import imgIpad from '@/assets/4732892f9b5bd3e49dcc0003fbf14632a93664a5.png';

// ---- Logo (inlined from Navbar) ----
const Logo = () => (
  <div className="h-[32px] relative shrink-0 w-[151px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 28.0001">
      <g id="Logo Light Choice">
        <path d={svgPaths.p448e700} fill="url(#paint0_linear_choice)" />
        <path d={svgPaths.p1c4a4400} fill="url(#paint1_linear_choice)" />
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_choice" x1="40.7642" x2="0.0513522" y1="6.29987" y2="23.919">
          <stop stopColor="#FFE666" />
          <stop offset="1" stopColor="#FFBB00" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_choice" x1="42.8865" x2="132.318" y1="21.7781" y2="11.707">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#e0d4ff" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// ---- Mini Language Switcher ----
const MiniLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 transition-colors bg-white/10"
      >
        <span>{language === 'ru' ? '🇷🇺' : '🇰🇿'}</span>
        <span className="uppercase">{language === 'ru' ? 'РУС' : 'ҚАЗ'}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-[#1E1B4B] rounded-xl shadow-lg border border-white/10 overflow-hidden z-50">
          <button
            onClick={() => { setLanguage('kk'); setIsOpen(false); }}
            className="w-full px-4 py-2 text-left text-xs text-white/80 hover:bg-white/10 flex items-center gap-2"
          >
            <span>🇰🇿</span> ҚАЗ
          </button>
          <button
            onClick={() => { setLanguage('ru'); setIsOpen(false); }}
            className="w-full px-4 py-2 text-left text-xs text-white/80 hover:bg-white/10 flex items-center gap-2"
          >
            <span>🇷🇺</span> РУС
          </button>
        </div>
      )}
    </div>
  );
};

// ---- App Illustration (real phone image) ----
const AppIllustration = () => (
  <div className="relative flex items-end justify-end w-full h-full">
    {/* Soft circle glow behind phone — more visible */}
    <div className="absolute right-0 bottom-0 w-[240px] h-[240px] rounded-full bg-white/15 blur-2xl" />
    <div className="absolute right-2 bottom-0 w-[180px] h-[180px] rounded-full bg-[#F4F1FD]/10" />

    {/* Phone image — slightly bigger */}
    <img
      src={img16}
      alt="myCheck App"
      className="relative z-10 w-[160px] md:w-[200px] object-contain drop-shadow-2xl rotate-6"
      style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))' }}
    />

    {/* Floating 25% badge — more prominent */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute left-0 top-8 bg-[#FFD60A] text-[#1E1B4B] text-sm font-black px-3 py-2 rounded-xl shadow-lg z-20"
    >
      -25%
    </motion.div>

    {/* Floating sparkle */}
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      className="absolute top-2 right-2 text-[#FFD60A] text-xl z-20"
    >
      ✦
    </motion.div>
  </div>
);

// ---- Business Illustration (real iPad image) ----
const BusinessIllustration = () => (
  <div className="relative flex items-end justify-end w-full h-full">
    {/* Soft circle glow behind iPad */}
    <div className="absolute right-0 bottom-0 w-[240px] h-[240px] rounded-full bg-white/15 blur-2xl" />
    <div className="absolute right-2 bottom-0 w-[180px] h-[180px] rounded-full bg-[#F4F1FD]/10" />

    {/* iPad image */}
    <img
      src={imgIpad}
      alt="myCheck Business"
      className="relative z-10 w-[170px] md:w-[210px] object-contain drop-shadow-2xl"
      style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))', rotate: '-6deg' }}
    />

    {/* Floating ROI badge */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute left-0 top-8 bg-[#FFD60A] text-[#1E1B4B] text-sm font-black px-3 py-2 rounded-xl shadow-lg z-20"
    >
      ROI +340%
    </motion.div>

    {/* Floating "Новый партнёр" chip */}
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      className="absolute left-2 bottom-16 bg-white/15 border border-white/25 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1.5 rounded-full z-20 flex items-center gap-1.5"
    >
      <span className="text-green-400">✓</span> Новый партнёр
    </motion.div>

    {/* Floating sparkle */}
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      className="absolute top-2 right-2 text-[#FFD60A] text-xl z-20"
    >
      ✦
    </motion.div>
  </div>
);

// ---- Card props ----
interface ChoiceCardProps {
  title: string;
  subtitle: string;
  gradient: string;
  border?: string;
  onClick: () => void;
  delay: number;
  illustration: React.ReactNode;
}

const ChoiceCard: React.FC<ChoiceCardProps> = ({
  title,
  subtitle,
  gradient,
  border,
  onClick,
  delay,
  illustration,
}) => (
  <motion.button
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    whileHover={{ scale: 1.02, y: -6 }}
    onClick={onClick}
    className={`
      relative overflow-hidden text-left
      w-full max-w-[560px]
      flex-1 min-h-[480px] md:min-h-0 md:h-[calc(100vh-160px)] max-h-[760px]
      rounded-[28px] md:rounded-[36px]
      p-8 md:p-10
      ${gradient} ${border ?? ''}
      shadow-2xl hover:shadow-[0_32px_64px_rgba(0,0,0,0.4)]
      transition-shadow duration-300
      cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40
      flex flex-col
    `}
  >
    {/* Arrow top-right — bigger circle */}
    <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center z-10">
      <ChevronRight className="w-5 h-5 text-white" />
    </div>

    {/* Text block — top-left, constrained to left 55% so illustration never overlaps */}
    <div className="relative z-10 max-w-[55%] md:max-w-[52%]">
      <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
        {title}
      </h2>
      <p className="text-base md:text-lg text-white/65 leading-relaxed">
        {subtitle}
      </p>
    </div>

    {/* Illustration — absolute, right half only, bottom-aligned, no text overlap */}
    <div className="absolute right-0 bottom-0 w-[48%] md:w-[46%] h-[85%] pointer-events-none">
      {illustration}
    </div>
  </motion.button>
);

// ---- Main component ----
interface ChoiceHeroProps {
  onSelectApp: () => void;
  onSelectBusiness: () => void;
}

export const ChoiceHero: React.FC<ChoiceHeroProps> = ({ onSelectApp, onSelectBusiness }) => {
  const { t } = useLanguage();

  return (
    <section
      className="min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 30% 50%, #2D2775 0%, #1E1B4B 60%)' }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-[132px] pt-6 md:pt-8">
        <Logo />
        <MiniLanguageSwitcher />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 py-4 gap-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-white/40 text-xs md:text-sm font-semibold uppercase tracking-[0.2em]"
        >
          {t('choice_for_whom')}
        </motion.p>

        <div className="flex flex-col md:flex-row gap-5 md:gap-6 w-full max-w-[1200px] mx-auto justify-center items-center md:items-stretch">
          <ChoiceCard
            title={t('choice_app_title')}
            subtitle={t('choice_app_subtitle')}
            gradient="bg-gradient-to-br from-[#7C6FD8] via-[#8F80E2] to-[#653B9B]"
            onClick={onSelectApp}
            delay={0.15}
            illustration={<AppIllustration />}
          />
          <ChoiceCard
            title={t('choice_business_title')}
            subtitle={t('choice_business_subtitle')}
            gradient="bg-gradient-to-br from-[#1A1650] via-[#211D5E] to-[#160F3E]"
            border="border border-[#8F80E2]/30"
            onClick={onSelectBusiness}
            delay={0.3}
            illustration={<BusinessIllustration />}
          />
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center gap-2 text-white/30 text-xs"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
