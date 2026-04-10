import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import svgPaths from '@/imports/svg-by6trk53vw';

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

// ---- App Illustration — iPhone SVG mockup ----
const AppIllustration = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    {/* Ambient glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[180px] h-[180px] rounded-full bg-purple-400/20 blur-3xl" />
    </div>

    {/* Phone SVG frame */}
    <div className="relative z-10" style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))' }}>
      <svg width="160" height="320" viewBox="0 0 160 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Phone body */}
        <rect x="1" y="1" width="158" height="318" rx="36" fill="#0A0A14" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.15"/>
        {/* Screen area */}
        <rect x="8" y="12" width="144" height="296" rx="30" fill="#0F0E1A"/>
        {/* Dynamic island */}
        <rect x="54" y="18" width="52" height="14" rx="7" fill="#000"/>
        {/* Side button */}
        <rect x="157" y="80" width="4" height="40" rx="2" fill="#ffffff" fillOpacity="0.2"/>
        <rect x="-1" y="100" width="4" height="28" rx="2" fill="#ffffff" fillOpacity="0.2"/>
        <rect x="-1" y="136" width="4" height="28" rx="2" fill="#ffffff" fillOpacity="0.2"/>

        {/* App content — status bar */}
        <text x="16" y="46" fill="white" fillOpacity="0.6" fontSize="8" fontFamily="system-ui">9:41</text>
        <rect x="130" y="40" width="18" height="8" rx="2" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.4"/>
        <rect x="131" y="41" width="13" height="6" rx="1" fill="#4ADE80"/>
        <rect x="148" y="42" width="2" height="4" rx="1" fill="white" fillOpacity="0.4"/>

        {/* App header */}
        <text x="16" y="72" fill="white" fontSize="11" fontWeight="bold" fontFamily="system-ui">myCheck</text>
        <text x="16" y="84" fill="white" fillOpacity="0.5" fontSize="7" fontFamily="system-ui">Привет, Алибек 👋</text>

        {/* Balance card */}
        <rect x="12" y="92" width="136" height="60" rx="14" fill="url(#balanceGrad)"/>
        <text x="22" y="110" fill="white" fillOpacity="0.7" fontSize="7" fontFamily="system-ui">Кэшбэк баланс</text>
        <text x="22" y="128" fill="white" fontSize="18" fontWeight="bold" fontFamily="system-ui">₸ 4 820</text>
        <text x="22" y="142" fill="#FFD60A" fontSize="7" fontWeight="600" fontFamily="system-ui">+₸840 за последний чек</text>

        {/* Recent receipts label */}
        <text x="16" y="168" fill="white" fontSize="9" fontWeight="600" fontFamily="system-ui">Последние чеки</text>

        {/* Receipt card 1 */}
        <rect x="12" y="174" width="136" height="38" rx="10" fill="#ffffff" fillOpacity="0.07"/>
        <rect x="20" y="183" width="20" height="20" rx="6" fill="#8F80E2" fillOpacity="0.4"/>
        <text x="23" y="196" fill="white" fontSize="11">🛍</text>
        <text x="48" y="192" fill="white" fontSize="8" fontWeight="600" fontFamily="system-ui">Magnum</text>
        <text x="48" y="203" fill="white" fillOpacity="0.4" fontSize="7" fontFamily="system-ui">Сегодня, 14:22</text>
        <text x="118" y="192" fill="#4ADE80" fontSize="8" fontWeight="700" fontFamily="system-ui">-25%</text>
        <text x="116" y="203" fill="white" fillOpacity="0.5" fontSize="7" fontFamily="system-ui">₸3 200</text>

        {/* Receipt card 2 */}
        <rect x="12" y="216" width="136" height="38" rx="10" fill="#ffffff" fillOpacity="0.07"/>
        <rect x="20" y="225" width="20" height="20" rx="6" fill="#FFD60A" fillOpacity="0.3"/>
        <text x="23" y="238" fill="white" fontSize="11">☕</text>
        <text x="48" y="234" fill="white" fontSize="8" fontWeight="600" fontFamily="system-ui">Coffee BOOM</text>
        <text x="48" y="245" fill="white" fillOpacity="0.4" fontSize="7" fontFamily="system-ui">Вчера, 09:15</text>
        <text x="116" y="234" fill="#4ADE80" fontSize="8" fontWeight="700" fontFamily="system-ui">-15%</text>
        <text x="118" y="245" fill="white" fillOpacity="0.5" fontSize="7" fontFamily="system-ui">₸980</text>

        {/* Bottom nav bar */}
        <rect x="8" y="276" width="144" height="28" rx="14" fill="#ffffff" fillOpacity="0.05"/>
        <text x="22" y="293" fill="#8F80E2" fontSize="14">🏠</text>
        <text x="54" y="293" fill="white" fillOpacity="0.4" fontSize="14">🧾</text>
        <text x="86" y="293" fill="white" fillOpacity="0.4" fontSize="14">🎁</text>
        <text x="118" y="293" fill="white" fillOpacity="0.4" fontSize="14">👤</text>

        <defs>
          <linearGradient id="balanceGrad" x1="12" y1="92" x2="148" y2="152" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C6FD8"/>
            <stop offset="1" stopColor="#9B4DCA"/>
          </linearGradient>
        </defs>
      </svg>
    </div>

    {/* Floating -25% badge */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute left-2 top-8 bg-[#FFD60A] text-[#1E1B4B] text-sm font-black px-3 py-2 rounded-xl shadow-lg z-20 whitespace-nowrap"
    >
      -25% скидка
    </motion.div>

    {/* Cashback badge */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      className="absolute right-0 bottom-12 bg-[#34D399] text-[#0A4B2D] text-[11px] font-black px-3 py-1.5 rounded-xl shadow-lg z-20 whitespace-nowrap"
    >
      Cashback ₸840
    </motion.div>

    {/* Sparkle */}
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2.8, repeat: Infinity }}
      className="absolute top-4 right-4 text-[#FFD60A] text-lg z-20"
    >✦</motion.div>
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 3.5, repeat: Infinity, delay: 1.2 }}
      className="absolute top-14 left-6 text-[#FFD60A] text-sm z-20"
    >✦</motion.div>
  </div>
);

