import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Phone, FileText, Settings } from 'lucide-react';
import { PrivacyPolicy } from './PrivacyPolicy';
import { UserAgreement } from './UserAgreement';
import { AdminPanel } from './AdminPanel';
import svgPaths from "@/imports/svg-by6trk53vw";

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 last:mb-0">
      <div className={`overflow-hidden transition-all duration-300 rounded-[24px] bg-[#f4f4f4] ${isOpen ? 'pb-2' : ''}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-5 sm:p-6 md:p-8 flex items-center justify-between text-left transition-all duration-300 hover:bg-[#efeff0]"
        >
          <span className="text-sm sm:text-base md:text-lg font-bold text-[#0f0f0f] leading-tight pr-4 md:pr-8">{question}</span>
          <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-[#AEAEB2] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="faq-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-5 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-0">
                <p className="text-xs sm:text-sm md:text-base text-[#3a3a3c] leading-relaxed opacity-70">
                  {answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

type FaqTab = 'general' | 'raffles' | 'partners';

interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<FaqTab>('general');
  const [showAll, setShowAll] = useState(false);

  const isKk = language === 'kk';

  const generalFaqs: FaqItem[] = [
    {
      question: isKk ? "MyCheck қосымшасын пайдалану ақылы ма?" : "Нужно ли платить за использование приложения MyCheck?",
      answer: isKk ? "Жоқ, MyCheck қосымшасын пайдалану толығымен тегін." : "Нет, использование приложения MyCheck абсолютно бесплатное."
    },
    {
      question: isKk ? "Фискалдық чек деген не?" : "Что такое фискальный чек?",
      answer: isKk ? "Фискалдық чек — тауар немесе қызмет сатып алынған кезде берілетін ресми құжат. Ол ОФД-да тіркелген кассалық аппарат арқылы қалыптастырылады." : "Фискальный чек — это официальный документ, который выдается при покупке товаров или услуг. Он формируется кассовым аппаратом торговой точки, зарегистрированным в ОФД."
    },
    {
      question: isKk ? "Фискалдық чек пен тауар чегінің айырмашылығы неде?" : "Чем отличается фискальный чек от товарного чека?",
      answer: isKk ? "Фискалдық чек міндетті мемлекеттік ақпаратты қамтиды: сатушының атауы, ЖСН, мекенжай, күн/уақыт, QR-код және т.б. Тауар чегі тек тауар атауы мен сомасын ғана қамтиды." : "Фискальный чек содержит обязательную государственную информацию: наименование продавца, ИИН, адрес, дату/время, QR-код и др. Товарный чек содержит только наименование и сумму покупки."
    },
    {
      question: isKk ? "MyCheck қосымшасына тауар чектерін қосуға бола ма?" : "Можно ли добавить товарные чеки в приложение MyCheck?",
      answer: isKk ? "Жоқ. MyCheck қосымшасында тек фискалдық чектерді ғана сканерлеуге және қосуға болады." : "Нет. В приложении MyCheck можно сканировать и добавлять только фискальные чеки."
    },
    {
      question: isKk ? "Менің деректерім қолданыла ма және үшінші тұлғаларға беріле ме?" : "Используются ли мои данные и передаются ли они третьим лицам?",
      answer: isKk ? "Жоқ. Сіздің барлық деректеріңіз MyCheck қосымшасында сақталады және үшінші тұлғаларға берілмейді." : "Нет. Все ваши данные хранятся в приложении MyCheck и не передаются третьим лицам."
    },
    {
      question: isKk ? "Интернетсіз чектегі QR-кодты сканерлеуге бола ма?" : "Могу ли я отсканировать QR-код с чека без интернета?",
      answer: isKk ? "Жоқ. Фискалдық чектегі QR-кодты сканерлеу үшін белсенді интернет байланысы қажет." : "Нет. Для сканирования QR-кода с фискального чека требуется активное интернет-соединение."
    },
  ];

  const rafflesFaqs: FaqItem[] = [
    {
      question: isKk ? "QR-кодты сканерлеген кезде неге қате шығады?" : "Почему при сканировании QR-кода появляется ошибка?",
      answer: isKk ? "Провайдер жағындағы сұраныстардың көп болуына байланысты чекті өңдеу біраз уақыт алуы мүмкін. Өтінеміз, шамамен 1 сағаттан кейін қайта сканерлеп көріңіз." : "Из-за большого количества запросов на стороне провайдера обработка чека может занять некоторое время. Пожалуйста, попробуйте отсканировать чек повторно примерно через 1 час."
    },
    {
      question: isKk ? "Жүлдемді қалай ала аламын?" : "Как я могу получить свой приз?",
      answer: isKk ? "Жүлдені пайдалану тәртібі мен алу мерзімдері туралы барлық ақпарат жүлденің сипаттамасында көрсетілген. Қосымшадағы алған жүлдеңізді басыңыз." : "Все детали по использованию приза и срокам его получения доступны в описании приза. Просто нажмите на полученный приз в приложении, чтобы ознакомиться с условиями."
    },
    {
      question: isKk ? "Ұтыс ойындарына қатысу үшін QR-кодты сканерлеуден басқа қосымша әрекеттер керек пе?" : "Нужно ли выполнять какие-то дополнительные действия, кроме сканирования QR-кода, чтобы участвовать в розыгрышах?",
      answer: isKk ? "Жоқ, қосымша әрекеттер қажет емес. Тек фискалдық чектердегі QR-кодтарды сканерлеу жеткілікті." : "Нет, никаких дополнительных действий не требуется. Достаточно просто сканировать QR-коды с фискальных чеков."
    },
    {
      question: isKk ? "Ұтыс ойындарының нәтижелерін қайдан білуге болады?" : "Как и где можно узнать результаты розыгрышей?",
      answer: isKk ? "Ұтыс ойындарының барлық нәтижелері my-check.kz ресми сайтындағы «Жеңімпаздар» бөлімінде жарияланады." : "Все результаты розыгрышей публикуются на официальном сайте my-check.kz в разделе «Победители»."
    },
  ];

  const partnersFaqs: FaqItem[] = [
    {
      question: isKk ? "myCheck-ке қосылу қанша тұрады?" : "Сколько стоит подключение к myCheck?",
      answer: isKk ? "Қосылу мүлдем тегін. Біз комиссия алмаймыз және алдын ала төлем талап етпейміз — сіз тек пайдаланушыларымызға ваучерлер беруіңіз жеткілікті." : "Подключение абсолютно бесплатное. Мы не берём комиссию и не требуем предоплат — вы просто предоставляете ваучеры для наших пользователей."
    },
    {
      question: isKk ? "myCheck-ті кассамен интеграциялау керек пе?" : "Нужно ли интегрировать myCheck с моей кассой?",
      answer: isKk ? "Жоқ. Ешқандай IT-интеграция қажет емес. Қажет нәрсе — ваучерді қажетті форматта ұсыну. Техникалық тарапты біз өзіміз аламыз." : "Нет. Никаких IT-интеграций не требуется. Всё что нужно — предоставить ваучер в нужном формате. Мы берём техническую сторону на себя."
    },
    {
      question: isKk ? "Ваучерлердің шарттарын қалай бақылауға болады?" : "Как я могу контролировать условия ваучеров?",
      answer: isKk ? "Толық бақылау сіздің жағыңызда: жарамдылық мерзімін, ваучерлер санын және олардың түрін өзіңіз белгілейсіз. Шарттарды кез келген уақытта өзгертуге болады." : "Полный контроль на вашей стороне: вы задаёте срок действия, количество ваучеров и их тип (скидка или бесплатный продукт). Условия можно менять в любое время."
    },
    {
      question: isKk ? "Қосылу үшін қайда жүгінуге болады?" : "Куда обращаться для подключения?",
      answer: isKk ? "«Серіктес болу» бөліміндегі нысанды толтырыңыз немесе partners@my-check.kz мекенжайына жазыңыз. Біз 24 сағат ішінде хабарласамыз." : "Заполните форму в разделе «Стать партнёром» или напишите нам на partners@my-check.kz. Мы свяжемся с вами в течение 24 часов."
    },
  ];

  const tabFaqs: Record<FaqTab, FaqItem[]> = {
    general: generalFaqs,
    raffles: rafflesFaqs,
    partners: partnersFaqs,
  };

  const tabs: { key: FaqTab; labelKey: string }[] = [
    { key: 'general', labelKey: 'faq_tab_general' },
    { key: 'raffles', labelKey: 'faq_tab_raffles' },
    { key: 'partners', labelKey: 'faq_tab_partners' },
  ];

  const currentFaqs = tabFaqs[activeTab];
  const displayedFaqs = showAll ? currentFaqs : currentFaqs.slice(0, 4);

  const handleTabChange = (tab: FaqTab) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-[132px]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-[#0f0f0f] text-center mb-12 md:mb-16 tracking-tight">
          {t('faq_title')}
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
                activeTab === tab.key
                  ? 'bg-[#8F80E2] text-white'
                  : 'bg-[#f4f4f4] text-[#0f0f0f] hover:bg-[#e8e8e8]'
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        <div className="max-w-[800px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {displayedFaqs.map((faq, idx) => (
                <AccordionItem key={`${activeTab}-${idx}`} {...faq} />
              ))}
            </motion.div>
          </AnimatePresence>

          {currentFaqs.length > 4 && (
            <div className="mt-8 md:mt-12 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 text-[#8f80e2] font-bold hover:opacity-80 transition-opacity bg-transparent border-none p-2 cursor-pointer"
              >
                <span className="text-sm">{showAll ? t('show_less') : t('see_all_questions')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <footer className="py-16 px-4 md:px-[132px] bg-white border-t border-gray-100 relative">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="h-[28px] relative shrink-0 w-[131px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 28.0001">
              <g id="Logo Light">
                <path d={svgPaths.p448e700} fill="url(#paint0_footer)" />
                <path d={svgPaths.p1c4a4400} fill="url(#paint1_footer)" />
              </g>
              <defs>
                <linearGradient id="paint0_footer" x1="40.7642" x2="0.0513522" y1="6.29987" y2="23.919" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE666" />
                  <stop offset="1" stopColor="#FFBB00" />
                </linearGradient>
                <linearGradient id="paint1_footer" x1="42.8865" x2="132.318" y1="21.7781" y2="11.707" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#653B9B" />
                  <stop offset="1" stopColor="#9D61E2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="text-[10px] text-[#AEAEB2] leading-tight mt-4">
            MyCheck — это мобильная платформа лояльности, которая превращает процесс обычных покупок в увлекательную игру с призами.
          </p>
          {/* Social links */}
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-[10px] font-bold text-[#0f0f0f]">{t('footer_social')}</p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/77012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#8F80E2] hover:text-[#0f0f0f] transition-colors flex items-center gap-1"
                aria-label="WhatsApp"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://t.me/mycheckbot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#8F80E2] hover:text-[#0f0f0f] transition-colors flex items-center gap-1"
                aria-label="Telegram"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-1 flex flex-col gap-4">
          <h4 className="font-bold text-sm text-[#0f0f0f]">{t('for_users')}</h4>
          <p className="text-[10px] text-[#AEAEB2] leading-tight">
            {t('for_users_text')}
          </p>
        </div>

        <div className="md:col-span-1 flex flex-col gap-4">
          <h4 className="font-bold text-sm text-[#0f0f0f]">{t('tech_base')}</h4>
          <p className="text-[10px] text-[#AEAEB2] leading-tight">
            {t('tech_base_text')}
          </p>
        </div>

        <div className="md:col-span-1 flex flex-col gap-4 md:items-end">
          <div className="flex flex-col gap-2 text-[10px] text-[#8F80E2] font-medium leading-none">
            <UserAgreement trigger={<button className="flex items-center gap-1.5 cursor-pointer hover:text-[#0f0f0f] transition-colors w-fit p-0 bg-transparent border-none text-[10px] font-medium"><FileText size={10} className="shrink-0" /> {t('user_agreement')}</button>} />
            <PrivacyPolicy trigger={<button className="flex items-center gap-1.5 cursor-pointer hover:text-[#0f0f0f] transition-colors w-fit p-0 bg-transparent border-none text-[10px] font-medium"><FileText size={10} className="shrink-0" /> {t('privacy_policy')}</button>} />
            <a href="#blog" className="flex items-center gap-1.5 hover:text-[#0f0f0f] transition-colors">Блог</a>
            <a href="mailto:support@my-check.kz" className="flex items-center gap-1.5 hover:text-[#0f0f0f] transition-colors"><Mail size={10} className="shrink-0" /> support@my-check.kz</a>
            <a href="tel:+77012345678" className="flex items-center gap-1.5 hover:text-[#0f0f0f] transition-colors"><Phone size={10} className="shrink-0" /> +7 701 234 5678</a>
          </div>
          <div className="flex flex-col items-end gap-2 mt-8">
            <p className="text-[10px] text-[#AEAEB2]">
              © {new Date().getFullYear()} MyCheck. Все права защищены.
            </p>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="p-1 text-gray-200 hover:text-[#8F80E2] transition-colors"
              title="Admin Panel"
            >
              <Settings size={14} />
            </button>
          </div>
        </div>
      </div>
      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </footer>
  );
};
