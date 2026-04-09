import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { Gift, Ticket, Receipt } from 'lucide-react';

export const Features = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: <Gift className="w-8 h-8 text-[#8F80E2]" />, text: t('feature_1') },
    { icon: <Ticket className="w-8 h-8 text-[#8F80E2]" />, text: t('feature_2') },
    { icon: <Receipt className="w-8 h-8 text-[#8F80E2]" />, text: t('feature_3') },
  ];

  return (
    <section className="pt-0 pb-16 px-4 md:px-[132px]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#f6f6f6] p-6 sm:p-8 rounded-[32px] flex flex-col gap-4 border border-transparent hover:border-[#8F80E2]/20 transition-all duration-300"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <div className="scale-90 sm:scale-100">{card.icon}</div>
            </div>
            <p className="text-base sm:text-lg font-bold text-[#0f0f0f] leading-tight">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const HowItWorks = () => {
  const { t, language } = useLanguage();

  const steps = [
    { id: '1', icon: '🛍️', text: t('step_1') },
    { id: '2', icon: '📱', text: t('step_2') },
    { id: '3', icon: '🤩', text: t('step_3') },
  ];

  return (
    <section id="how">
      <div className="w-full bg-[#8f80e2] py-20 px-6 md:px-16 relative overflow-hidden rounded-[40px] md:rounded-[60px] my-8">
        {/* Title with question marks */}
        <div className="max-w-[1440px] mx-auto relative z-10 mb-16 md:mb-24">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {t('nav_how')}
            </h2>
            <div className="absolute -top-6 -right-12 md:-top-10 md:-right-20 pointer-events-none flex gap-2">
              <motion.div 
                animate={{ rotate: [-10, -5, -10] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="rotate-[-15deg]"
              >
                <span className="text-[#FF3B30] text-3xl md:text-5xl font-black leading-none">?</span>
              </motion.div>
              <motion.div 
                animate={{ rotate: [10, 15, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="rotate-[10deg] translate-y-6 -translate-x-2"
              >
                <span className="text-[#FF3B30] text-xl md:text-3xl font-black leading-none">?</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Steps Container */}
        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Desktop Horizontal Layout */}
          <div className="hidden md:grid grid-cols-3 gap-12 relative pb-24">
            {/* Horizontal Timeline Line */}
            <div className="absolute bottom-0 left-0 right-[-40px] h-1 flex items-center">
              <div className="flex-[2] h-1 bg-white relative">
                <div className="absolute -left-2 -top-1.5 w-4 h-4 bg-white rounded-full" />
                <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-4 h-4 bg-white rounded-full" />
                <div className="absolute -right-2 -top-1.5 w-4 h-4 bg-white rounded-full" />
              </div>
              <div className="flex-1 h-0 border-t-4 border-dashed border-[#FFD60A] relative">
                <div className="absolute -right-2 -top-2 w-4 h-4 bg-[#FFD60A] rounded-full" />
              </div>
            </div>

            {/* Step 1 */}
            <div className="relative flex flex-col gap-6 items-start">
              <div className="absolute -right-4 -top-16 text-[240px] font-black text-[#6c5cc0] opacity-30 leading-none select-none -z-10">
                1
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-xl z-10">
                🛍️
              </div>
              <p className="text-white text-xl font-medium leading-relaxed max-w-[280px] z-10">
                {language === 'kk' ? 'Әдеттегідей сауда жасап, фискалдық чектерді алыңыз' : 'Совершайте покупки как обычно и получайте фискальные чеки'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col gap-6 items-start">
              <div className="absolute -right-4 -top-16 text-[240px] font-black text-[#6c5cc0] opacity-30 leading-none select-none -z-10">
                2
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-xl z-10">
                📱
              </div>
              <p className="text-white text-xl font-medium leading-relaxed max-w-[280px] z-10">
                {language === 'kk' ? 'myCheck қосымшасында фискалдық чектегі QR-кодты сканерлеңіз' : 'Отсканируйте QR-код на фискальном чеке в приложении myCheck'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col gap-6 items-start">
              <div className="absolute -right-4 -top-16 text-[240px] font-black text-[#6c5cc0] opacity-30 leading-none select-none -z-10">
                3
              </div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-xl z-10">
                🤩
              </div>
              <div className="relative z-10">
                <p className="text-white text-xl font-medium leading-relaxed max-w-[280px]">
                  {language === 'kk' ? 'Болды! Сіз ұтыс ойынына қатысушысыз. Ұтыңыз және бағалы сыйлықтар алыңыз' : 'Всё! Вы участник розыгрышей. Выигрывайте и получайте ценные призы'}
                </p>
                {/* Decorative Emojis for Desktop */}
                <div className="absolute -right-32 bottom-0 flex items-end gap-3 translate-y-24 opacity-80">
                  <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-5xl">🎈</motion.div>
                  <div className="relative">
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-4xl">🫰🏻</motion.div>
                    <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-5 left-1/2 -translate-x-1/2 text-xl">💜</motion.span>
                  </div>
                  <motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ duration: 3.5, repeat: Infinity }} className="text-6xl">🎁</motion.div>
                  <motion.div animate={{ rotate: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-4xl">🎉</motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Vertical Layout */}
          <div className="md:hidden flex gap-6 sm:gap-10">
            <div className="relative flex flex-col items-center">
              <div className="absolute top-4 bottom-4 w-1 bg-white/30 left-1/2 -translate-x-1/2 h-[calc(100%-80px)]" />
              <div className="absolute bottom-4 w-1 border-l-2 border-dashed border-[#FFD60A] left-1/2 -translate-x-1/2 h-[60px]" />
              <div className="flex flex-col justify-between h-full py-4 gap-24 sm:gap-32">
                <div className="w-4 h-4 bg-white rounded-full shadow-md z-10 border-4 border-[#8f80e2]" />
                <div className="w-4 h-4 bg-white rounded-full shadow-md z-10 border-4 border-[#8f80e2]" />
                <div className="w-4 h-4 bg-white rounded-full shadow-md z-10 border-4 border-[#8f80e2]" />
                <div className="w-4 h-4 bg-[#FFD60A] rounded-full shadow-md z-10 border-4 border-[#8f80e2]" />
              </div>
            </div>

            <div className="flex flex-col gap-16 sm:gap-24">
              {/* Step 1 */}
              <div className="relative flex flex-col gap-4">
                <div className="absolute -right-2 top-0 text-[100px] sm:text-[140px] font-black text-black/5 leading-none select-none -z-10">1</div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-xl z-10">🛍️</div>
                <p className="text-white text-base sm:text-lg font-bold leading-relaxed max-w-[220px] sm:max-w-[240px]">
                  {language === 'kk' ? 'Әдеттегідей сауда жасап, фискалдық чектерді алыңыз' : 'Совершайте покупки как обычно и получайте фискальные чеки'}
                </p>
              </div>
              {/* Step 2 */}
              <div className="relative flex flex-col gap-4">
                <div className="absolute -right-2 top-0 text-[100px] sm:text-[140px] font-black text-black/5 leading-none select-none -z-10">2</div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-xl z-10">📱</div>
                <p className="text-white text-base sm:text-lg font-bold leading-relaxed max-w-[220px] sm:max-w-[240px]">
                  {language === 'kk' ? 'myCheck қосымшасында фискалдық чектегі QR-кодты сканерлеңіз' : 'Отсканируйте QR-код на фискальном чеке в приложении myCheck'}
                </p>
              </div>
              {/* Step 3 */}
              <div className="relative flex flex-col gap-4 pb-8">
                <div className="absolute -right-2 top-0 text-[100px] sm:text-[140px] font-black text-black/5 leading-none select-none -z-10">3</div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-xl z-10">🤩</div>
                <p className="text-white text-base sm:text-lg font-bold leading-relaxed max-w-[220px] sm:max-w-[240px]">
                  {language === 'kk' ? 'Болды! Сіз ұтыс ойынына қатысушысыз. Ұтыңыз жә��е бағалы сыйлықтар алыңыз' : 'Всё! Вы участник розыгрышей. Выигрывайте и получайте ценные призы'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
