import React, { useState, useEffect } from "react";
import profilePhoto from "../assets/julpian.jpg";

const HeroSection = () => {
  const texts = ["Data Science", "Data Analyst", "Data Engineer"];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true); // Untuk kontrol apakah sedang mengetik

  useEffect(() => {
    // Fungsi untuk mengetikkan teks satu per satu
    const typeText = () => {
      if (charIndex < texts[textIndex].length) {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        // Setelah satu kata selesai, tunggu beberapa saat dan ganti ke teks berikutnya
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setCharIndex(0);
          setCurrentText(""); // Menghapus teks sebelumnya sebelum mengetik teks berikutnya
        }, 1000); // Waktu tunggu sebelum mengganti kata (1 detik)
      }
    };

    // Menjalankan fungsi ketik setiap 100ms
    const typingInterval = setInterval(typeText, isTyping ? 100 : 0);

    return () => clearInterval(typingInterval); // Bersihkan interval saat komponen unmount
  }, [charIndex, textIndex, isTyping]);

  return (
    <div id= "Home" className="flex flex-col items-center justify-center lg:mt-20 mt-6 px-6 space-y-8">
      {/* Foto Profil dengan Animasi */}
      <div className="relative flex-shrink-0 animate__animated animate__fadeIn animate__delay-1s">
        <div className="w-56 h-56 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 p-1 transform transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-xl">
          <img
            src={profilePhoto}
            alt="Lutfi Julpian"
            className="w-full h-full rounded-full object-cover shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-2xl"
          />
        </div>
      </div>

      {/* Teks Judul dan Deskripsi dengan Animasi */}
      <div className="text-center animate__animated animate__fadeIn animate__delay-2s">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide mb-10">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-purple-500 to-green-800 text-transparent bg-clip-text">
            Lutfi Julpian's Portfolio
          </span>
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
          Saya Lutfi Julpian, seorang yang memiliki semangat dalam menciptakan visualisasi data yang informatif dan efektif. 
          Dengan ketertarikan mendalam di bidang pengelolaan data, saya memiliki pengalaman dalam berbagai disiplin ilmu data, 
          seperti Data Science, Data Analysis, dan Data Engineering. Keahlian saya dalam mengolah dan menganalisis data memungkinkan 
          saya untuk memberikan wawasan yang berharga bagi pengambilan keputusan yang lebih tepat. Saya selalu berkomitmen untuk memberikan 
          hasil terbaik dan siap untuk berkontribusi dalam setiap proyek yang menantang.
        </p>

        {/* Teks dengan efek mengetik */}
        <p className="text-lg text-neutral-500 mt-4">
          Keahlian saya dalam bidang{" "}
          <span className="font-bold text-purple-500">{currentText}</span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
