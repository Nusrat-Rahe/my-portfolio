export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2 border-t border-b border-primary/10 text-center">
      <div className="space-y-4">
        <p className="text-sm font-bold tracking-widest text-accent">
          N.<span className="text-primary">RAHE</span>
        </p>
        <p className="text-xs text-accent/40">
          &copy; {currentYear} Nusrat Jahan Rahe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
