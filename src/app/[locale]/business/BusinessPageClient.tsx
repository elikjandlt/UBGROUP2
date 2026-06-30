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
      <section className="w-full py-12 lg:py-16 bg-[#F0F4F8]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-5 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-[40px] bg-white border border-black/5 px-4 sm:px-6 lg:px-8 pt-12 pb-10 lg:pt-14 lg:pb-12 overflow-hidden shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#EC6707]/5 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10 flex justify-center mb-10">
                <div className="text-center">
                  <div className="text-[#EC6707] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.12em]">
                    UB GROUP
                  </div>
                  <p className="text-black/50 text-base mt-2">
                    {isMn ? "Толгой компани" : "Head Company"}
                  </p>
                </div>
              </div>

              <div className="hidden lg:block absolute top-[104px] left-1/2 -translate-x-1/2 w-px h-10 bg-black/10" />

              <div className="relative z-10 flex flex-nowrap lg:grid lg:grid-cols-5 gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible pt-12 -mx-2 px-2 lg:mx-0 lg:px-0">
                <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-black/10" />
                {sectors.map((sector, index) => (
                  <div key={sector.id} className="relative min-w-[180px] flex-1">
                    <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-black/10" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="relative z-10 w-full min-h-[260px] rounded-3xl border border-black/5 bg-[#F8F9FA] p-5 text-center hover:bg-[#FFF5ED] hover:border-[#EC6707]/20 transition-colors"
                    >
                      <div className="text-[#EC6707] text-xs font-bold tracking-[0.2em] mb-3">
                        UB
                      </div>
                      <div className="text-black text-base lg:text-lg font-bold tracking-wide mb-3">
                        {isMn ? sector.nameMn : sector.nameEn}
                      </div>
                      <p className="text-black/60 text-sm leading-relaxed">
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
      <section className="w-full py-20 lg:py-28 bg-[#F0F4F8]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-5 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 lg:mb-20"
          >
            <span className="text-xs font-semibold tracking-[0.25em] text-[#EC6707] uppercase mb-4 block">
              {isMn ? "Салбарууд" : "Sectors"}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tight">
              {isMn ? "Бизнесийн чиглэл" : "Business Areas"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
                  className="group relative block w-full h-[460px] sm:h-[540px] lg:h-[620px] rounded-[40px] overflow-hidden text-left shadow-lg"
                >
                  <div className="relative w-full h-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${sector.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-12">
                      <div className="text-[#EC6707] text-xs sm:text-sm font-bold tracking-[0.2em] mb-3">
                        UB
                      </div>
                      <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                        {isMn ? sector.nameMn : sector.nameEn}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 line-clamp-3 max-w-2xl">
                        {isMn ? sector.cardDescMn : sector.cardDescEn}
                      </p>
                      <span className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#EC6707] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#B35405] transition-colors">
                        {isMn ? "Дэлгэрэнгүй" : "Details"}
                        <ArrowRight size={18} />
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
