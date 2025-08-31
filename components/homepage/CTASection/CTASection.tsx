import { Button } from '@/components/Button';

import Image from 'next/image';

import family from '@/public/homepage/cta-section/family.avif';
import agent from '@/public/homepage/cta-section/agent.avif';

export const CTASection = () => {
  return (
    <section className="mb-8 w-full p-2 md:min-h-screen md:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col flex-wrap gap-8 rounded-xl bg-stone-200/50 p-8 md:min-h-[80%] md:gap-4 md:p-16">
        <h3 className="font-serif text-3xl md:text-6xl">
          Control total de tu negocio,{' '}
          <span className="text-primary">en un solo lugar.</span>
        </h3>
        <p className="text-neutral-600">
          Nuestros Rapibots te ayudan a gestionar tu negocio de forma eficiente
          y sencilla.
        </p>
        <Button className="self-center">Contáctanos</Button>
        <div className="bg-secondary/60 relative my-6 grid w-full grid-cols-1 overflow-hidden rounded-lg p-0 md:grid-cols-2 md:p-4">
          <div className="relative h-[25dvh] w-full md:h-[60dvh]">
            <Image
              fill
              src={family}
              alt="Family"
              className="object-cover brightness-40"
            />
          </div>
          <div className="relative h-[25dvh] w-full md:h-[60dvh]">
            <Image
              fill
              src={agent}
              alt="Agent"
              className="object-cover brightness-40"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-0 md:p-8">
            <div className="flex items-center justify-center bg-neutral-50 p-2 md:bg-neutral-300/50 md:p-8">
              <p className="text-center font-serif font-medium text-neutral-700 md:text-left md:text-xl md:text-neutral-100">
                Mientras tu descansas, nuestros Rapibots trabajan por ti
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
