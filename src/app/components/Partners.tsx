import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

interface BenefitItem {
  emoji: string;
  titleKey: string;
  descKey: string;
}

const benefits: BenefitItem[] = [
  { emoji: '🎯', titleKey: 'partners_benefit_1_title', descKey: 'partners_benefit_1_desc' },
  { emoji: '💰', titleKey: 'partners_benefit_2_title', descKey: 'partners_benefit_2_desc' },
  { emoji: '📈', titleKey: 'partners_benefit_3_title', descKey: 'partners_benefit_3_desc' },
  { emoji: '🎛️', titleKey: 'partners_benefit_4_title', descKey: 'partners_benefit_4_desc' },
  { emoji: '⭐', titleKey: 'partners_benefit_5_title', descKey: 'partners_benefit_5_desc' },
  { emoji: '⚡', titleKey: 'partners_benefit_6_title', descKey: 'partners_benefit_6_desc' },
];

interface HowStep {
  number: string;
  titleKey: string;
  descKey: string;
}

const howSteps: HowStep[] = [
  { number: '1', titleKey: 'partners_step_1', descKey: 'partners_step_1_desc' },
  { number: '2', titleKey: 'partners_step_2', descKey: 'partners_step_2_desc' },
  { number: '3', titleKey: 'partners_step_3', descKey: 'partners_step_3_desc' },
];

interface FormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  businessType: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const INITIAL_FORM: FormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  businessType: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BenefitCard: React.FC<{ item: BenefitItem; index: number }> = ({ item, index }) => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className="bg-white rounded-[24px] p-6 flex flex-col gap-3 shadow-sm"
    >
      <span className="text-3xl" role="img" aria-hidden="true">{item.emoji}</span>
      <h3 className="font-bold text-[#0f0f0f] text-sm leading-snug">{t(item.titleKey)}</h3>
      <p className="text-xs text-[#AEAEB2] leading-relaxed">{t(item.descKey)}</p>
    </motion.div>
  );
};

export const Partners: React.FC = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [validationErrors, setValidationErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const errors: Partial<FormState> = {};
    if (!form.name.trim()) errors.name = 'required';
    if (!form.company.trim()) errors.company = 'required';
    if (!form.phone.trim()) errors.phone = 'required';
    if (!form.email.trim() || !EMAIL_REGEX.test(form.email)) errors.email = 'invalid';
    if (!form.businessType) errors.businessType = 'required';
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (validationErrors[name as keyof FormState]) {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus('loading');
    try {
      const response = await fetch('https://api.my-check.kz/partners/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          phone: form.phone,
          email: form.email,
          businessType: form.businessType,
        }),
      });
      if (!response.ok) throw new Error('Server error');
      setSubmitStatus('success');
      setForm(INITIAL_FORM);
    } catch {
      setSubmitStatus('error');
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-[16px] bg-[#f4f4f4] text-sm text-[#0f0f0f] placeholder-[#AEAEB2] border border-transparent focus:outline-none focus:border-[#8F80E2] transition-colors';
  const inputError = 'border-red-400 bg-red-50';

  return (
    <div className="pt-[72px] md:pt-[88px] bg-[#f6f6f6]">
      {/* Hero block */}
      <div className="bg-[#1E1B4B] py-16 md:py-24 px-4 md:px-[132px] text-white text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4">{t('partners_section_title')}</h1>
        <p className="text-lg opacity-70 max-w-[600px] mx-auto">{t('partners_section_subtitle')}</p>
      </div>

      <div className="py-16 md:py-24 px-4 md:px-[132px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <BenefitCard key={item.titleKey} item={item} index={index} />
          ))}
        </div>

        {/* How to become a partner */}
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-[#0f0f0f] text-center mb-10">
            {t('partners_how_title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
                className="bg-white rounded-[24px] p-8 flex flex-col gap-4 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#8F80E2] flex items-center justify-center text-white font-black text-lg shrink-0">
                  {step.number}
                </div>
                <h4 className="font-bold text-[#0f0f0f]">{t(step.titleKey)}</h4>
                <p className="text-sm text-[#AEAEB2] leading-relaxed">{t(step.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application form */}
        <div className="max-w-[600px] mx-auto w-full">
          <div className="bg-white rounded-[32px] shadow-sm p-8 md:p-10">
            <h3 className="text-xl font-black text-[#0f0f0f] mb-6 text-center">
              {t('partners_form_title')}
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 px-4 py-3 rounded-[16px] bg-green-50 border border-green-200 text-green-700 text-sm">
                {t('partners_form_success')}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 px-4 py-3 rounded-[16px] bg-red-50 border border-red-200 text-red-700 text-sm">
                {t('partners_form_error')}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t('partners_form_name')}
                className={`${inputBase} ${validationErrors.name ? inputError : ''}`}
              />
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder={t('partners_form_company')}
                className={`${inputBase} ${validationErrors.company ? inputError : ''}`}
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={t('partners_form_phone')}
                className={`${inputBase} ${validationErrors.phone ? inputError : ''}`}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t('partners_form_email')}
                className={`${inputBase} ${validationErrors.email ? inputError : ''}`}
              />
              <select
                name="businessType"
                value={form.businessType}
                onChange={handleChange}
                className={`${inputBase} ${validationErrors.businessType ? inputError : ''} cursor-pointer`}
              >
                <option value="" disabled>{t('partners_form_type')}</option>
                <option value="cafe">{t('partners_form_type_cafe')}</option>
                <option value="restaurant">{t('partners_form_type_restaurant')}</option>
                <option value="retail">{t('partners_form_type_retail')}</option>
                <option value="fitness">{t('partners_form_type_fitness')}</option>
                <option value="other">{t('partners_form_type_other')}</option>
              </select>

              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="mt-2 w-full h-14 rounded-[16px] bg-[#8F80E2] text-white font-bold text-base hover:bg-[#7a6bc9] disabled:opacity-60 transition-colors"
              >
                {submitStatus === 'loading' ? t('partners_form_sending') : t('partners_form_submit')}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-[#AEAEB2]">
              {t('write_to_us')}{' '}
              <a href="mailto:partners@my-check.kz" className="text-[#8F80E2] hover:underline">
                partners@my-check.kz
              </a>
            </p>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
};
