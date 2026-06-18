"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Calendar } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    titleMn: "Vision Business Tower",
    titleEn: "Vision Business Tower",
    subtitleMn: "26 давхар үйлчилгээний ба оффисын барилга",
    subtitleEn: "26-storey service and office building",
    locationMn: "Хан-Уул дүүрэг, 2025",
    locationEn: "Khan-Uul District, 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 2,
    titleMn: "Seoul Garden Residence",
    titleEn: "Seoul Garden Residence",
    subtitleMn: "Орон сууцны хороолол",
    subtitleEn: "Residential complex",
    locationMn: "Хан-Уул дүүрэг, 2026",
    locationEn: "Khan-Uul District, 2026",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: 3,
    titleMn: "Central Park UB",
    titleEn: "Central Park UB",
    subtitleMn: "Олон үйлдэлт хөгжлийн төсөл",
    subtitleEn: "Mixed-use development",
    locationMn: "Хотын төв, 2026",
    locationEn: "City Center, 2026",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
  },
  {
    id: 4,
    titleMn: "ITC International Trade Center",
    titleEn: "ITC International Trade Center",
    subtitleMn: "Олон улсын худалдааны төв",
    subtitleEn: "International trade center",
    locationMn: "Сүхбаатар дүүрэг, 2024",
    locationEn: "Sukhbaatar District, 2024",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
  },
  {
    id: 5,
    titleMn: "UB Tower",
    titleEn: "UB Tower",
    subtitleMn: "Дээд зэрэглэлийн оффисын барилга",
    subtitleEn: "Premium office building",
    locationMn: "Баянзүрх дүүрэг, 2027",
    locationEn: "Bayanzurkh District, 2027",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80",
  },
  {
    id: 6,
    titleMn: "Eco City",
    titleEn: "Eco City",
    subtitleMn: "Тогтвортой хотын төсөл",
    subtitleEn: "Sustainable city project",
    locationMn: "Төв аймаг, 2028",
    locationEn: "Tuv Province, 2028",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
  },
];

const companies = [
  { id: 1, name: "UB Properties", nameMn: "UB Properties" },
  { id: 2, name: "UB Construction", nameMn: "UB Construction" },
  { id: 3, name: "UB Logistics", nameMn: "UB Logistics" },
  { id: 4, name: "UB Finance", nameMn: "UB Finance" },
  { id: 5, name: "UB Energy", nameMn: "UB Energy" },
  { id: 6, name: "UB Hospitality", nameMn: "UB Hospitality" },
  { id: 7, name: "UB Mining", nameMn: "UB Mining" },
  { id: 8, name: "UB Trading", nameMn: "UB Trading" },
];

const latestNews = [
  {
    id: 1,
    titleMn: "Vision Business Tower барилгын ажил ахицтай явагдаж байна",
    titleEn: "Vision Business Tower construction progresses",
    date: "2024.06.15",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    slug: "vision-business-tower-progress",
  },
  {
    id: 2,
    titleMn: "Зайсанд шинэ Yoshinoya салбар нээгдлээ",
    titleEn: "New Yoshinoya branch opens in Zaisan",
    date: "2024.05.28",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    slug: "yoshinoya-zaisan-opens",
  },
  {
    id: 3,
    titleMn: "UB Group шилдэг төсөл хэрэгжүүлэгч компаниар шалгарлаа",
    titleEn: "UB Group wins Best Project Implementing Company",
    date: "2024.04.10",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    slug: "ub-group-best-project-company",
  },
];

