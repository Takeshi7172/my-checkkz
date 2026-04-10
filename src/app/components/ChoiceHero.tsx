import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import svgPaths from '@/imports/svg-by6trk53vw';
import img16 from '@/assets/1fbf9ff2ab7596cc85d05cb6c6b9072ec853a197.png';

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
  <div className="relative flex items-end justify-center w-full h-full pb-4">
    {/* Clean ambient glow — no blur to avoid streaks */}
    <div className="absolute right-4 bottom-4 w-[200px] h-[200px] rounded-full bg-white/6" />

    {/* Phone image — properly sized */}
    <img
      src={img16}
      alt="myCheck App"
      className="relative z-10 w-[150px] md:w-[185px] object-contain drop-shadow-2xl rotate-3"
      style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}
    />

    {/* Floating -25% badge */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute left-0 top-8 bg-[#FFD60A] text-[#1E1B4B] text-sm font-black px-3 py-2 rounded-xl shadow-lg z-20"
    >
      -25%
    </motion.div>

    {/* Sparkle */}
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      className="absolute top-2 right-2 text-[#FFD60A] text-xl z-20"
    >
      ✦
    </motion.div>
  </div>
);

// ---- Dashboard Illustration (inline mockup) ----
const DashboardIllustration = () => (
  <div className="relative flex items-end justify-center w-full h-full pb-4 pr-2">
    {/* Dashboard card mockup */}
    <div className="relative z-10 w-[200px] md:w-[240px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3 shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-[8px] font-bold text-white/80">myCheck Analytics</div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFD60A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
        </div>
      </div>

      {/* Stat cards row */}
      <div className="grid grid-cols-2 gap-1.5 mb-3">
        <div className="bg-white/10 rounded-lg p-2">
          <div className="text-[7px] text-white/50 mb-0.5">Выручка</div>
          <div className="text-[11px] font-black text-white">₸2.4M</div>
          <div className="text-[7px] text-green-400">+18%</div>
        </div>
        <div className="bg-white/10 rounded-lg p-2">
          <div className="text-[7px] text-white/50 mb-0.5">Клиентов</div>
          <div className="text-[11px] font-black text-white">1,248</div>
          <div className="text-[7px] text-green-400">+34%</div>
        </div>
      </div>

      {/* Mini bar chart */}
      <div className="bg-white/[0.08] rounded-lg p-2 mb-2">
        <div className="text-[7px] text-white/50 mb-2">Продажи за неделю</div>
        <div className="flex items-end gap-1 h-[32px]">
          {[60, 80, 45, 90, 70, 95, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === 5 ? '#FFD60A' : 'rgba(255,255,255,0.25)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <div className="text-[7px] text-white/40">Ср. чек: ₸4,200</div>
        <div className="bg-[#FFD60A]/20 text-[#FFD60A] text-[7px] font-bold px-2 py-0.5 rounded-full">
          ROI +340%
        </div>
      </div>
    </div>

    {/* Floating "Новый партнёр" chip */}
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      className="absolute left-0 top-12 bg-white/15 border border-white/25 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1.5 rounded-full z-20 flex items-center gap-1.5"
    >
      <span className="text-green-400">✓</span> Новый партнёр
    </motion.div>

    {/* Sparkle */}
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
      <h2
        className="text-4xl md:text-5xl font-black text-white leading-tight mb-3"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      <p className="text-base md:text-lg text-white/65 leading-relaxed">
        {subtitle}
      </p>
    </div>

    {/* Illustration — absolute, right half only, bottom-aligned, no text overlap */}
    <div className="absolute right-0 bottom-0 w-[52%] md:w-[50%] h-[90%] pointer-events-none overflow-visible">
      {illustration}
    </div>

    {/* Top edge highlight */}
    <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
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
      style={{
        background: 'radial-gradient(ellipse at 20% 60%, #3D2E8A 0%, #241F6B 35%, #130F3A 70%, #0A0820 100%)',
        position: 'relative'
      }}
    >
      {/* Grain texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative z-[2] flex flex-col flex-1">
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
          className="text-white/30 text-[10px] md:text-xs font-bold uppercase tracking-[0.35em]"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.35em' }}
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
            border="border border-[#8F80E2]/50"
            onClick={onSelectBusiness}
            delay={0.3}
            illustration={<DashboardIllustration />}
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
      </div>
    </section>
  );
};
