"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const news = [
  {
    id: "vision-business-tower-progress",
    title: "Vision Business Tower-ийн бүтээн байгуулалт өрнөж байна",
    date: "2024.12.15",
    excerpt: "Улаанбаатар хотод шинэ оффис, орон сууцны төсөл өрнөж байна. Энэхүү төсөл нь олон улсын стандартад нийцсэн А зэрэглэлийн барилга юм.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    category: "Барилга",
  },
  {
    id: "sustainability-report-2024",
    title: "Тогтвортой хөгжлийн тайлан 2024",
    date: "2024.11.28",
    excerpt: "2024 оны тогтвортой хөгжлийн тайлангаа танилцууллаа. Байгаль орчны нөлөөллийг 30% бууруулсан.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
    category: "Тогтвортой хөгжил",
  },
  {
    id: "ub-group-best-project-company",
    title: "Шилдэг төсөл хэрэгжүүлэгч компани",
    date: "2024.11.10",
    excerpt: "Barilga EXPO 2024 олон улсын үзэсгэлэн яармагт шилдэг төсөл хэрэгжүүлэгч компаниар шалгарлаа.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Шагнал",
  },
  {
    id: "international-partnership",
    title: "Олон улсын хамтын ажиллагаа өргөжив",
    date: "2024.10.25",
    excerpt: "Олон улсын томоохон компаниудтай хамтын ажиллагаагаа өргөжүүллээ. Шинэ технологи нэвтрүүлэхээр боллоо.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    category: "Хамтын ажиллагаа",
  },
  {
    id: "solar-station-operational",
    title: "Нарны цахилгаан станц ашиглалтанд орлоо",
    date: "2024.10.15",
    excerpt: "Дундговь аймагт баригдсан 10МВт хүчин чадалтай нарны цахилгаан станц ашиглалтанд орлоо.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    category: "Эрчим хүч",
  },
  {
    id: "employee-awards",
    title: "Ажилтнуудаа шагналаа",
    date: "2024.09.30",
    excerpt: "Оны шилдэг ажилтнуудаа шагналаа. Манай хамт олонгийн хөдөлмөрийг үнэлж, урамшуулж байна.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    category: "Нийгмийн хариуцлага",
  },
  {
    id: "central-park-ub",
    title: "Central Park UB төслийг танилцууллаа",
    date: "2024.09.15",
    excerpt: "Хотын төвд ногоон байгууламж, орчин үеийн дизайн бүхий Central Park UB төслийг танилцууллаа.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
    category: "Барилга",
  },
  {
    id: "csr-tree-planting",
    title: "Нийгмийн хариуцлагын хүрээнд мод тарилаа",
    date: "2024.08.28",
    excerpt: "Байгаль орчноо хамгаалах зорилгоор 1000 гаруй мод тарьж, ногоон байгууламж бий болголоо.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    category: "Тогтвортой хөгжил",
  },
  {
    id: "top-100-enterprise",
    title: "Монгол Улсын ТОП-100 аж ахуйн нэгж",
    date: "2024.08.10",
    excerpt: "Монгол Улсын ТОП-100 аж ахуйн нэгжийн эхний эгнээнд багтлаа.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Шагнал",
  },
  {
    id: "logistics-fleet-expansion",
    title: "Тээврийн парк шинэчлэлээ",
    date: "2024.07.22",
    excerpt: "Стандартын шаардлага хангасан шинэ тээврийн хэрэгслээр паркаа өргөтгөлөө.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    category: "Хамтын ажиллагаа",
  },
  {
    id: "yoshinoya-zaisan-opens",
    title: "Yoshinoya Зайсан салбар нээгдлээ",
    date: "2024.06.30",
    excerpt: "Yoshinoya олон улсын эрүүл түргэн хоолны сүлжээний Зайсан салбар нээгдлээ.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    category: "Нийгмийн хариуцлага",
  },
  {
    id: "renewable-energy-goals",
    title: "Сэргээгдэх эрчим хүчний зорилтоо танилцууллаа",
    date: "2024.06.12",
    excerpt: "2030 он гэхэд эрчим хүчний хэрэглээний 50%-ийг сэргээгдэх эрчим хүчнээс хангах зорилт тавив.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    category: "Эрчим хүч",
  },
];

const categories = [
  "Бүгд",
  "Барилгын төслүүд",
  "Санхүү, хөрөнгө оруулалт",
  "Тээвэр",
  "Лайфстайл",
  "Менежмент",
  "Бусад",
];

const CATEGORY_MAP: Record<string, string[]> = {
  "Барилгын төслүүд": ["Барилга"],
  "Санхүү, хөрөнгө оруулалт": ["Санхүү", "Хөрөнгө оруулалт", "Шагнал"],
  "Тээвэр": ["Тээвэр", "Логистик", "Эрчим хүч"],
  "Лайфстайл": ["Лайфстайл", "Хамтын ажиллагаа", "Нийгмийн хариуцлага"],
  "Менежмент": ["Менежмент"],
  "Бусад": [],
};

const INITIAL_ROWS = 2;
const CARDS_PER_ROW = 3;
const INITIAL_COUNT = INITIAL_ROWS * CARDS_PER_ROW;

export default function NewsPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "mn";

  const [activeCategory, setActiveCategory] = useState("Бүгд");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filteredNews = useMemo(() => {
    if (activeCategory === "Бүгд") return news;

    const mappedCategories = CATEGORY_MAP[activeCategory] || [];
    if (activeCategory === "Бусад") {
      const allMapped = Object.values(CATEGORY_MAP).flat();
      return news.filter((item) => !allMapped.includes(item.category));
    }

    return news.filter((item) => mappedCategories.includes(item.category));
  }, [activeCategory]);

  const visibleNews = filteredNews.slice(0, visibleCount);
  const hasMore = visibleCount < filteredNews.length;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(INITIAL_COUNT);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + CARDS_PER_ROW, filteredNews.length));
  };

  return (
    <>
      {/* HERO */}
      <section className="relative w-full pt-24 pb-16 overflow-hidden bg-[#000000]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/70 via-[#000000]/40 to-[#000000]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#EC6707] uppercase mb-4 block">
              МЭДЭЭ
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 tracking-tight">
              Мэдээлэл
            </h1>
          </motion.div>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="w-full py-24 bg-[#F0F4F8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* FILTER */}
          <Reveal className="mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#EC6707] text-white shadow-md"
                      : "bg-white text-[#334155] border border-[#E2E8F0] hover:border-[#EC6707] hover:text-[#EC6707]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleNews.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.08}>
                <Link
                  href={`/${locale}/news/${item.id}`}
                  className="group relative block w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="inline-block px-3 py-1.5 mb-4 bg-[#EC6707]/90 backdrop-blur-sm text-white text-[11px] font-medium tracking-wider uppercase rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-[11px] text-white/70 mb-3">
                      <Calendar size={12} />
                      {item.date}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 leading-snug line-clamp-2 group-hover:text-[#EC6707] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 line-clamp-2 mb-4">{item.excerpt}</p>
                    <div className="inline-flex items-center gap-1 text-[#EC6707] text-sm font-semibold">
                      Дэлгэрэнгүй
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* LOAD MORE */}
          {hasMore && (
            <Reveal className="flex justify-center mt-14">
              <button
                onClick={handleLoadMore}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white border border-[#E2E8F0] text-[#334155] text-sm font-semibold rounded-full hover:border-[#EC6707] hover:text-[#EC6707] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Цааш үргэлжлүүлэх
                <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
