import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'bg-black text-white',
        'mt-2 w-fit px-4 py-2',
        'rounded-md',
        'cursor-pointer',
        'transition-all duration-300',
        'hover:bg-neutral-700',
        className,
      )}
      {...props}
    >
      Contacta con nosotros
    </button>
  );
};
