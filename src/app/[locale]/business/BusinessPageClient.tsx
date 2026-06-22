"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Sector } from "@/lib/business-data";

interface BusinessPageClientProps {
  locale: string;
  sectors: Sector[];
}

export default function BusinessPageClient({ locale, sectors }: BusinessPageClientProps) {
  const isMn = locale === "mn";

  return (
    <>
      {/* HERO / OVERVIEW */}
      <section className="w-full py-16 lg:py-24 bg-[#F0F4F8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-[32px] bg-white border border-black/5 px-5 sm:px-8 lg:px-12 pt-14 pb-12 lg:pt-16 lg:pb-14 overflow-hidden shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#EC6707]/5 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex justify-center mb-8">
                <div className="text-center">
                  <div className="text-[#EC6707] text-3xl sm:text-4xl font-bold tracking-[0.12em]">
                    UB GROUP
                  </div>
                  <p className="text-black/50 text-sm mt-1">
                    {isMn ? "Толгой компани" : "Head Company"}
                  </p>
                </div>
              </div>

              <div className="hidden lg:block absolute top-[96px] left-1/2 -translate-x-1/2 w-px h-8 bg-black/10" />

              <div className="relative z-10 flex flex-nowrap lg:grid lg:grid-cols-5 gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible pt-10 -mx-2 px-2 lg:mx-0 lg:px-0">
                <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-black/10" />
                {sectors.map((sector, index) => (
                  <div key={sector.id} className="relative min-w-[150px] flex-1">
                    <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-black/10" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="relative z-10 w-full min-h-[210px] rounded-2xl border border-black/5 bg-[#F8F9FA] p-4 text-center hover:bg-[#FFF5ED] hover:border-[#EC6707]/20 transition-colors"
                    >
                      <div className="text-[#EC6707] text-[10px] font-bold tracking-[0.2em] mb-2">
                        UB
                      </div>
                      <div className="text-black text-sm font-bold tracking-wide mb-2">
                        {isMn ? sector.nameMn : sector.nameEn}
                      </div>
                      <p className="text-black/60 text-xs leading-relaxed">
                        {isMn ? sector.summaryMn : sector.summaryEn}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUSINESS AREAS */}
      <section className="w-full py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#EC6707] uppercase mb-4 block">
              {isMn ? "Салбарууд" : "Sectors"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
              {isMn ? "Бизнесийн чиглэл" : "Business Areas"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/${locale}/business/${sector.id}`}
                  className="group relative block w-full h-[520px] rounded-[32px] overflow-hidden text-left shadow-lg"
                >
                  <div className="relative w-full h-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${sector.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="text-[#EC6707] text-xs font-bold tracking-[0.2em] mb-2">
                        UB
                      </div>
                      <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3">
                        {isMn ? sector.nameMn : sector.nameEn}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-3">
                        {isMn ? sector.cardDescMn : sector.cardDescEn}
                      </p>
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#EC6707] text-white text-sm font-semibold rounded-full hover:bg-[#B35405] transition-colors">
                        {isMn ? "Дэлгэрэнгүй" : "Details"}
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
