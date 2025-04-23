import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../constants";

// Komponen Desktop Navigation
const DesktopNav = () => (
  <ul className="hidden lg:flex items-center space-x-8">
    {navItems.map((item, index) => (
      <li key={index}>
        <a
          href={item.href}
          className="relative text-neutral-300 hover:text-red-600 transition-colors duration-300 group"
          aria-label={`Navigasi ke ${item.label}`}
        >
          {item.label}
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
        </a>
      </li>
    ))}
  </ul>
);

// Komponen Mobile Navigation
const MobileNav = ({ isOpen, toggleNavbar }) => (
  <div
    className={`fixed top-0 left-0 z-20 bg-neutral-900 w-full h-screen p-6 flex flex-col justify-center items-center lg:hidden transform transition-transform duration-300 ${
      isOpen ? "translate-y-0" : "-translate-y-full"
    }`}
  >
    <button
      onClick={toggleNavbar}
      className="absolute top-4 right-4 text-neutral-300 hover:text-red-600"
      aria-label="Tutup menu navigasi"
    >
      <X size={24} />
    </button>
    <ul className="space-y-6 text-center">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            onClick={toggleNavbar}
            className="text-xl text-neutral-300 hover:text-red-600 transition-colors duration-300"
            aria-label={`Navigasi ke ${item.label}`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 py-4 bg-black/80 backdrop-blur-lg border-b border-neutral-800 transition-shadow ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Portofolio Lutfi
          </span>
        </div>
        <DesktopNav />
        <button
          onClick={toggleNavbar}
          className="lg:hidden text-neutral-300 hover:text-red-600"
          aria-label="Buka menu navigasi"
        >
          <Menu size={24} />
        </button>
      </div>
      <MobileNav isOpen={mobileDrawerOpen} toggleNavbar={toggleNavbar} />
    </nav>
  );
};

export default Navbar;