"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="flex min-h-[90vh] items-center justify-center bg-transparent px-6 py-20">
      <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-lg font-semibold uppercase tracking-[0.18em] text-primary"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 text-5xl font-black tracking-tight text-accent md:text-6xl"
          >
            Nusrat Rahe
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5 text-2xl font-semibold text-accent/80 md:text-3xl"
          >
            CSE Student &amp; Aspiring AI Researcher
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-8 max-w-xl leading-7 text-accent/70 md:mx-0"
          >
            I am passionate about Artificial Intelligence, Machine Learning,
            software development and research. I enjoy learning new technologies
            and building practical projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-4 md:justify-start"
          >
            <a
              href="#projects"
              className="rounded-lg border border-primary px-7 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-primary/20 px-7 py-3 font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.img
            src="/images/profile.png"
            alt="Nusrat Rahe"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-64 w-64 rounded-full border-4 border-teal-50 object-cover md:h-80 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;