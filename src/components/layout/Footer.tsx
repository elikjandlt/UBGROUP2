"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "mn";

  return (
    <footer className="w-full bg-[#1E3A5F]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo */}
          <div className="flex items-start">
            <Link href={`/${locale}`} className="text-xl font-bold tracking-[0.15em] text-white">
              UB GROUP
            </Link>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Хаяг:</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Монгол улс, Улаанбаатар хот,<br />
              Сүхбаатар дүүрэг, 1-р хороо, Эрүүл<br />
              мэндийн яамны баруун талд ITC<br />
              International Trade Center.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Холбоо барих:</h4>
            <p className="text-sm text-white/70">
              Утас: +976 7555-7775
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Сошиал сүлжээ:</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white hover:bg-white/20 transition-colors text-xs font-bold"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white hover:bg-white/20 transition-colors text-xs font-bold"
              >
                ig
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white hover:bg-white/20 transition-colors text-xs font-bold"
              >
                yt
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white hover:bg-white/20 transition-colors text-xs font-bold"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-white/50">
            © 2023 Улаанбаатар Групп ХХК
          </p>
        </div>
      </div>
    </footer>
  );
}
