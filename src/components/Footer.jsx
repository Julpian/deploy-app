const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="flex flex-col items-center space-y-4">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Julpian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lutfi-julpian-ba764a22a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/ljulpian/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/lutfijulpian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white"
          >
            Facebook
          </a>
          <a
            href="lutfijulpian@gmail.com"
            className="text-neutral-300 hover:text-white"
          >
            Gmail
          </a>
        </div>

        {/* Copyright */}
        <p className="text-neutral-400 text-sm">
          © {new Date().getFullYear()} Lutfi Julpian. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
