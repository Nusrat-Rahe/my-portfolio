"use client";

import { Download } from "lucide-react";
import Image from "next/image";

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-4xl py-8 text-accent print:max-w-none print:py-0">
      <div className="mb-5 flex justify-end print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
        >
          <Download size={16} aria-hidden="true" />
          Download as PDF
        </button>
      </div>

      <article className="border-t-4 border-primary bg-white px-7 py-8 shadow-lg sm:px-10 sm:py-10 print:border-x-0 print:border-b-0 print:px-0 print:py-2 print:shadow-none">
        <header className="flex items-center justify-between gap-6 border-b border-primary/20 pb-5">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Curriculum Vitae
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
              Nusrat Jahan Rahe
            </h1>
            <p className="mt-1 text-base font-medium text-primary">
              Computer Science &amp; Engineering Student
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-accent/70 sm:text-sm">
              <span>Sylhet, Bangladesh</span>
              <a href="mailto:nusratrahe2020@gmail.com" className="hover:text-primary">
                nusratrahe2020@gmail.com
              </a>
              <a href="tel:01888562491" className="hover:text-primary">
                01888562491
              </a>
            </div>
            <div className="mt-1 flex flex-wrap gap-x-4 text-xs text-accent/70 sm:text-sm">
              <a href="https://github.com/Nusrat-Rahe" className="hover:text-primary">
                github.com/Nusrat-Rahe
              </a>
              <a href="https://www.linkedin.com/in/nusrat-rahe" className="hover:text-primary">
                linkedin.com/in/nusrat-rahe
              </a>
            </div>
          </div>
          <Image
            src="/images/profile.png"
            alt="Portrait of Nusrat Jahan Rahe"
            width={120}
            height={140}
            priority
            className="h-28 w-24 shrink-0 rounded-xl border border-primary/15 object-cover object-top sm:h-36 sm:w-30 print:h-32 print:w-28"
          />
        </header>

        <div className="pt-5">
          <section>
            <h2 className="mb-2 border-b border-primary/15 pb-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Profile
            </h2>
            <p className="text-sm leading-6 text-accent/80">
              Computer Science and Engineering student interested in artificial intelligence,
              machine learning, software development, and research. Enjoys learning new
              technologies and building practical, user-focused projects.
            </p>
          </section>

          <div className="mt-5 space-y-5">
            <section>
              <h2 className="mb-2 border-b border-primary/15 pb-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Education
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold">
                    <h3>B.Sc. in Computer Science and Engineering</h3>
                  </div>
                  <p className="text-xs text-accent/60">2023 - Expected 2027</p>
                  <p className="text-accent/70">Metropolitan University, Sylhet, Bangladesh</p>
                  <p className="mt-1 text-xs font-medium text-primary">Chairman Scholarship Recipient</p>
                </div>
                <div>
                  <div className="font-semibold">
                    <h3>Higher Secondary Certificate, Science</h3>
                  </div>
                  <p className="text-xs text-accent/60">2019 - 2020</p>
                  <p className="text-accent/70">Murari Chand College, Sylhet, Bangladesh</p>
                </div>
                <div>
                  <div className="font-semibold">
                    <h3>Secondary School Certificate, Science</h3>
                  </div>
                  <p className="text-xs text-accent/60">2018 - 2019</p>
                  <p className="text-accent/70">Rukeya Khatun Lyceum School, Sylhet, Bangladesh</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-2 border-b border-primary/15 pb-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Technical Skills
              </h2>
              <div className="space-y-2 text-sm text-accent/80">
                <p><span className="font-semibold text-accent">Frontend:</span> React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS</p>
                <p><span className="font-semibold text-accent">Backend:</span> Node.js, MySQL</p>
                <p><span className="font-semibold text-accent">Languages:</span> Python, C, C++, Java</p>
                <p><span className="font-semibold text-accent">Tools:</span> GitHub, Vercel, Google Colab</p>
              </div>
            </section>

            <section>
              <h2 className="mb-2 border-b border-primary/15 pb-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Projects
              </h2>
              <div className="space-y-3 text-sm">
                <div>
                  <h3 className="font-semibold">BookBd</h3>
                  <p className="text-accent/70">
                    Book discovery and browsing platform built with PHP, MySQL, and JavaScript.
                  </p>
                  <a href="https://github.com/Nusrat-Rahe/shop_db" className="text-xs text-primary hover:underline">
                    github.com/Nusrat-Rahe/shop_db
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold">QuizBuzz</h3>
                  <p className="text-accent/70">
                    Interactive quiz platform built with Java and Swing.
                  </p>
                  <a href="https://github.com/Nusrat-Rahe/QuizzBuzz" className="text-xs text-primary hover:underline">
                    github.com/Nusrat-Rahe/QuizzBuzz
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
}
