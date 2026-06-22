'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, X } from 'lucide-react';
import type { Sector, Project } from '@/lib/business-data';

function ProjectDrawer({
  project,
  locale,
  onClose,
}: {
  project: Project;
  locale: string;
  onClose: () => void;
}) {
  const isMn = locale === 'mn';
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className='fixed inset-0 z-50 flex justify-end'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className='absolute inset-0 bg-black/50'
      />

      <motion.div
        ref={scrollRef}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className='relative w-full sm:w-[640px] lg:w-[720px] h-full bg-white overflow-y-auto shadow-2xl'
      >
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors'
          aria-label={isMn ? 'Хаах' : 'Close'}
        >
          <X size={22} className='text-black/70' />
        </button>

        <div className='grid grid-cols-2 gap-0'>
          {project.gallery.map((img, i) => (
            <div
              key={i}
              className='h-48 sm:h-64 bg-cover bg-center'
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}
        </div>

        <div className='p-6 sm:p-8'>
          <h2 className='text-2xl sm:text-3xl font-bold text-black mb-2'>
            {isMn ? project.titleMn : project.titleEn}
          </h2>

          <div className='flex flex-wrap gap-4 text-sm text-black/70 mb-6'>
            <div>
              <span className='font-semibold text-black'>{isMn ? 'Байршил:' : 'Location:'}</span>{' '}
              {isMn ? project.locationMn : project.locationEn}
            </div>
            <div>
              <span className='font-semibold text-black'>{isMn ? 'Хугацаа:' : 'Timeline:'}</span>{' '}
              {isMn ? project.timelineMn : project.timelineEn}
            </div>
          </div>

          <p className='text-black/70 leading-relaxed mb-8'>
            {isMn ? project.detailMn : project.detailEn}
          </p>

          <h3 className='font-bold text-black mb-3'>
            {isMn ? 'Үндсэн онцлог' : 'Key features'}
          </h3>
          <ul className='list-disc pl-5 space-y-1.5 text-black/70 mb-8'>
            {(isMn ? project.featuresMn : project.featuresEn).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <button className='inline-flex items-center gap-2 px-6 py-3 border border-black rounded-full text-sm font-semibold hover:bg-black hover:text-white transition-colors'>
            {isMn ? 'Төслийн вэб рүү зочлох' : 'Visit project website'}
            <ExternalLink size={16} />
          </button>

          <div className='mt-8'>
            <div
              className='h-72 w-full bg-cover bg-center rounded-2xl'
              style={{ backgroundImage: `url('${project.mapImage}')` }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SectorProjectsClient({
  sector,
  locale,
}: {
  sector: Sector;
  locale: string;
}) {
  const isMn = locale === 'mn';
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className='w-full py-20 lg:py-28 bg-[#F8F9FB]'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mb-10'>
          <Link
            href={`/${locale}/business`}
            className='inline-flex items-center gap-2 text-sm font-semibold text-[#EC6707] hover:text-[#B35405] mb-4'
          >
            <ArrowLeft size={16} />
            {isMn ? 'Бизнесийн чиглэл рүү буцах' : 'Back to business areas'}
          </Link>
          <h1 className='text-3xl sm:text-4xl font-bold text-black tracking-tight mb-3'>
            {isMn ? sector.nameMn : sector.nameEn}
          </h1>
          <p className='text-black/60 max-w-3xl leading-relaxed'>
            {isMn ? sector.cardDescMn : sector.cardDescEn}
          </p>
        </div>

        <h2 className='text-sm font-semibold tracking-wider text-black/50 uppercase mb-6'>
          {isMn ? 'Төслүүд' : 'Projects'}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {sector.projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className='bg-white rounded-2xl border border-black/5 p-6 shadow-sm hover:shadow-lg transition-shadow'
            >
              <div
                className='h-40 w-full rounded-xl bg-cover bg-center mb-5'
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <h3 className='text-lg font-bold text-black mb-2'>
                {isMn ? project.titleMn : project.titleEn}
              </h3>
              <p className='text-sm text-black/60 line-clamp-2 mb-5'>
                {isMn ? project.summaryMn : project.summaryEn}
              </p>
              <button
                onClick={() => setSelectedProject(project)}
                className='inline-flex items-center gap-2 px-5 py-2.5 bg-[#EC6707] text-white text-sm font-semibold rounded-full hover:bg-[#B35405] transition-colors'
              >
                {isMn ? 'Дэлгэрэнгүй' : 'Details'}
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDrawer
            key={selectedProject.id}
            project={selectedProject}
            locale={locale}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