function MarqueeProjects({ locale }: { locale: string }) {
  const items = [...featuredProjects, ...featuredProjects];

  return (
    <div className="w-full overflow-hidden py-2">
      <div className="marquee-track">
        {items.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="flex-shrink-0 w-[340px] sm:w-[400px] md:w-[460px] mx-3 group"
          >
            <div className="relative h-[260px] sm:h-[300px] md:h-[340px] overflow-hidden rounded-lg bg-[#0A1628]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {locale === "mn" ? project.titleMn : project.titleEn}
                </h3>
                <p className="text-sm text-white/80 mb-2">
                  {locale === "mn" ? project.subtitleMn : project.subtitleEn}
                </p>
                <p className="text-xs text-white/60">
                  {locale === "mn" ? project.locationMn : project.locationEn}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MarqueeLogos({ locale }: { locale: string }) {
  const items = [...companies, ...companies];

  return (
    <div className="w-full overflow-hidden py-4">
      <div className="marquee-track-fast">
        {items.map((company, index) => (
          <div
            key={`${company.id}-${index}`}
            className="flex-shrink-0 w-[180px] sm:w-[220px] h-[100px] sm:h-[120px] mx-4 flex items-center justify-center bg-white rounded-lg border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-center px-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center">
                <span className="text-[#1E3A5F] font-bold text-sm sm:text-base">
                  {company.name.charAt(0)}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#1E293B]">
                {locale === "mn" ? company.nameMn : company.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "mn";

  const isMn = locale === "mn";

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                {isMn ? "Ирээдүйг бүтээгч" : "Building the Future"}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                {isMn
                  ? "UB group нь эрмэлзэл дүүрэн, дэвшилтэт хөгжилд тэмүүлэх хүслээр хэн бүхэнд нээлттэй, харилцан хүндэлэл бүхий нийгмийн тулгуур хамтралыг бүрдүүлж, тогтвортой эх дэлхийг бүтээгч, залууч эрч хүч нь байна."
                  : "UB Group builds Mongolia's future through investment, construction, and infrastructure. We create sustainable value and lasting partnerships across industries."}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/${locale}/about`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1E3A5F] text-sm font-semibold tracking-wide rounded-full hover:bg-[#F0F4F8] transition-colors"
                >
                  {isMn ? "Бидний тухай" : "About Us"}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={`/${locale}/business`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white text-sm font-semibold tracking-wide rounded-full hover:bg-white/10 transition-colors"
                >
                  {isMn ? "Бизнес" : "Business"}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#F0F4F8]/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 1 — FEATURED PROJECTS MARQUEE */}
      <section className="w-full py-20 sm:py-24 bg-[#0A1628]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10 sm:mb-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C9A227] uppercase mb-4 block">
                  {isMn ? "Онцлох төслүүд" : "Featured Projects"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {isMn ? "Онцлох төслүүд" : "Featured Projects"}
                </h2>
              </div>
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center gap-2 text-white/80 text-sm font-medium hover:text-white transition-colors"
              >
                {isMn ? "Бүх төслүүд" : "All Projects"}
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
        <MarqueeProjects locale={locale} />
      </section>

      {/* SECTION 2 — COMPANIES LOGO MARQUEE */}
      <section className="w-full py-20 sm:py-24 bg-[#F5F7FA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10 sm:mb-12">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#1E3A5F] uppercase mb-4 block">
              {isMn ? "Компаниуд" : "Companies"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-4">
              {isMn ? "Компаниуд болон охин компаниуд" : "Companies & Subsidiaries"}
            </h2>
            <p className="text-[#5A6B7C]">
              {isMn
                ? "UB Group-ийн бүрэлдэхүүн компаниуд олон салбарт үйл ажиллагаа явуулж байна."
                : "UB Group's subsidiaries operate across multiple sectors."}
            </p>
          </Reveal>
        </div>
        <MarqueeLogos locale={locale} />
      </section>

      {/* SECTION 3 — LATEST NEWS */}
      <section className="w-full py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-10 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.25em] text-[#1E3A5F] uppercase mb-4 block">
                  {isMn ? "Мэдээ мэдээлэл" : "News & Updates"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight">
                  {isMn ? "Мэдээ, мэдээлэл" : "Latest News"}
                </h2>
              </div>
              <Link
                href={`/${locale}/news`}
                className="inline-flex items-center gap-2 text-[#1E3A5F] text-sm font-medium hover:text-[#0F2744] transition-colors"
              >
                {isMn ? "Бүх мэдээ" : "All News"}
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {latestNews.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.1}>
                <Link
                  href={`/${locale}/news/${item.slug}`}
                  className="group block"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden rounded-xl bg-[#E2E8F0] mb-5">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#5A6B7C] mb-3">
                    <Calendar size={13} />
                    {item.date}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0A1628] group-hover:text-[#1E3A5F] transition-colors duration-300 line-clamp-2">
                    {isMn ? item.titleMn : item.titleEn}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
