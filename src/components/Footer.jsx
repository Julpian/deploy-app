import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

// Komponen Social Links
const SocialLinks = () => {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/Julpian",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/lutfi-julpian-ba764a22a/",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ljulpian/?hl=en",
      icon: <FaInstagram className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/lutfijulpian",
      icon: <FaFacebook className="w-5 h-5" />,
    },
    {
      name: "Email",
      href: "lutfijulpian@gmail.com",
      icon: <FaEnvelope className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-neutral-300 hover:text-red-600 transition-colors duration-300"
          aria-label={`Kunjungi profil ${social.name} Lutfi Julpian`}
        >
          {social.icon}
          <span className="text-sm sm:text-base">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

// Komponen Copyright
const Copyright = () => (
  <p className="text-neutral-400 text-xs sm:text-sm">
    © {new Date().getFullYear()} Lutfi Julpian. All rights reserved.
  </p>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-neutral-800 py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center space-y-6">
        <SocialLinks />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;