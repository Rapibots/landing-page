import Image, { StaticImageData } from 'next/image';

interface RightSectionProps {
  imageSource: StaticImageData;
  alt: string;
}

export const RightSection = ({ imageSource, alt }: RightSectionProps) => {
  return (
    <div className="hidden h-full w-full flex-1 py-8 lg:block">
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={imageSource}
          alt={alt}
          width={1000}
          className="max-w-xl"
          placeholder="blur"
        />
      </div>
    </div>
  );
};
