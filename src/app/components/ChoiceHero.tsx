import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import svgPaths from '@/imports/svg-by6trk53vw';
import img16 from '@/assets/1fbf9ff2ab7596cc85d05cb6c6b9072ec853a197.png';
import imgDashboard from '@/assets/dashboard-mockup.png';

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

// ---- App Illustration — phone fills container, bleeds off bottom naturally ----
const AppIllustration = () => (
  <div className="relative w-full h-full flex items-end justify-center pb-0">
    {/* Subtle circular ambient — NO blur-2xl/3xl per DESIGN.md */}
    <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[180px] h-[180px] rounded-full bg-white/[0.04]" />

    {/* Phone — fills height, slight rotation */}
    <img
      src={img16}
      alt="myCheck App"
      className="relative z-10 h-[90%] w-auto object-contain rotate-[4deg] origin-bottom"
      style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.6)) drop-shadow(0 8px 16px rgba(0,0,0,0.4))' }}
    />

    {/* -25% badge — top-left of illustration zone */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[8%] left-[2%] bg-[#FFD60A] text-[#1E1B4B] text-[13px] font-black px-3 py-2 rounded-2xl shadow-xl z-20 whitespace-nowrap"
      style={{ boxShadow: '0 8px 24px rgba(255,214,10,0.35)' }}
    >
      -25% скидка
    </motion.div>

    {/* Cashback badge — right side, mid-height */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      className="absolute top-[42%] right-[2%] bg-[#34D399] text-[#0A4B2D] text-[11px] font-black px-3 py-1.5 rounded-xl shadow-lg z-20 whitespace-nowrap"
      style={{ boxShadow: '0 6px 20px rgba(52,211,153,0.3)' }}
    >
      Cashback ₸840
    </motion.div>

    {/* Sparkles */}
    <motion.div
      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2.8, repeat: Infinity }}
      className="absolute top-[15%] right-[10%] text-[#FFD60A] text-lg z-20"
    >✦</motion.div>
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.7, 0.2] }}
      transition={{ duration: 3.8, repeat: Infinity, delay: 1.4 }}
      className="absolute top-[55%] left-[8%] text-[#FFD60A] text-sm z-20"
    >✦</motion.div>
  </div>
);

// ---- Dashboard Illustration — laptop fills container ----
const DashboardIllustration = () => (
  <div className="relative w-full h-full flex items-end justify-center pb-0">
    {/* Subtle ambient — NO blur */}
    <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[200px] h-[120px] rounded-full bg-white/[0.03]" />

    {/* Dashboard — fills most of container */}
    <img
      src={imgDashboard}
      alt="myCheck Analytics"
      className="relative z-10 w-[95%] object-contain rounded-2xl"
      style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.7)) drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }}
    />

    {/* Новый партнёр chip — top area */}
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      className="absolute top-[5%] left-[3%] bg-black/40 border border-white/[0.15] backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1.5 rounded-full z-20 flex items-center gap-1.5 whitespace-nowrap"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] inline-block animate-pulse" />
      Новый партнёр
    </motion.div>

    {/* ROI chip */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      className="absolute top-[22%] right-[3%] bg-[#FFD60A]/[0.12] border border-[#FFD60A]/30 text-[#FFD60A] text-[11px] font-bold px-3 py-1.5 rounded-full z-20 whitespace-nowrap"
    >
      ROI +340%
    </motion.div>

    {/* Sparkle */}
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      className="absolute top-[10%] right-[12%] text-[#FFD60A] text-base z-20"
    >✦</motion.div>
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
  badgeLabel: string;
  ctaLabel: string;
  ctaVariant: 'yellow' | 'ghost';
}

const ChoiceCard: React.FC<ChoiceCardProps> = ({
  title,
  subtitle,
  gradient,
  border,
  onClick,
  delay,
  illustration,
  badgeLabel,
  ctaLabel,
  ctaVariant,
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
    {/* Top edge highlight */}
    <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

    {/* Illustration — ABSOLUTE bottom-right, fills 55% width and 75% height */}
    <div className="absolute right-0 bottom-0 w-[55%] h-[75%] pointer-events-none z-0">
      {illustration}
    </div>

    {/* Content — constrained to left 50%, full height flex column */}
    <div className="relative z-10 flex flex-col h-full max-w-[50%]">
      {/* Top row: badge + arrow */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/[0.12] text-white/60 border border-white/[0.08]">
          {badgeLabel}
        </span>
        <div className="w-8 h-8 bg-white/[0.12] rounded-full flex items-center justify-center border border-white/[0.08]">
          <ChevronRight className="w-4 h-4 text-white/60" />
        </div>
      </div>

      {/* Title + subtitle */}
      <div className="mt-2">
        <h2
          className="text-[40px] md:text-[52px] font-black text-white leading-[1.05] tracking-tight mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h2>
        <p
          className="text-[15px] md:text-[16px] text-white/60 leading-relaxed"
          style={{ fontFamily: "'Figtree', sans-serif" }}
        >
          {subtitle}
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* CTA */}
      <div className="pb-2">
        {ctaVariant === 'yellow' ? (
          <div className="inline-flex items-center gap-2 bg-[#FFD60A] text-[#1E1B4B] font-black text-[13px] px-5 py-3 rounded-[14px] shadow-lg shadow-yellow-500/20">
            {ctaLabel} <ChevronRight className="w-4 h-4" />
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 bg-white/[0.1] border border-white/[0.15] text-white font-semibold text-[13px] px-5 py-3 rounded-[14px]">
            {ctaLabel} <ChevronRight className="w-4 h-4" />
          </div>
        )}
      </div>
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
              gradient="bg-gradient-to-br from-[#5B50CC] via-[#7162D6] to-[#8B4DC0]"
              onClick={onSelectApp}
              delay={0.15}
              illustration={<AppIllustration />}
              badgeLabel="Для покупателей"
              ctaLabel="Скачать приложение"
              ctaVariant="yellow"
            />
            <ChoiceCard
              title={t('choice_business_title')}
              subtitle={t('choice_business_subtitle')}
              gradient="bg-gradient-to-br from-[#0A2540] via-[#112240] to-[#0A1628]"
              border="border border-white/[0.08]"
              onClick={onSelectBusiness}
              delay={0.3}
              illustration={<DashboardIllustration />}
              badgeLabel="Для бизнеса"
              ctaLabel="Стать партнёром"
              ctaVariant="ghost"
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
