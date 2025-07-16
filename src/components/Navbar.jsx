import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../constants";

// -- DIDESAIN ULANG: Komponen Desktop Navigation --
const DesktopNav = () => (
  <ul className="hidden lg:flex items-center space-x-8">
    {navItems.map((item, index) => (
      <li key={index}>
        <a
          href={item.href}
          className="relative text-neutral-300 hover:text-white transition-colors duration-300 group text-lg"
          aria-label={`Navigasi ke ${item.label}`}
        >
          {item.label}
          {/* Garis bawah sekarang menggunakan gradien merah-biru */}
          <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-red-600 to-blue-600 transition-all duration-300 group-hover:w-full" />
        </a>
      </li>
    ))}
  </ul>
);

// -- DIDESAIN ULANG: Komponen Mobile Navigation --
const MobileNav = ({ isOpen, toggleNavbar }) => (
  <div
    className={`fixed top-0 left-0 z-40 w-full h-screen p-6 flex flex-col justify-center items-center lg:hidden transform transition-transform duration-500 ease-in-out ${
      isOpen ? "translate-y-0" : "-translate-y-full"
    } bg-neutral-950 bg-[radial-gradient(circle_at_center,_rgba(150,150,150,0.1)_0%,_rgba(0,0,0,0)_60%)]`}
  >
    <ul className="space-y-8 text-center">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            onClick={toggleNavbar}
            // Efek hover dan ukuran teks disesuaikan
            className="text-3xl font-medium text-neutral-300 hover:bg-gradient-to-r from-red-600 to-blue-600 hover:text-transparent bg-clip-text transition-all duration-300"
            aria-label={`Navigasi ke ${item.label}`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// -- DIDESAIN ULANG: Komponen Navbar Utama --
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
      // Efek transisi saat di-scroll
      className={`sticky top-0 z-50 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-neutral-800 shadow-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <a href="#" className="text-xl font-bold tracking-tight">
            {/* Nama brand dengan gradien khas Spider-Man */}
            <span className="bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
              Lutfi Julpian
            </span>
          </a>
        </div>
        
        <DesktopNav />

        <div className="lg:hidden">
          <button onClick={toggleNavbar} aria-label="Buka atau tutup menu navigasi">
            {/* Tombol menu sekarang memiliki efek transisi buka/tutup */}
            {mobileDrawerOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
      <MobileNav isOpen={mobileDrawerOpen} toggleNavbar={toggleNavbar} />
    </nav>
  );
};

export default Navbar;