// ---- Dashboard Illustration — Browser SVG mockup ----
const DashboardIllustration = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    {/* Glow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[200px] h-[160px] rounded-full bg-blue-500/15 blur-3xl" />
    </div>

    {/* Browser/App frame */}
    <div className="relative z-10" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}>
      <svg width="230" height="280" viewBox="0 0 230 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Window frame */}
        <rect x="1" y="1" width="228" height="278" rx="16" fill="#0D1117" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.12"/>

        {/* Title bar */}
        <rect x="1" y="1" width="228" height="32" rx="16" fill="#161B22"/>
        <rect x="1" y="17" width="228" height="16" fill="#161B22"/>

        {/* Traffic lights */}
        <circle cx="20" cy="17" r="5" fill="#FF5F57"/>
        <circle cx="34" cy="17" r="5" fill="#FFBD2E"/>
        <circle cx="48" cy="17" r="5" fill="#28C840"/>

        {/* URL bar */}
        <rect x="68" y="10" width="130" height="14" rx="7" fill="#ffffff" fillOpacity="0.06"/>
        <text x="90" y="20" fill="white" fillOpacity="0.4" fontSize="7" fontFamily="system-ui">mycheck.kz/analytics</text>

        {/* Sidebar */}
        <rect x="1" y="33" width="40" height="246" fill="#0A0D13" rx="0"/>
        <rect x="40" y="33" width="1" height="246" fill="#ffffff" fillOpacity="0.06"/>

        {/* Sidebar icons */}
        <rect x="10" y="46" width="20" height="20" rx="6" fill="#3B82F6" fillOpacity="0.2"/>
        <text x="13" y="60" fontSize="12" fill="#3B82F6">📊</text>
        <rect x="10" y="74" width="20" height="20" rx="6" fill="transparent"/>
        <text x="13" y="88" fontSize="12" fill="white" fillOpacity="0.3">🧾</text>
        <rect x="10" y="102" width="20" height="20" rx="6" fill="transparent"/>
        <text x="13" y="116" fontSize="12" fill="white" fillOpacity="0.3">👥</text>
        <rect x="10" y="130" width="20" height="20" rx="6" fill="transparent"/>
        <text x="13" y="144" fontSize="12" fill="white" fillOpacity="0.3">⚙️</text>

        {/* Main content area */}
        {/* Page title */}
        <text x="50" y="52" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">Аналитика</text>
        <text x="50" y="63" fill="white" fillOpacity="0.35" fontSize="7" fontFamily="system-ui">Апрель 2025</text>

        {/* KPI cards row */}
        <rect x="50" y="70" width="54" height="46" rx="8" fill="#ffffff" fillOpacity="0.06"/>
        <text x="57" y="83" fill="white" fillOpacity="0.5" fontSize="6" fontFamily="system-ui">Выручка</text>
        <text x="57" y="97" fill="white" fontSize="11" fontWeight="800" fontFamily="system-ui">₸2.4M</text>
        <rect x="57" y="103" width="28" height="8" rx="3" fill="#4ADE80" fillOpacity="0.2"/>
        <text x="59" y="110" fill="#4ADE80" fontSize="6" fontWeight="700" fontFamily="system-ui">+18% ↑</text>

        <rect x="110" y="70" width="54" height="46" rx="8" fill="#ffffff" fillOpacity="0.06"/>
        <text x="117" y="83" fill="white" fillOpacity="0.5" fontSize="6" fontFamily="system-ui">Клиентов</text>
        <text x="117" y="97" fill="white" fontSize="11" fontWeight="800" fontFamily="system-ui">1,248</text>
        <rect x="117" y="103" width="28" height="8" rx="3" fill="#4ADE80" fillOpacity="0.2"/>
        <text x="119" y="110" fill="#4ADE80" fontSize="6" fontWeight="700" fontFamily="system-ui">+34% ↑</text>

        <rect x="170" y="70" width="48" height="46" rx="8" fill="#FFD60A" fillOpacity="0.1"/>
        <text x="176" y="83" fill="white" fillOpacity="0.5" fontSize="6" fontFamily="system-ui">ROI</text>
        <text x="176" y="97" fill="#FFD60A" fontSize="11" fontWeight="800" fontFamily="system-ui">+340%</text>
        <circle cx="182" cy="108" r="3" fill="#4ADE80"/>
        <text x="187" y="111" fill="#4ADE80" fontSize="6" fontFamily="system-ui">live</text>

        {/* Chart area */}
        <rect x="50" y="122" width="168" height="80" rx="8" fill="#ffffff" fillOpacity="0.04"/>
        <text x="58" y="135" fill="white" fillOpacity="0.5" fontSize="7" fontFamily="system-ui">Продажи за неделю</text>

        {/* Bar chart bars */}
        {[
          { x: 58, h: 32, color: 'rgba(139,120,230,0.5)' },
          { x: 78, h: 44, color: 'rgba(139,120,230,0.5)' },
          { x: 98, h: 26, color: 'rgba(139,120,230,0.5)' },
          { x: 118, h: 52, color: 'rgba(139,120,230,0.5)' },
          { x: 138, h: 38, color: 'rgba(139,120,230,0.5)' },
          { x: 158, h: 58, color: '#FFD60A' },
          { x: 178, h: 44, color: 'rgba(139,120,230,0.5)' },
        ].map(({ x, h, color }, i) => (
          <rect key={i} x={x} y={196 - h} width="14" height={h} rx="3" fill={color}/>
        ))}

        {/* Chart baseline */}
        <line x1="50" y1="196" x2="218" y2="196" stroke="white" strokeOpacity="0.08" strokeWidth="1"/>

        {/* Day labels */}
        {['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].map((d, i) => (
          <text key={i} x={61 + i * 20} y={205} fill="white" fillOpacity="0.25" fontSize="6" fontFamily="system-ui" textAnchor="middle">{d}</text>
        ))}

        {/* Recent transactions */}
        <text x="50" y="225" fill="white" fillOpacity="0.5" fontSize="7" fontFamily="system-ui">Последние транзакции</text>

        <rect x="50" y="230" width="168" height="20" rx="5" fill="#ffffff" fillOpacity="0.04"/>
        <text x="56" y="243" fill="white" fontSize="7" fontFamily="system-ui">Magnum • ул. Абая</text>
        <text x="188" y="243" fill="#4ADE80" fontSize="7" fontWeight="700" fontFamily="system-ui" textAnchor="end">+₸280</text>

        <rect x="50" y="253" width="168" height="20" rx="5" fill="#ffffff" fillOpacity="0.03"/>
        <text x="56" y="266" fill="white" fontSize="7" fontFamily="system-ui">Coffee BOOM</text>
        <text x="188" y="266" fill="#4ADE80" fontSize="7" fontWeight="700" fontFamily="system-ui" textAnchor="end">+₸120</text>
      </svg>
    </div>

    {/* Floating "Новый партнёр" chip */}
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      className="absolute left-0 top-10 bg-white/[0.12] border border-white/20 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1.5 rounded-full z-20 flex items-center gap-1.5 whitespace-nowrap"
    >
      <span className="text-green-400">✓</span> Новый партнёр
    </motion.div>

    {/* ROI chip */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      className="absolute right-0 bottom-16 bg-[#FFD60A]/10 border border-[#FFD60A]/30 text-[#FFD60A] text-[11px] font-bold px-3 py-1.5 rounded-full z-20 whitespace-nowrap"
    >
      ROI +340%
    </motion.div>

    {/* Sparkle */}
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      className="absolute top-2 right-4 text-[#FFD60A] text-lg z-20"
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
    {/* Top row: badge + arrow */}
    <div className="flex items-center justify-between mb-6 relative z-10">
      <span className="text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 text-white/70">
        {badgeLabel}
      </span>
      <div className="w-9 h-9 bg-white/15 rounded-full flex items-center justify-center">
        <ChevronRight className="w-4 h-4 text-white/70" />
      </div>
    </div>

    {/* Headline + subtitle */}
    <div className="relative z-10">
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

    {/* Illustration — flex-1, centered */}
    <div className="flex-1 flex items-center justify-center relative my-4 overflow-visible min-h-0">
      {illustration}
    </div>

    {/* CTA bottom zone */}
    <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
      {ctaVariant === 'yellow' ? (
        <div className="inline-flex items-center gap-2 bg-[#FFD60A] text-[#1E1B4B] font-black text-sm px-5 py-3 rounded-2xl">
          {ctaLabel} <ChevronRight className="w-4 h-4" />
        </div>
      ) : (
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white font-semibold text-sm px-5 py-3 rounded-2xl">
          {ctaLabel} <ChevronRight className="w-4 h-4" />
        </div>
      )}
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
              gradient="bg-gradient-to-br from-[#6B5FD4] via-[#7C6FD8] to-[#9B4DCA]"
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
              gradient="bg-gradient-to-br from-[#0F3460] via-[#16213E] to-[#0D1B3E]"
              border="border border-[#3B82F6]/40"
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
