import { certifications } from "../constants";

// Komponen Header Sertifikasi
const CertificationHeader = () => (
  <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center my-8 sm:my-12 lg:my-16 text-white font-bold tracking-tight">
    Certifications
  </h2>
);

// Komponen Kartu Sertifikasi
const CertificationCard = ({ certification, index }) => (
  <div
    className="w-full px-3 py-3 animate-fadeIn"
    style={{ animationDelay: `${index * 100}ms` }}
    role="article"
    aria-labelledby={`certification-title-${index}`}
  >
    <div className="bg-[#1a1a1a] rounded-xl p-5 border border-neutral-700 hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <img
        className="w-full h-32 sm:h-40 object-cover rounded-md mb-4"
        src={certification.image}
        alt={certification.title}
        loading="lazy"
      />
      <h3
        id={`certification-title-${index}`}
        className="text-base sm:text-lg font-semibold text-white mb-1"
      >
        {certification.title}
      </h3>
      <p className="text-sm italic text-neutral-400 mb-3">
        {certification.provider}
      </p>
      <p className="text-sm text-neutral-300 line-clamp-3">
        {certification.description}
      </p>
      {/* Diubah: Tombol gradien merah menjadi biru */}
      <a
        href={certification.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
        aria-label={`Lihat detail sertifikasi ${certification.title}`}
      >
        see details
      </a>
    </div>
  </div>
);

const Certifications = () => {
  return (
    <section
      id="sertifikasi"
      className="bg-black text-white py-12 sm:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6">
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