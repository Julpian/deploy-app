import { certifications } from "../constants"; // Pastikan path ini benar
import bgImage from '../assets/spid.jpg'; // DITAMBAHKAN: Impor gambar latar

// Komponen Header Sertifikasi dengan tema
const CertificationHeader = () => (
  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center my-8 sm:my-12 lg:my-16 text-white font-bold tracking-tight">
    <span className="bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
      Certifications
    </span>
  </h2>
);

// Komponen Kartu Sertifikasi dengan tema
const CertificationCard = ({ certification, index }) => (
  <div
    className="w-full px-3 py-3 animate-fadeIn"
    style={{ animationDelay: `${index * 100}ms` }}
    role="article"
    aria-labelledby={`certification-title-${index}`}
  >
    <div className="bg-neutral-900 rounded-xl p-5 border border-neutral-800 hover:border-blue-600/50 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
      <img
        className="w-full h-32 sm:h-40 object-cover rounded-md mb-4"
        src={certification.image}
        alt={certification.title}
        loading="lazy"
      />
      <h3
        id={`certification-title-${index}`}
        className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-blue-500 transition-colors duration-300"
      >
        {certification.title}
      </h3>
      <p 
        className="text-sm italic text-red-400 mb-3"
      >
        {certification.provider}
      </p>
      <p className="text-sm text-neutral-300 line-clamp-3">
        {certification.description}
      </p>
      <a
        href={certification.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-gradient-to-r from-red-600 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-red-700 hover:to-blue-700 transition-all duration-300"
        aria-label={`Lihat detail sertifikasi ${certification.title}`}
      >
        See Details
      </a>
    </div>
  </div>
);

const Certifications = () => {
  return (
    // DIUBAH: Dihapus bg-black dan ditambahkan 'relative'
    <section
      id="certifications"
      className="relative text-white py-12 sm:py-16"
    >
      {/* DITAMBAHKAN: Latar belakang, overlay, dan gradien */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 -z-10 bg-black/70"></div> {/* Opasitas bisa disesuaikan */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>

      {/* DIUBAH: Ditambahkan 'relative z-10' pada container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <CertificationHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.length > 0 ? (
            certifications.map((certification, index) => (
              <CertificationCard
                key={index}
                certification={certification}
                index={index}
              />
            ))
          ) : (
            <p className="text-center text-neutral-400 col-span-full">
              Belum ada sertifikasi yang tersedia.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;