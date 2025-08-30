'use client';

import { useState } from 'react';

import firstBenefit from '@/public/homepage/main-section/first-benefit.avif';
import secondBenefit from '@/public/homepage/main-section/second-benefit.avif';

import { LeftSection } from './LeftSection';
import { RightSection } from './RightSection';

const items = [
  {
    title: 'Hablan con tus clientes en segundos de forma natural',
    description: (
      <span className="flex flex-col gap-4">
        <span>
          Sin formularios, sin mensajes automáticos. Imágenes, notas de voz,
          incluso llamadas telefónicas, todo esto y más.
        </span>
        <span>
          Nuestros asistentes son inteligentes y pueden hacer cosas que ningún
          otro robot puede hacer.
        </span>
      </span>
    ),
    image: firstBenefit,
  },
  {
    title: 'Procesan pedidos y pagos automáticamente',
    description: (
      <span className="flex flex-col gap-4">
        <span>
          ¿Tus clientes desean pagar en línea? Sin problema. Podemos integrar
          tus métodos de pago sin dificultades.
        </span>
        <span>
          Integramos también tu sistema de ventas (Shopify, Woocommerce, etc.)
          para realizar pedidos a través de tu canales de ventas.
        </span>
        <span>
          Revisamos el estado de tus pedidos cuando el cliente lo consulte.
        </span>
      </span>
    ),
    image: secondBenefit,
  },
  {
    title: 'Actualizan tu inventario en tiempo real',
    description:
      'Y no solo eso, también te mantienen al tanto de la disponibilidad de tus productos. Te aseguramos de que nunca te quedes sin stock.',
    image: firstBenefit,
  },
];

export const MainSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const imageSource = openItem ? items[openItem].image : items[0].image;
  const alt = openItem ? items[openItem].title : items[0].title;

  return (
    <section className="flex w-full flex-col items-center justify-start md:min-h-screen md:flex-row md:justify-center">
      <div className="block h-fit w-full">
        <div className="mx-auto flex max-w-7xl flex-wrap items-stretch justify-evenly gap-16">
          <LeftSection
            items={items}
            openItem={openItem}
            setOpenItem={setOpenItem}
          />
          <RightSection imageSource={imageSource} alt={alt} />
        </div>
      </div>
    </section>
  );
};
