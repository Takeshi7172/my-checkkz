import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from './LanguageContext';

interface StatItem {
  emoji: string;
  targetValue: number;
  suffix: string;
  labelKey: string;
}

const STATS: StatItem[] = [
  { emoji: '👤', targetValue: 50000, suffix: '+', labelKey: 'stats_users' },
  { emoji: '🧾', targetValue: 300000, suffix: '+', labelKey: 'stats_checks' },
  { emoji: '🤝', targetValue: 120, suffix: '+', labelKey: 'stats_partners' },
  { emoji: '🎟️', targetValue: 8000, suffix: '+', labelKey: 'stats_vouchers' },
];

interface CounterProps {
  targetValue: number;
  suffix: string;
  isActive: boolean;
}

const Counter: React.FC<CounterProps> = ({ targetValue, suffix, isActive }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * targetValue));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isActive, targetValue]);

  const formatted = current >= 1000
    ? current.toLocaleString('ru-RU')
    : String(current);

  return (
    <span className="text-4xl md:text-5xl font-black text-[#8F80E2] leading-none">
      {formatted}{suffix}
    </span>
  );
};

interface StatCardProps {
  item: StatItem;
  isActive: boolean;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ item, isActive, index }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="bg-white rounded-[24px] p-8 flex flex-col items-center text-center gap-4 shadow-sm"
    >
      <span className="text-4xl" role="img" aria-hidden="true">{item.emoji}</span>
      <Counter targetValue={item.targetValue} suffix={item.suffix} isActive={isActive} />
      <span className="text-sm text-[#AEAEB2] font-medium">{t(item.labelKey)}</span>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="stats" className="py-16 md:py-24 px-4 md:px-[132px] bg-white border-y border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-[#0f0f0f] text-center mb-12 md:mb-16 tracking-tight">
          {t('stats_title')}
        </h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((item, index) => (
            <StatCard key={item.labelKey} item={item} isActive={isInView} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
