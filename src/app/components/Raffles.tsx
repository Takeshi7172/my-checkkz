import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from "react-slick";
import { X, CheckCircle2, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectId, publicAnonKey } from '/utils/supabase/info';

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
  >
    <ChevronLeft className="w-5 h-5 text-[#8F80E2]" />
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
  >
    <ChevronRight className="w-5 h-5 text-[#8F80E2]" />
  </button>
);

const RaffleCard = ({ title, titleKK, date, image, bg, isBanner, conditions, conditionsKK, onParticipate, className }: any) => {
  const { language } = useLanguage();
  const displayTitle = (language === 'kk' && titleKK) ? titleKK : title;
  
  return (
    <div className={className}>
      <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col h-[420px] w-full">
        <div className={`h-[200px] relative overflow-hidden flex items-center justify-center ${bg || 'bg-gray-100'}`}>
          <img 
            src={image} 
            alt={displayTitle} 
            className={`${isBanner ? 'w-full h-full object-cover' : 'w-[160px] md:w-[150px] object-contain'} relative z-10`} 
          />
          {!isBanner && <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-transparent" />}
        </div>
        <div className="p-6 flex flex-col gap-4 flex-grow">
          <h3 className="text-xl md:text-lg font-bold text-[#0f0f0f] leading-tight line-clamp-2">
            {displayTitle}
          </h3>
          <p className="text-xs text-[#AEAEB2]">
            {date}
          </p>
          <button 
            onClick={() => onParticipate({ title, titleKK, date, image, bg, conditions, conditionsKK })}
            className="mt-auto w-full py-4 rounded-xl border border-[#8F80E2] text-[#8F80E2] font-semibold text-sm hover:bg-[#8F80E2] hover:text-white transition-colors cursor-pointer"
          >
            {language === 'kk' ? 'Қатысу' : 'Участвовать'}
          </button>
        </div>
      </div>
    </div>
  );
};

export const Raffles = () => {
  const { t, language } = useLanguage();
  const [raffles, setRaffles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRaffle, setSelectedRaffle] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const fetchRaffles = async () => {
      try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-0613a960/server/raffles`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        });
        const data = await response.json();
        setRaffles(data);
      } catch (error) {
        setRaffles([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRaffles();
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const settings = {
    dots: false,
    infinite: raffles.length > 2,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: raffles.length > 0 && !selectedRaffle,
    autoplaySpeed: 3000,
    arrows: false,
    draggable: true,
  };

  const modalTitle = selectedRaffle ? ((language === 'kk' && selectedRaffle.titleKK) ? selectedRaffle.titleKK : selectedRaffle.title) : '';
  const modalConditions = selectedRaffle ? ((language === 'kk' && selectedRaffle.conditionsKK) ? selectedRaffle.conditionsKK : selectedRaffle.conditions) : '';

  return (
    <section id="raffles" className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto mb-10 px-6 md:px-[132px]">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#8F80E2]">
            {t('nav_raffles')}
          </h2>
          <span className="text-4xl">🎉</span>
        </div>
      </div>

      <div className="w-full md:px-10">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-[#8F80E2] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : raffles.length > 0 ? (
          isMobile ? (
            <div className="relative px-0 pb-12 [&_.slick-dots]:!bottom-[-10px] [&_.slick-dots_li_button:before]:!text-[12px] [&_.slick-dots_li_button:before]:!text-[#AEAEB2] [&_.slick-dots_li.slick-active_button:before]:!text-[#FFD600] [&_.slick-dots_li.slick-active_button:before]:!opacity-100 [&_.slick-prev]:!left-2 [&_.slick-prev]:!z-20 [&_.slick-prev]:!w-10 [&_.slick-prev]:!h-10 [&_.slick-prev]:!bg-white/90 [&_.slick-prev]:!rounded-full [&_.slick-prev]:!shadow-lg [&_.slick-next]:!right-2 [&_.slick-next]:!z-20 [&_.slick-next]:!w-10 [&_.slick-next]:!h-10 [&_.slick-next]:!bg-white/90 [&_.slick-next]:!rounded-full [&_.slick-next]:!shadow-lg [&_.slick-prev:before]:!text-[#8F80E2] [&_.slick-prev:before]:!text-xl [&_.slick-next:before]:!text-[#8F80E2] [&_.slick-next:before]:!text-xl">
              <Slider
                dots={true}
                infinite={raffles.length > 1}
                speed={500}
                slidesToShow={1}
                centerMode={true}
                centerPadding="32px"
                arrows={true}
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
                autoplay={!selectedRaffle}
                autoplaySpeed={4000}
              >
                {raffles.map((raffle) => (
                  <RaffleCard
                    key={raffle.id}
                    {...raffle}
                    className="px-2"
                    onParticipate={setSelectedRaffle}
                  />
                ))}
              </Slider>
            </div>
          ) : (
            <div>
              <Slider {...settings}>
                {raffles.map((raffle) => (
                  <RaffleCard 
                    key={raffle.id} 
                    {...raffle} 
                    className="px-4" 
                    onParticipate={setSelectedRaffle} 
                  />
                ))}
              </Slider>
            </div>
          )
        ) : (
          <p className="text-center text-[#AEAEB2] py-20">Пока нет активных розыгрышей</p>
        )}
      </div>

      <AnimatePresence>
        {selectedRaffle && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-[32px] w-full max-w-lg overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="relative h-48 flex items-center justify-center bg-gray-50">
                <div className={`absolute inset-0 ${selectedRaffle.bg || 'bg-purple-50'} opacity-50`} />
                <img src={selectedRaffle.image} alt="" className="relative z-10 w-32 h-32 object-contain" />
                <button onClick={() => setSelectedRaffle(null)} className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <X size={20} className="text-[#0f0f0f]" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0f0f0f] mb-2">{modalTitle}</h3>
                <p className="text-sm text-[#AEAEB2] mb-6">{selectedRaffle.date}</p>
                
                {modalConditions && (
                  <div className="mb-8">
                    <p className="text-sm font-bold text-[#0f0f0f] mb-3 flex items-center gap-2">
                      <Info size={16} className="text-[#8F80E2]" />
                      {language === 'kk' ? 'Қатысу шарттары:' : 'Условия участия:'}
                    </p>
                    <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                      {modalConditions.split('\n').map((condition: string, i: number) => condition.trim() && (
                        <div key={i} className="flex gap-3 items-start">
                          <CheckCircle2 size={16} className="text-[#8F80E2] mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-[#3A3A3C] leading-relaxed">{condition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={() => setSelectedRaffle(null)} 
                  className="w-full py-4 bg-[#8F80E2] text-white font-bold rounded-2xl hover:bg-[#7a6bc9] transition-colors shadow-lg shadow-purple-100"
                >
                  {language === 'kk' ? 'Түсінікті' : 'Понятно'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #8F80E2; border-radius: 10px; }
        .slick-prev:before, .slick-next:before { display: none !important; }
      `}</style>
    </section>
  );
};

