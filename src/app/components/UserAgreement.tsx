import React from 'react';
import { useLanguage } from './LanguageContext';
import { userAgreement } from '../data/legal';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

export const UserAgreement = ({ trigger }: { trigger: React.ReactNode }) => {
  const { language } = useLanguage();
  const data = userAgreement[language as 'ru' | 'kk'] || userAgreement.ru;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0 overflow-hidden bg-white border-none shadow-2xl">
        <DialogHeader className="p-6 border-b border-gray-100 shrink-0">
          <DialogTitle className="text-base md:text-lg font-bold text-[#0f0f0f] text-center">
            {data.title}
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-[#8F80E2] font-semibold mt-1">
            {data.subtitle}
          </DialogDescription>
          <p className="text-center text-[10px] text-[#AEAEB2] mt-1">
            {data.date}
          </p>
        </DialogHeader>
        
        <ScrollArea className="flex-1 min-h-0 p-6 md:p-10">
          <div className="space-y-8 text-[#3a3a3c] text-sm md:text-base leading-relaxed">
            <div className="bg-gray-50 p-4 rounded-xl space-y-2">
              <p className="font-semibold text-[#0f0f0f]">{data.operator}</p>
              <p className="text-xs">{data.bin}</p>
              <p className="text-xs text-[#8F80E2]">{data.email}</p>
            </div>

            {data.content.map((section, index) => (
              <section key={index} className="space-y-4">
                <h3 className="text-base font-bold text-[#0f0f0f] border-l-4 border-[#8F80E2] pl-4 py-1">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, i) => (
                    <p key={i} className={item.startsWith('•') ? 'pl-6 relative' : ''}>
                      {item}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <div className="pt-8 border-t border-gray-100 text-center text-xs text-[#AEAEB2]">
              © {new Date().getFullYear()} MyCheck. All rights reserved.
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
