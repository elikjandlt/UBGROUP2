"use client";

import { motion } from "framer-motion";

const allProjects = [
  {
    title: "Vision Complex",
    category: "Mixed-use",
    location: "Zaisan",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "Vision Business Tower",
    category: "Office",
    location: "City Center",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    title: "Tokyo Garden",
    category: "Residential",
    location: "1,134 units",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    title: "Sky Park",
    category: "Mixed-use",
    location: "Bayanzurkh",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    title: "Skyland",
    category: "Mixed-use",
    location: "Sukhbaatar",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
  },
  {
    title: "Seoul Garden Complex",
    category: "Residential",
    location: "Khan-Uul",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full pt-40 pb-24 bg-[#1C1C1C]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C75B3A] mb-4 block uppercase">
              OUR PORTFOLIO
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              16+ World-Class
              <br />
              <span className="text-[#C75B3A]">Developments</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full bg-[#FAFAF8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg">
                  <div 
                    className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-[#C75B3A]/0 group-hover:bg-[#C75B3A]/10 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1 group-hover:text-[#C75B3A] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#737373]">
                  {project.category} • {project.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
