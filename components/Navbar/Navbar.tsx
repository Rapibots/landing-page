import { Logo } from '@/components/Logo';

export const Navbar = () => {
  return (
    <nav className="bg-base border-accent/20 sticky top-0 z-50 h-14 w-full border-b">
      <div className="flex h-full max-w-7xl items-center justify-between font-semibold">
        <div className="flex items-center gap-1">
          <Logo className="fill-primary h-6 w-6 md:h-8 md:w-8" />
          <h1 className="text-secondary font-serif text-lg md:text-xl">
            Rapibots
          </h1>
        </div>
      </div>
    </nav>
  );
};
