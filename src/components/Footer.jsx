import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

// -- DIDESAIN ULANG: Komponen Ikon Sosial --
const SocialLinks = () => {
  const socials = [
    { name: "GitHub", href: "https://github.com/Julpian", icon: FaGithub },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/lutfi-julpian-ba764a22a/", icon: FaLinkedin },
    { name: "Instagram", href: "https://www.instagram.com/ljulpian/?hl=en", icon: FaInstagram },
    { name: "Facebook", href: "https://www.facebook.com/lutfijulpian", icon: FaFacebook },
    { name: "Email", href: "mailto:lutfijulpian@gmail.com", icon: FaEnvelope },
  ];

  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Kunjungi profil ${social.name} Lutfi Julpian`}
            // Efek hover baru dengan latar gradien dan ikon yang membesar
            className="group p-3 bg-neutral-800/50 rounded-full transition-all duration-300 hover:bg-gradient-to-br from-red-600/30 to-blue-600/30 hover:scale-110"
          >
            <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors duration-300" />
          </a>
        );
      })}
    </div>
  );
};

// -- Komponen Copyright (Tidak ada perubahan, tetap simpel) --
const Copyright = () => (
  <p className="text-neutral-500 text-sm">
    © {new Date().getFullYear()} Lutfi Julpian. All rights reserved.
  </p>
);


// -- DIDESAIN ULANG: Komponen Footer Utama --
const Footer = () => {
  return (
    <footer 
      className="relative bg-black text-white"
      // Latar belakang dengan pola jaring laba-laba halus
      style={{
        backgroundImage: `
          radial-gradient(circle at center, rgba(15, 23, 42, 0.1) 1px, transparent 1px),
          linear-gradient(to right, rgba(15, 23, 42, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '2rem 2rem',
      }}
    >
      {/* Garis gradien sebagai pemisah atas */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Tata letak responsif: berdampingan di layar besar, bertumpuk di layar kecil */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Copyright />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;