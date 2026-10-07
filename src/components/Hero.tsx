"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="flex min-h-[90vh] items-center justify-center bg-transparent px-6 py-20">
      <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="h-64 w-64 overflow-hidden rounded-full border-4 border-teal-50 bg-gradient-to-br from-teal-100 via-cyan-50 to-slate-100 shadow-[0_20px_45px_rgba(15,118,110,0.12)] md:h-80 md:w-80"
          >
            <motion.img
              src="/images/profile.png"
              alt="Nusrat Rahe"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 18%" }}
            />
          </motion.div>
        </div>
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-3 text-lg font-semibold uppercase tracking-[0.18em] text-primary"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30, rotateX: -18 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-5 text-4xl font-black tracking-tight text-accent md:text-6xl"
          >
            Nusrat Rahe
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="mb-5 text-2xl font-semibold text-accent/80 md:text-3xl"
          >
            CSE Student &amp; Aspiring AI Researcher
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="mx-auto mb-8 max-w-xl leading-7 text-accent/70 md:mx-0"
          >
            I am passionate about Artificial Intelligence, Machine Learning,
            software development and research. I enjoy learning new technologies
            and building practical projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex justify-center gap-4 md:justify-start"
          >
            <a
              href="/resume"
              className="rounded-lg border border-primary bg-primary px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-110"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-primary/20 px-7 py-3 font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;