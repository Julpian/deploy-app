import React, { useState } from "react";
// ... (semua import gambar Anda tetap sama)
import bri from "../assets/intership/bri.jpg";
import bri1 from "../assets/intership/bri1.jpg";
import kkn1 from "../assets/intership/kkn1.jpg";
import kkn2 from "../assets/intership/kkn2.jpg";
import kkn3 from "../assets/intership/kkn3.jpg";
import bps from "../assets/intership/bps.jpg";
import bps1 from "../assets/intership/bps1.jpg";
import bps2 from "../assets/intership/bps2.jpg";
import ge1 from "../assets/intership/ge1.png";
import ge2 from "../assets/intership/ge2.png";
import ge3 from "../assets/intership/ge3.png";
import pen from "../assets/intership/pendidikan.jpg";
import pen1 from "../assets/intership/pendidikan1.jpg";
import pen2 from "../assets/intership/pendidikan2.jpg";
import doc1 from "../assets/intership/doc1.png";
import doc2 from "../assets/intership/doc2.jpg";
import IT1 from "../assets/intership/IT1.jpg";
import IT2 from "../assets/intership/IT2.jpg";
import IT3 from "../assets/intership/IT3.jpg";
import IT4 from "../assets/itbootcamp.jpg";
import briLogo from "../assets/bri.png";
import kknLogo from "../assets/kkn.png";
import greatEduLogo from "../assets/greatedu.png";
import bpsLogo from "../assets/bps.jpeg";
import hmif from "../assets/hmif.png";

const internships = [
  // Data Anda tidak perlu diubah
  { company: "Himpunan Mahasiswa Informatika (HMIF) Siliwangi University", position: "Head of Education Division", period: "Dec 2022 - Nov 2023", description: "Facilitated student development in skills and insights, collaborated with educational institutions, and supported competitions, delegations, and scientific discussions in Informatics.", documentation: [pen, pen1, pen2], logo: hmif },
  { company: "BRI", position: "Document Control Intern", period: "Jun 2023 - Aug 2023", description: "Managed loan-related documents, ensuring proper storage and administration of proofs and ongoing loans.", documentation: [bri, bri1], logo: briLogo },
  { company: "Himpunan Mahasiswa Informatika (HMIF) Siliwangi University", position: "Head of Department of Education", period: "Dec 2023 - Nov 2024", description: "Overseeing three divisions, leading national events, ensuring impactful and student-focused programs.", documentation: [doc1, doc2], logo: hmif },
  { company: "Kuliah Kerja Nyata (KKN) Margacinta Village", position: "Deputy Secretary", period: "Dec 2023 - Feb 2024", description: "Managed invitation letters to village heads and key figures, and compiled daily activity reports.", documentation: [kkn1, kkn2, kkn3], logo: kknLogo },
  { company: "GreatEdu Global Mahardika", position: "Data Science Bootcamp Participant", period: "Feb 2024 - Jun 2024", description: "Completed a data science bootcamp focusing on predictive modeling and data visualization using Python.", documentation: [ge1, ge2, ge3], logo: greatEduLogo },
  { company: "Badan Pusat Statistik (BPS)", position: "Survey Data Specialist Intern", period: "Aug 2024 - Sep 2024", description: "Created survey forms, processed Excel data for clarity, and performed rice price predictions.", documentation: [bps, bps1, bps2], logo: bpsLogo },
  { company: "IT BOOTCAMP HMIF UNSIL", position: "Data Science Mentor", period: "Mei 2025 - Jun 2025", description: "For a week, students are guided to understand the fundamentals of Data Science, build simple AI models, and implement them into an appealing and functional visual interface. This program emphasizes the hands-on application of AI solutions.", documentation: [IT1, IT2, IT3], logo: IT4 },
];

