import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchDialog from "@/components/SearchDialog";
import UserMenu from "@/components/UserMenu";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "PlayStation", href: "/catalogo?platform=PlayStation" },
    { name: "Free Fire", href: "/catalogo?platform=Mobile" },
    { name: "Ofertas", href: "/catalogo" },
    { name: "Aliados", href: "/aliados" },
  ];

  return (
    <>
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src="https://imagedelivery.net/mdYNjHMfu0qYk6YLCukv2Q/07bccdde-7b1c-4dc0-e236-3a9f7b055f00/public"
                alt="TopLevel"
                loading="eager"
                className="h-10 w-auto md:h-11 lg:h-12 max-w-[160px] md:max-w-[190px] object-contain select-none"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-white hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-primary transition-colors"
                aria-label="Buscar"
              >
                <Search className="h-5 w-5" />
              </button>

              <UserMenu />

              <button
                className="md:hidden p-2 text-white"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Menú"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DialogContent className="sm:max-w-sm bg-card border-border p-0">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img
                src="https://imagedelivery.net/mdYNjHMfu0qYk6YLCukv2Q/07bccdde-7b1c-4dc0-e236-3a9f7b055f00/public"
                alt="TopLevel"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>
          <nav className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="py-3 px-4 rounded-lg text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
