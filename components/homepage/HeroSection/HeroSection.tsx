'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import background from '@/public/homepage/hero-section/background.avif';
import foreground from '@/public/homepage/hero-section/foreground.avif';

export function HeroSection() {
  const skyInitial = { y: 100 };
  const skyAnimate = { y: 0 };

  const containersInitial = { scale: 1.8, opacity: 0 };
  const containersAnimate = { scale: 1, opacity: 1 };

  const textInitial = { opacity: 0, scale: 0.98, y: 10 };
  const textAnimate = { opacity: 1, scale: 1, y: 0 };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Sky background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={skyInitial}
        animate={skyAnimate}
        transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          alt="Sky background"
          src={background}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 80%' }}
          priority
        />
      </motion.div>

      {/* Containers foreground */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        initial={containersInitial}
        animate={containersAnimate}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          alt="Containers foreground"
          src={foreground}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 80%' }}
          priority
        />
      </motion.div>

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          className="max-w-3xl font-serif text-4xl tracking-tight text-white sm:text-6xl md:text-7xl"
          initial={textInitial}
          animate={textAnimate}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Automatiza tu negocio con IA
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-balance text-white/80 sm:text-lg"
          initial={textInitial}
          animate={textAnimate}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          Rapibots te ayuda a automatizar tu negocio. Tú decides qué hacer y
          nuestros Rapibots lo hacen por ti, tú te encargas de la mejor parte...
        </motion.p>
      </div>
    </section>
  );
}
