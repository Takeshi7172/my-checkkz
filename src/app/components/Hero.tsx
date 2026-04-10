import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import imgImage4 from "@/assets/744aea4b5096e5b79018c1d37fbdda75de39cf8e.png";
import imgGetItOnGooglePlayBadgeWebColorEnglish1 from "@/assets/d3ec3c38d6fda2e589d860c57721e7c25ccecbdd.png";
import img16 from "@/assets/1fbf9ff2ab7596cc85d05cb6c6b9072ec853a197.png";
import svgPaths from "@/imports/svg-by6trk53vw";

export const Hero = () => {
  const { t } = useLanguage();

  const Marketplace = ({ platform }: { platform: 'appstore' | 'googleplay' }) => (
    <div className={`h-[44px] relative shrink-0 ${platform === 'appstore' ? 'w-[131px]' : 'w-[148px]'}`}>
      {platform === 'appstore' ? (
        <div className="absolute inset-0 overflow-clip">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.664 40.0001">
            <g id="Group">
              <path d={svgPaths.pe30ae00} fill="#000" />
              <path d={svgPaths.p1c0d3400} fill="black" />
              <g transform="translate(10, 10) scale(0.8)">
                <path d={svgPaths.p11c46880} fill="white" />
                <path d={svgPaths.p26de8970} fill="white" />
              </g>
              <g transform="translate(35, 10) scale(0.8)">
                <path d={svgPaths.p19eaa100} fill="white" />
                <path d={svgPaths.p17b2f400} fill="white" />
                <path d={svgPaths.p3c7bcc00} fill="white" />
                <path d={svgPaths.p10598288} fill="white" />
                <path d={svgPaths.p281afc80} fill="white" />
                <path d={svgPaths.p3e942a70} fill="white" />
                <path d={svgPaths.p26bfc900} fill="white" />
                <path d={svgPaths.p2a194000} fill="white" />
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <img alt="Google Play" className="absolute inset-0 size-full object-contain" src={imgGetItOnGooglePlayBadgeWebColorEnglish1} />
      )}
    </div>
  );

  return (
    <section className="pt-[88px] md:pt-[120px] pb-10 px-4 md:px-[132px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 md:gap-8 text-center md:text-left items-center md:items-start"
        >
          <h1 className="text-4xl md:text-[56px] lg:text-[64px] font-black leading-[1.1] text-[#0f0f0f] tracking-tight max-w-[640px]" style={{ fontFamily: 'var(--font-display)' }}>
            {t('hero_title')}
          </h1>
          <p className="text-base md:text-[18px] lg:text-[20px] text-[#0f0f0f] leading-relaxed max-w-[480px] opacity-70 font-medium">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 mt-4 w-full md:w-auto">
            <div className="hidden md:block bg-[#8f80e2] p-[10px] rounded-[24px] flex-shrink-0 shadow-lg shadow-purple-200">
              <div className="w-[100px] h-[100px] rounded-[16px] overflow-hidden bg-white">
                <img src={imgImage4} alt="QR Code" className="w-full h-full object-cover p-2" />
              </div>
            </div>
            <div className="flex flex-row gap-3 md:gap-4 justify-center">
              <Marketplace platform="appstore" />
              <Marketplace platform="googleplay" />
            </div>
          </div>
        </motion.div>

        <div className="relative h-[450px] md:h-[650px] flex items-center justify-center mt-8 md:mt-0 scale-90 md:scale-100">
          {/* Main Background Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[380px] md:w-[480px] h-[320px] sm:h-[380px] md:h-[480px] bg-[#F4F1FD] rounded-full z-0" />
          
          {/* Phone Image */}
          <motion.div 
            initial={{ rotate: 15, y: 50, opacity: 0 }}
            whileInView={{ rotate: 15, y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="relative z-10 w-[170px] sm:w-[190px] md:w-[256px] shadow-[40px_24px_56px_0px_rgba(70,21,99,0.12)]"
          >
            <motion.img 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={img16} 
              alt="App UI" 
              className="w-full h-auto m-[0px] rounded-[32px] md:rounded-[48px]" 
            />
          </motion.div>

          {/* Floating Elements based on screenshot */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[2%] sm:left-[5%] top-[10%] sm:top-[15%] text-4xl z-20"
          >
            🎈
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[10%] sm:left-[15%] bottom-[20%] sm:bottom-[25%] z-20"
          >
            <div className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] bg-[#C8BFF7] rounded-full flex items-center justify-center text-3xl sm:text-4xl shadow-md border-4 border-white">
              🎁
            </div>
          </motion.div>

          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute right-[5%] sm:right-[10%] top-[30%] sm:top-[35%] z-20"
          >
            <div className="w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] bg-[#8F80E2] rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-md border-2 border-white">
              🛍️
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute right-[15%] sm:right-[20%] bottom-[15%] sm:bottom-[20%] text-2xl sm:text-3xl z-20"
          >
            🫰🏻
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute right-[25%] sm:right-[30%] top-[15%] sm:top-[20%] text-2xl sm:text-3xl z-20"
          >
            🎉
          </motion.div>
        </div>
      </div>
    </section>
  );
};
