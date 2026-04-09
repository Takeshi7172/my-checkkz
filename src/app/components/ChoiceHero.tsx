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
  <div className="relative flex items-end justify-end w-full h-full">
    {/* Soft circle glow behind phone */}
    <div className="absolute right-0 bottom-0 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-white/10 blur-2xl" />
    <div className="absolute right-2 bottom-0 w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-full bg-[#F4F1FD]/10" />

    {/* Phone image — reduced from 160/220 to 140/180 */}
    <img
      src={img16}
      alt="myCheck App"
      className="relative z-10 w-[140px] md:w-[180px] object-contain drop-shadow-2xl rotate-6"
      style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))' }}
    />

    {/* Floating 25% badge */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute left-0 top-8 bg-[#FFD60A] text-[#1E1B4B] text-xs font-black px-3 py-1.5 rounded-xl shadow-lg z-20"
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

// ---- Business Illustration (floating glass-morphism UI panels) ----
const BusinessIllustration = () => (
  <div className="relative w-full h-full">

    {/* Soft glow behind panels */}
    <div className="absolute right-0 bottom-0 w-[180px] h-[200px] rounded-full bg-[#8F80E2]/15 blur-2xl" />

    {/* Panel 1 — large analytics card, center-right, slight tilt */}
    <div
      className="absolute right-2 bottom-6 w-[160px] bg-white/8 border border-white/15 rounded-2xl shadow-xl backdrop-blur-sm"
      style={{ transform: 'rotate(2deg)' }}
    >
      {/* Panel header */}
      <div className="flex items-center gap-2 px-3 pt-3 pb-2">
        <div className="text-white/70 text-[10px] font-semibold tracking-wide">Аналитика</div>
        {/* Mini chart icon */}
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="ml-auto opacity-60">
          <rect x="0" y="6" width="2" height="4" rx="1" fill="#8F80E2" />
          <rect x="3" y="4" width="2" height="6" rx="1" fill="#8F80E2" />
          <rect x="6" y="2" width="2" height="8" rx="1" fill="#8F80E2" />
          <rect x="9" y="0" width="2" height="10" rx="1" fill="#FFD60A" />
        </svg>
      </div>

      {/* Bar chart */}
      <div className="px-3 pb-2">
        <div className="flex items-end gap-[5px] h-[56px]">
          <div className="flex-1 rounded-t-[3px]" style={{ height: '45%', background: 'rgba(143,128,226,0.35)' }} />
          <div className="flex-1 rounded-t-[3px]" style={{ height: '62%', background: 'rgba(143,128,226,0.50)' }} />
          <div className="flex-1 rounded-t-[3px]" style={{ height: '78%', background: 'rgba(143,128,226,0.70)' }} />
          <div className="flex-1 rounded-t-[3px]" style={{ height: '55%', background: 'rgba(143,128,226,0.50)' }} />
          <div className="flex-1 rounded-t-[3px]" style={{ height: '100%', background: 'rgba(255,214,10,0.85)' }} />
        </div>
        <div className="h-px bg-white/10 mt-1" />
      </div>

      {/* Bottom stat row */}
      <div className="flex justify-between px-3 pb-3">
        <div className="text-center">
          <div className="text-white/40 text-[8px]">Визиты</div>
          <div className="text-white font-bold text-[11px]">4 821</div>
        </div>
        <div className="text-center">
          <div className="text-white/40 text-[8px]">Чеки</div>
          <div className="text-white font-bold text-[11px]">1 340</div>
        </div>
        <div className="text-center">
          <div className="text-white/40 text-[8px]">Выручка</div>
          <div className="text-white font-bold text-[11px]">892K</div>
        </div>
      </div>
    </div>

    {/* Panel 2 — new clients card, top-left, floating */}
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute left-0 top-10 w-[110px] bg-white/8 border border-white/15 rounded-2xl shadow-xl backdrop-blur-sm px-3 py-2.5 z-20"
      style={{ transform: 'rotate(-6deg)' }}
    >
      <div className="text-white/50 text-[9px] font-medium mb-1">Новые клиенты</div>
      <div className="text-white font-black text-lg leading-none">+1 247</div>
      <div className="flex items-center gap-1 mt-1">
        {/* Up arrow */}
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M4 7V1M4 1L1 4M4 1L7 4" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[#4ADE80] text-[9px] font-bold">+18%</span>
      </div>
    </motion.div>

    {/* Panel 3 — voucher card, bottom-left, floating with delay */}
    <motion.div
      animate={{ y: [0, -9, 0], rotate: [3, 5, 3] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      className="absolute left-1 bottom-10 w-[120px] bg-white/8 border border-white/15 rounded-2xl shadow-xl backdrop-blur-sm px-3 py-2.5 z-20"
    >
      <div className="flex items-center gap-1.5 mb-1.5">
        <span className="text-sm">🎟️</span>
        <span className="text-white text-[10px] font-bold">Ваучер активен</span>
      </div>
      <div className="text-white/40 text-[8px] mb-2">Кофейня У Бориса</div>
      {/* Progress bar */}
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-[#8F80E2] to-[#6C5CE7]" style={{ width: '70%' }} />
      </div>
      <div className="text-white/30 text-[8px] mt-1 text-right">70% / 100 баллов</div>
    </motion.div>

    {/* ROI badge — floating, yellow pill */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      className="absolute top-3 right-6 bg-[#FFD60A] text-[#1E1B4B] text-[10px] font-black px-2.5 py-1 rounded-xl shadow-lg z-30"
    >
      ROI +340%
    </motion.div>

    {/* Sparkle accents */}
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      className="absolute top-1 left-14 text-[#8F80E2] text-base z-20"
    >
      ✦
    </motion.div>
    <motion.div
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute bottom-4 right-1 text-[#FFD60A] text-xs opacity-60 z-20"
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
      min-h-[520px]
      rounded-[28px] md:rounded-[36px]
      p-8 md:p-10
      ${gradient} ${border ?? ''}
      shadow-2xl hover:shadow-[0_32px_64px_rgba(0,0,0,0.4)]
      transition-shadow duration-300
      cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40
      flex flex-col
    `}
  >
    {/* Arrow top-right */}
    <div className="absolute top-6 right-6 w-10 h-10 bg-white/15 rounded-full flex items-center justify-center z-10">
      <ChevronRight className="w-5 h-5 text-white" />
    </div>

    {/* Text block — top-left, constrained to left 55% so illustration never overlaps */}
    <div className="relative z-10 max-w-[55%] md:max-w-[52%]">
      <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
        {title}
      </h2>
      <p className="text-sm md:text-base text-white/70 leading-relaxed">
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
    <section className="min-h-screen bg-[#1E1B4B] flex flex-col overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 md:px-[132px] pt-6 md:pt-8">
        <Logo />
        <MiniLanguageSwitcher />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-[132px] py-12 gap-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-white/50 text-xs md:text-sm font-semibold uppercase tracking-[0.2em]"
        >
          {t('choice_for_whom')}
        </motion.p>

        <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center md:items-stretch">
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
            gradient="bg-gradient-to-br from-[#12103A] via-[#1E1B4B] to-[#0f0c2e]"
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
