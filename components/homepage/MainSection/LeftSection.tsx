import Image, { StaticImageData } from 'next/image';

import { Button } from '@/components/Button';
import { ListItem } from '@/components/homepage/MainSection/ListItem';
import { useMediaQuery } from 'react-responsive';

interface LeftSectionProps {
  items: {
    title: string;
    description: string | React.ReactNode;
    image: StaticImageData;
  }[];
  openItem: number | null;
  setOpenItem: (openItem: number | null) => void;
}

export const LeftSection = ({
  items,
  openItem,
  setOpenItem,
}: LeftSectionProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="flex w-full max-w-md flex-1 flex-col justify-between gap-12 py-12 pb-0 md:pb-12">
      <div className="flex flex-col gap-6">
        <h3 className="font-serif text-6xl">
          Asistentes que sí son{' '}
          <span className="text-primary/90">inteligentes</span>
        </h3>
        <p className="text-neutral-600">
          Creamos asistentes 100% personalizados para tu negocio en tiempo
          record.
        </p>
        <Button>Agenda una demo</Button>
      </div>
      <ul className="flex w-full flex-col items-start justify-start">
        {items.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            open={openItem === index || isMobile}
            onOpenChange={() =>
              openItem === index
                ? setOpenItem(index + 1 > items.length - 1 ? 0 : index + 1)
                : setOpenItem(index)
            }
          >
            <p className="text-sm font-light">{item.description}</p>

            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={400}
              className="bg-neutral/10 mt-4 rounded-lg md:hidden"
            />
          </ListItem>
        ))}
      </ul>
    </div>
  );
};