const ExperienceSection = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleOpenModal = (internship) => {
    setSelectedInternship(internship);
    setCarouselIndex(0);
  };
  const handleCloseModal = () => setSelectedInternship(null);
  const nextSlide = () => {
    if (selectedInternship) {
      setCarouselIndex((prev) => (prev + 1) % selectedInternship.documentation.length);
    }
  };
  const prevSlide = () => {
    if (selectedInternship) {
      setCarouselIndex((prev) => (prev === 0 ? selectedInternship.documentation.length - 1 : prev - 1));
    }
  };

  return (
    <section id="experience" className="bg-black text-white relative py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* DIUBAH: Gradien disesuaikan dengan tema merah-biru */}
          <span className="inline-block bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-full text-xs sm:text-sm font-medium px-4 py-1 uppercase">
            My Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-6 font-bold tracking-tight text-white">
            My Professional{" "}
            {/* DIUBAH: Gradien disesuaikan dengan tema merah-biru */}
            <span className="bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
              Journey
            </span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-neutral-800 hidden lg:block"></div>

          {internships.map((internship, index) => {
            const isEven = index % 2 === 0;
            const timelineDotColor = isEven ? "border-red-600" : "border-blue-600";
            const cardHoverEffect = isEven 
              ? "hover:shadow-red-600/20 hover:border-red-600/50" 
              : "hover:shadow-blue-600/20 hover:border-blue-600/50";
            const companyColor = isEven ? "text-red-500" : "text-blue-500";
            const cardAlignment = isEven 
              ? 'lg:pr-12 lg:ml-auto' 
              : 'lg:pl-12 lg:mr-auto';

            return (
              <div key={index} className="relative mb-12">
                {/* DIUBAH: Titik timeline memiliki warna selang-seling */}
                <div className={`absolute left-1/2 top-4 -translate-x-1/2 w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center border-2 ${timelineDotColor} hidden lg:flex`}>
                  <img src={internship.logo} alt={`${internship.company} logo`} className="w-8 h-8 rounded-full object-cover"/>
                </div>

                {/* DIUBAH: Kartu memiliki efek hover & alignment sesuai posisi */}
                <div className={`lg:w-1/2 p-6 rounded-xl bg-neutral-900 border border-neutral-800 shadow-lg transition-all duration-300 ${cardAlignment} ${cardHoverEffect}`}>
                  
                  <div className="flex items-center gap-4 mb-3 lg:hidden">
                    <img src={internship.logo} alt="" className="w-10 h-10 rounded-full object-cover border-2 border-neutral-700"/>
                    <div>
                      {/* DIUBAH: Warna nama perusahaan selang-seling */}
                      <h3 className={`text-lg sm:text-xl font-bold ${companyColor}`}>{internship.company}</h3>
                      <p className="text-xs sm:text-sm text-neutral-500">{internship.period}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <h3 className={`text-lg sm:text-xl font-bold ${companyColor}`}>{internship.company}</h3>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">{internship.period}</p>
                  </div>

                  <h4 className="text-md sm:text-lg font-semibold mt-3 text-white">
                    {internship.position}
                  </h4>
                  <p className="text-sm text-neutral-400 mt-2">
                    {internship.description}
                  </p>
                  {/* DIUBAH: Tombol menggunakan gradien merah-biru yang konsisten */}
                  <button
                    onClick={() => handleOpenModal(internship)}
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-red-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-red-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                    aria-label={`View documentation for ${internship.company}`}
                  >
                    View Documentation
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Carousel - Diperbarui untuk sentuhan premium */}
      {selectedInternship && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4" role="dialog" aria-modal="true" onClick={handleCloseModal}>
          <div className="bg-neutral-900 p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg border border-neutral-700" onClick={(e) => e.stopPropagation()}>
            {/* DIUBAH: Judul modal menggunakan gradien untuk tampilan premium */}
            <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
              {selectedInternship.company}
            </h3>
            <h4 className="text-sm sm:text-md font-semibold mt-1 text-blue-400">
              {selectedInternship.position}
            </h4>
            <div className="mt-4 relative">
              <img src={selectedInternship.documentation[carouselIndex]} alt={`Documentation ${carouselIndex + 1}`} className="w-full h-48 sm:h-64 object-contain rounded-md shadow-md" loading="lazy" />
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 sm:px-4">
                <button onClick={prevSlide} className="bg-neutral-800/70 text-white p-2 rounded-full hover:bg-neutral-700 transition-colors">◀</button>
                <button onClick={nextSlide} className="bg-neutral-800/70 text-white p-2 rounded-full hover:bg-neutral-700 transition-colors">▶</button>
              </div>
            </div>
            <button onClick={handleCloseModal} className="mt-4 text-sm text-neutral-300 hover:text-white hover:underline w-full text-center transition-colors">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;