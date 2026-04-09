import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

type Language = 'ru' | 'kk';
type TagKey = 'partners' | 'tips' | 'news';

interface Article {
  tag: TagKey;
  date: Record<Language, string>;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  emoji: string;
}

const articles: Article[] = [
  {
    tag: 'partners',
    date: { ru: '15 марта 2026', kk: '2026 жылғы 15 наурыз' },
    title: {
      ru: 'Как myCheck помогает кофейням увеличить повторные визиты на 30%',
      kk: 'myCheck кофеханаларға қайталама келулерді 30%-ға қалай арттырады',
    },
    excerpt: {
      ru: 'Разбираем механику ваучеров и реальный кейс кофейни в Алматы, которая подключилась к myCheck три месяца назад.',
      kk: 'Ваучер механикасын және Алматыдағы үш ай бұрын myCheck-ке қосылған кофехананың нақты кейсін талдаймыз.',
    },
    emoji: '☕',
  },
  {
    tag: 'tips',
    date: { ru: '3 марта 2026', kk: '2026 жылғы 3 наурыз' },
    title: {
      ru: 'Ваучеры vs скидочные карты: что реально работает для малого бизнеса',
      kk: 'Ваучерлер мен жеңілдік карталары: шағын бизнес үшін не нәтиже береді',
    },
    excerpt: {
      ru: 'Сравниваем два инструмента лояльности и объясняем, почему ваучеры дают лучший ROI при нулевых затратах на интеграцию.',
      kk: 'Екі адалдық құралын салыстырып, ваучерлер нуль интеграция шығынымен неліктен жақсы ROI беретінін түсіндіреміз.',
    },
    emoji: '📊',
  },
  {
    tag: 'news',
    date: { ru: '20 февраля 2026', kk: '2026 жылғы 20 ақпан' },
    title: {
      ru: 'myCheck запустил новый сезонный розыгрыш: iPhone 16 и 50 сертификатов',
      kk: 'myCheck жаңа маусымдық ұтыс ойынын іске қосты: iPhone 16 және 50 сертификат',
    },
    excerpt: {
      ru: 'Мы объявляем старт весеннего розыгрыша с призовым фондом более 3 000 000 тенге. Каждый чек — шанс выиграть.',
      kk: 'Біз 3 000 000 теңгеден астам жүлде қорымен көктемгі ұтыс ойынының басталуын жариялаймыз.',
    },
    emoji: '🎉',
  },
];

const TAG_STYLES: Record<TagKey, { bg: string; text: string }> = {
  partners: { bg: 'bg-[#F4F1FD]', text: 'text-[#8F80E2]' },
  tips: { bg: 'bg-[#F0FDF4]', text: 'text-[#16a34a]' },
  news: { bg: 'bg-[#FEFCE8]', text: 'text-[#ca8a04]' },
};

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  const { t, language } = useLanguage();
  const lang = language as Language;
  const tagStyle = TAG_STYLES[article.tag];
  const tagKey = `blog_tag_${article.tag}` as const;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="bg-white rounded-[24px] shadow-sm p-8 flex flex-col gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex items-center justify-between">
        <span className="text-4xl" role="img" aria-hidden="true">{article.emoji}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tagStyle.bg} ${tagStyle.text}`}>
          {t(tagKey)}
        </span>
      </div>
      <p className="text-xs text-[#AEAEB2]">{article.date[lang]}</p>
      <h3 className="text-base font-bold text-[#0f0f0f] leading-snug">{article.title[lang]}</h3>
      <p className="text-sm text-[#AEAEB2] leading-relaxed flex-1">{article.excerpt[lang]}</p>
      <a
        href="#blog"
        className="text-sm font-bold text-[#8F80E2] hover:opacity-70 transition-opacity w-fit"
      >
        {t('blog_read_more')} →
      </a>
    </motion.article>
  );
};

export const Blog: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-16 md:py-24 px-4 md:px-[132px] bg-[#f6f6f6]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-[#0f0f0f] text-center mb-12 md:mb-16 tracking-tight">
          {t('blog_title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} index={index} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="#blog"
            className="px-8 py-4 rounded-[24px] border-2 border-[#8F80E2] text-[#8F80E2] font-bold text-sm hover:bg-[#8F80E2] hover:text-white transition-all duration-200"
          >
            {t('blog_see_all')}
          </a>
        </div>
      </div>
    </section>
  );
};
