export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6 md:px-10" aria-label="Main navigation">
        <a href="#home" className="text-xl font-extrabold tracking-tight text-primary md:text-2xl">
          N.Rahe
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-accent/80 md:flex">
          <a href="#home" className="transition-colors hover:text-primary">Home</a>
          <a href="#about" className="transition-colors hover:text-primary">About</a>
          <a href="#education" className="transition-colors hover:text-primary">Education</a>
          <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
          <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
          <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
        </div>
      </nav>
    </header>
  );
}
