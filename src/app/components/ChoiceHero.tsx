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

// ---- App Illustration — phone fills container, bleeds off bottom naturally ----
const AppIllustration = () => (
  <div className="relative w-full h-full flex items-end justify-center">
    <img
      src={img16}
      alt="myCheck App"
      className="relative z-10 h-[90%] w-auto object-contain rotate-[4deg] origin-bottom"
      style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.6)) drop-shadow(0 8px 16px rgba(0,0,0,0.4))' }}
    />
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[12%] left-[4%] bg-[#FFD60A] text-[#1E1B4B] text-[13px] font-black px-3 py-2 rounded-2xl z-20 whitespace-nowrap"
      style={{ boxShadow: '0 8px 24px rgba(255,214,10,0.4)' }}
    >
      -25% скидка
    </motion.div>
  </div>
);

// ---- Dashboard Illustration — premium SVG analytics UI ----
const DashboardIllustration = () => (
  <div className="relative w-full h-full flex items-end justify-center pb-2">

    {/* Premium analytics card SVG */}
    <svg
      viewBox="0 0 280 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10 w-[92%] h-auto"
      style={{ filter: 'drop-shadow(0 20px 48px rgba(0,0,0,0.65))' }}
    >
      {/* Card background */}
      <rect width="280" height="340" rx="20" fill="#0D1117"/>
      <rect width="280" height="340" rx="20" fill="url(#cardGrad)" fillOpacity="0.6"/>
      <rect x="0.5" y="0.5" width="279" height="339" rx="19.5" stroke="white" strokeOpacity="0.08"/>

      {/* Header */}
      <rect width="280" height="44" rx="20" fill="white" fillOpacity="0.04"/>
      <rect y="24" width="280" height="20" fill="white" fillOpacity="0.04"/>
      <circle cx="16" cy="22" r="5" fill="#FF5F57"/>
      <circle cx="30" cy="22" r="5" fill="#FFBD2E"/>
      <circle cx="44" cy="22" r="5" fill="#28C840"/>
      <rect x="60" y="15" width="120" height="14" rx="7" fill="white" fillOpacity="0.05"/>
      <text x="75" y="25" fill="white" fillOpacity="0.3" fontSize="7" fontFamily="system-ui">mycheck.kz / analytics</text>

      {/* KPI row */}
      <rect x="10" y="52" width="80" height="52" rx="10" fill="white" fillOpacity="0.05"/>
      <text x="20" y="68" fill="white" fillOpacity="0.45" fontSize="8" fontFamily="system-ui">Выручка</text>
      <text x="20" y="84" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">₸2.4М</text>
      <rect x="20" y="88" width="36" height="10" rx="4" fill="#4ADE80" fillOpacity="0.15"/>
      <text x="22" y="96" fill="#4ADE80" fontSize="7" fontWeight="700" fontFamily="system-ui">+18% ↑</text>

      <rect x="100" y="52" width="80" height="52" rx="10" fill="white" fillOpacity="0.05"/>
      <text x="110" y="68" fill="white" fillOpacity="0.45" fontSize="8" fontFamily="system-ui">Клиентов</text>
      <text x="110" y="84" fill="white" fontSize="14" fontWeight="800" fontFamily="system-ui">1,248</text>
      <rect x="110" y="88" width="36" height="10" rx="4" fill="#4ADE80" fillOpacity="0.15"/>
      <text x="112" y="96" fill="#4ADE80" fontSize="7" fontWeight="700" fontFamily="system-ui">+34% ↑</text>

      <rect x="190" y="52" width="80" height="52" rx="10" fill="#FFD60A" fillOpacity="0.08"/>
      <rect x="190.5" y="52.5" width="79" height="51" rx="9.5" stroke="#FFD60A" strokeOpacity="0.2"/>
      <text x="200" y="68" fill="white" fillOpacity="0.45" fontSize="8" fontFamily="system-ui">ROI</text>
      <text x="200" y="84" fill="#FFD60A" fontSize="14" fontWeight="800" fontFamily="system-ui">+340%</text>
      <circle cx="204" cy="94" r="3" fill="#4ADE80"/>
      <text x="210" y="97" fill="#4ADE80" fontSize="6.5" fontFamily="system-ui">live</text>

      {/* Chart section */}
      <rect x="10" y="114" width="260" height="130" rx="10" fill="white" fillOpacity="0.03"/>
      <text x="20" y="130" fill="white" fillOpacity="0.4" fontSize="8" fontFamily="system-ui">Продажи за неделю</text>

      {/* Bar chart — 7 bars */}
      {([
        [20, 68], [56, 88], [92, 52], [128, 100], [164, 74], [200, 114], [236, 86]
      ] as [number, number][]).map(([x, h], i) => (
        <g key={i}>
          <rect
            x={x} y={232 - h} width="18" height={h} rx="4"
            fill={i === 5 ? '#FFD60A' : 'rgba(143,128,226,0.35)'}
          />
          {i === 5 && (
            <rect x={x} y={232 - h} width="18" height="4" rx="4" fill="#FFD60A" fillOpacity="0.6"/>
          )}
        </g>
      ))}

      {/* Chart baseline */}
      <line x1="10" y1="232" x2="270" y2="232" stroke="white" strokeOpacity="0.06"/>
      {(['Пн','Вт','Ср','Чт','Пт','Сб','Вс'] as string[]).map((d, i) => (
        <text key={i} x={29 + i * 36} y={242} fill="white" fillOpacity="0.2" fontSize="6.5" textAnchor="middle" fontFamily="system-ui">{d}</text>
      ))}

      {/* Recent transactions */}
      <text x="10" y="262" fill="white" fillOpacity="0.35" fontSize="7.5" fontFamily="system-ui">Последние транзакции</text>

      <rect x="10" y="268" width="260" height="22" rx="6" fill="white" fillOpacity="0.04"/>
      <rect x="16" y="274" width="8" height="8" rx="2" fill="#8F80E2" fillOpacity="0.5"/>
      <text x="30" y="282" fill="white" fillOpacity="0.7" fontSize="7.5" fontFamily="system-ui">Magnum • Абая</text>
      <text x="234" y="282" fill="#4ADE80" fontSize="7.5" fontWeight="700" fontFamily="system-ui">+₸280</text>

      <rect x="10" y="294" width="260" height="22" rx="6" fill="white" fillOpacity="0.03"/>
      <rect x="16" y="300" width="8" height="8" rx="2" fill="#FFD60A" fillOpacity="0.4"/>
      <text x="30" y="308" fill="white" fillOpacity="0.7" fontSize="7.5" fontFamily="system-ui">Sulpak • Достык</text>
      <text x="224" y="308" fill="#4ADE80" fontSize="7.5" fontWeight="700" fontFamily="system-ui">+₸1,200</text>

      <rect x="10" y="320" width="260" height="12" rx="6" fill="white" fillOpacity="0.02"/>

      <defs>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="280" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1a1f35"/>
          <stop offset="1" stopColor="#0a0d1a"/>
        </linearGradient>
      </defs>
    </svg>

    {/* Single floating chip */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute top-[6%] left-[2%] bg-black/50 border border-white/[0.12] backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1.5 rounded-full z-20 flex items-center gap-1.5 whitespace-nowrap"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] inline-block animate-pulse" />
      Новый партнёр
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
