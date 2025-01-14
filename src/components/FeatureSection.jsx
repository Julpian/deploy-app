import React, { useState } from "react";
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
import doc1 from "../assets/intership/doc1.png";
import doc2 from "../assets/intership/doc2.jpg";
import briLogo from "../assets/bri.png";
import kknLogo from "../assets/kkn.png";
import greatEduLogo from "../assets/greatedu.png";
import bpsLogo from "../assets/bps.jpeg";
import hmif from "../assets/hmif.png";

const internships = [
  {
    company: "Himpunan Mahasiswa Informatika (HMIF) Universitas Siliwangi",
    position: "Ketua Divisi Pendidikan",
    period: "Desember 2022 - November 2023",
    description:
      "Divisi Pendidikan bertugas memfasilitasi pengembangan wawasan, keterampilan, dan potensi mahasiswa, menjalin kolaborasi dengan lembaga pendidikan, serta mendukung lomba, delegasi, karya ilmiah, dan diskusi di bidang Informatika.",
    documentation: [pen, pen1],
    logo: hmif,
  },
  {
    company: "BRI",
    position: "Document Control Intern",
    period: "Juni 2023 - Agustus 2023",
    description:
      "Fokus pada pengelolaan dokumen terkait peminjaman, baik yang sudah selesai maupun yang masih berjalan, serta memastikan bukti dan administrasi pinjaman tersimpan dengan baik.",
    documentation: [bri, bri1],
    logo: briLogo,
  },
  {
    company: "Kuliah Kerja Nyata (KKN) Desa Margacinta",
    position: "Wakil Sekretaris",
    period: "Desember 2023 - 5 Februari 2024",
    description:
      "Fokus pada pengelolaan dokumen surat undangan kepada kepala desa dan tokoh penting di desa serta membuat laporan harian dari kegiatan.",
    documentation: [kkn1, kkn2, kkn3],
    logo: kknLogo,
  },
  {
    company: "GreatEdu Global Mahardika",
    position: "Data Science Bootcamp Participant",
    period: "Feb 2024 - Jun 2024",
    description:
      "Selesai mengikuti bootcamp data science yang komprehensif, yang berfokus pada proyek-proyek dunia nyata yang melibatkan pemodelan prediktif dan visualisasi data menggunakan Python.",
    documentation: [ge1, ge2, ge3],
    logo: greatEduLogo,
  },
  {
    company: "Bandan Pusat Statistic (BPS)",
    position: "Survey Data Specialist Intern",
    period: "Agustus 2024 - September 2024",
    description:
      "Tugas yang melibatkan pembuatan form survei untuk pengumpulan data, pengolahan data Excel agar lebih rapi, serta prediksi harga beras, menunjukkan keterlibatan dalam analisis dan pengolahan data.",
    documentation: [bps, bps1, bps2],
    logo: bpsLogo,
  },
];

const ExperienceSection = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);

  const handleOpenModal = (internship) => {
    setSelectedInternship(internship);
  };

  const handleCloseModal = () => {
    setSelectedInternship(null);
  };

  return (
    <div id="experience" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-500 text-white rounded-full h-6 text-sm font-medium px-3 py-1 uppercase">
          My Experience
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-white">
          Explore{" "}
          <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
            My Journey
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {internships.map((internship, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-6 transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col bg-neutral-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
              <img
                src={internship.logo}
                alt={`${internship.company} Logo`}
                className="w-12 h-12 absolute top-4 right-4 rounded-full border border-neutral-700 shadow-md"
              />
              <h3 className="text-lg font-bold text-red-500">{internship.company}</h3>
              <p className="text-sm text-neutral-500 mt-1">{internship.period}</p>
              <h4 className="text-md font-semibold mt-4 text-red-400">{internship.position}</h4>
              <p className="text-sm mt-2 text-neutral-400">{internship.description}</p>
              <button
                onClick={() => handleOpenModal(internship)}
                className="mt-4 p-2 bg-white rounded-lg text-black font-medium hover:bg-neutral-300 w-auto"
              >
                View Documentation
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedInternship && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-neutral-900 p-6 rounded-lg shadow-lg w-11/12 sm:w-1/2 lg:w-1/3">
            <h3 className="text-lg font-bold text-red-500">{selectedInternship.company}</h3>
            <h4 className="text-md font-semibold mt-4 text-red-400">{selectedInternship.position}</h4>
            <div className="mt-4">
              {Array.isArray(selectedInternship.documentation) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedInternship.documentation.map((doc, index) => (
                    <img
                      key={index}
                      src={doc}
                      alt={`Internship Documentation ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-md hover:shadow-xl"
                    />
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-4 text-sm text-white hover:text-gray-300 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
