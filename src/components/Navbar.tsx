import { ShoppingCart, Search, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import SearchDialog from "@/components/SearchDialog";
import UserMenu from "@/components/UserMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  const navItems = [
    { name: "PlayStation", href: "/catalogo?platform=PlayStation" },
    { name: "Free Fire", href: "/catalogo?platform=Mobile" },
    { name: "Ofertas", href: "/catalogo" },
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
                className="
                  h-10 w-auto
                  md:h-11 lg:h-12
                  max-w-[160px] md:max-w-[190px]
                  object-contain
                  select-none
                "
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
                onClick={() => setIsOpen(true)}
                className="relative p-2 text-white hover:text-primary transition-colors"
                aria-label="Carrito"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 bg-primary text-primary-foreground text-[10px] leading-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                className="md:hidden p-2 text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menú"
                aria-expanded={isMenuOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-sm font-medium text-white hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