const WinnerCard = ({ name, city, date, prize, prizeKK, photo, className }: any) => {
  const { language } = useLanguage();
  const displayPrize = (language === 'kk' && prizeKK) ? prizeKK : prize;
  
  return (
    <div className={className}>
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col h-[420px] w-full shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
        <div className="h-[200px] w-full overflow-hidden">
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 flex flex-col items-center text-center flex-grow">
          <h4 className="font-extrabold text-lg text-[#0f0f0f] mb-1">{name}</h4>
          <div className="text-[12px] text-[#AEAEB2] font-medium mb-3">{date} • {city}</div>
          <div className="mt-auto w-full">
            <div className="bg-[#F4F1FD] py-3 px-4 rounded-xl">
              <p className="text-[14px] text-[#8F80E2] font-bold leading-snug line-clamp-2">{displayPrize}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Winners = () => {
  const { t } = useLanguage();
  const [winners, setWinners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const fetchWinners = async () => {
      try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-0613a960/server/winners`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        });
        const data = await response.json();
        setWinners(data);
      } catch (error) {
        setWinners([]);
      } finally {
        setLoading(false);
      }
    };
    fetchWinners();
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const settings = {
    dots: false,
    infinite: winners.length > 3,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section id="winners" className="py-20 bg-[#fbfbfb] overflow-hidden">
      <div className="max-w-[1440px] mx-auto mb-10 md:mb-16 px-6 md:px-[132px]">
        <div className="flex items-start gap-2">
          <h2 className="text-4xl md:text-6xl font-black text-[#8F80E2] tracking-tight">
            {t('nav_winners')}
          </h2>
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-4xl md:text-5xl -mt-4">🫰🏻</motion.span>
        </div>
      </div>

      <div className="w-full md:px-10">
        {!loading && winners.length > 0 ? (
          isMobile ? (
            <div className="relative px-0 pb-12 [&_.slick-dots]:!bottom-[-10px] [&_.slick-dots_li_button:before]:!text-[12px] [&_.slick-dots_li_button:before]:!text-[#AEAEB2] [&_.slick-dots_li.slick-active_button:before]:!text-[#FFD600] [&_.slick-dots_li.slick-active_button:before]:!opacity-100 [&_.slick-prev]:!left-2 [&_.slick-prev]:!z-20 [&_.slick-prev]:!w-10 [&_.slick-prev]:!h-10 [&_.slick-prev]:!bg-white/90 [&_.slick-prev]:!rounded-full [&_.slick-prev]:!shadow-lg [&_.slick-next]:!right-2 [&_.slick-next]:!z-20 [&_.slick-next]:!w-10 [&_.slick-next]:!h-10 [&_.slick-next]:!bg-white/90 [&_.slick-next]:!rounded-full [&_.slick-next]:!shadow-lg [&_.slick-prev:before]:!text-[#8F80E2] [&_.slick-prev:before]:!text-xl [&_.slick-next:before]:!text-[#8F80E2] [&_.slick-next:before]:!text-xl">
              <Slider
                dots={true}
                infinite={winners.length > 1}
                speed={500}
                slidesToShow={1}
                centerMode={true}
                centerPadding="32px"
                arrows={true}
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
                autoplay={true}
                autoplaySpeed={4000}
              >
                {winners.map((winner) => (
                  <WinnerCard
                    key={winner.id}
                    {...winner}
                    className="px-2"
                  />
                ))}
              </Slider>
            </div>
          ) : (
            <div>
              <Slider {...settings}>
                {winners.map((winner) => (
                  <WinnerCard 
                    key={winner.id} 
                    {...winner} 
                    className="px-4 h-full" 
                  />
                ))}
              </Slider>
            </div>
          )
        ) : loading ? (
          <div className="flex justify-center py-10"><div className="w-10 h-10 border-4 border-[#8F80E2] border-t-transparent rounded-full animate-spin" /></div>
        ) : (
          <p className="text-center text-[#AEAEB2] py-10">Список победителей скоро обновится</p>
        )}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .slick-track { display: flex !important; }
        .slick-slide { height: inherit !important; }
        .slick-slide > div { height: 100%; }
        .slick-prev:before, .slick-next:before { display: none !important; }
      `}</style>
    </section>
  );
};
