import React, { useState, useEffect } from "react";
import profilePhoto from "../assets/julpian.jpg";
import pythonIcon from "../assets/icon/python.png";
import phpIcon from "../assets/icon/php.png";
import jsIcon from "../assets/icon/java-script.png";
import htmlIcon from "../assets/icon/html.png";
import structureIcon from "../assets/icon/structure.png";
import cssIcon from "../assets/icon/css-3.png";
import figmaIcon from "../assets/icon/figma.png";
import gitIcon from "../assets/icon/git.png";
import numpyIcon from "../assets/icon/numpy.png";
import pandasIcon from "../assets/icon/pandas.png";
import streamlitIcon from "../assets/icon/streamlit.png";
import tensorflowIcon from "../assets/icon/tensorflow.png";

const HeroSection = () => {
  const texts = ["Data Science", "Data Analyst", "Data Engineer"];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeText = () => {
      if (charIndex < texts[textIndex].length) {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setCharIndex(0);
          setCurrentText("");
        }, 1000);
      }
    };

    const typingInterval = setInterval(typeText, isTyping ? 100 : 0);

    return () => clearInterval(typingInterval);
  }, [charIndex, textIndex, isTyping]);

  return (
    <div id="Home" className="flex flex-col items-center justify-center lg:mt-20 mt-6 px-6 space-y-8">
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
        Saya Lutfi Julpian, seorang profesional yang bersemangat dalam mengolah data untuk menciptakan visualisasi yang efektif dan informatif. Dengan keahlian di bidang Data Science, Data Analysis, dan Data Engineering, saya dapat memberikan wawasan yang mendalam untuk pengambilan keputusan yang lebih cerdas. Komitmen saya untuk memberikan hasil terbaik dan berkontribusi pada proyek menantang menjadikan saya kandidat yang tepat untuk tim Anda.
        </p>

        {/* Teks dengan efek mengetik */}
        <p className="text-lg text-neutral-500 mt-4">
          Keahlian saya dalam bidang{" "}
          <span className="font-bold text-purple-500">{currentText}</span>
        </p>
      </div>

      {/* Bagian Keterampilan */}
      <div className="w-full mt-12 text-center">
        <h2 className="text-2xl font-semibold text-neutral-700">My Skills</h2>
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {/* Ikon Keterampilan */}
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={pythonIcon} alt="Python" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={phpIcon} alt="PHP" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={jsIcon} alt="JavaScript" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={htmlIcon} alt="HTML" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={cssIcon} alt="CSS" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={structureIcon} alt="Structure" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={figmaIcon} alt="Figma" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={numpyIcon} alt="NumPy" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={pandasIcon} alt="Pandas" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={streamlitIcon} alt="Streamlit" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={tensorflowIcon} alt="TensorFlow" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={gitIcon} alt="Git" className="w-12 h-12 mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
