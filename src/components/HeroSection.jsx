import React, { useState, useEffect } from "react";
import profilePhoto from "../assets/julpian.jpg";
import lj from "../assets/lj.png";
import lj from "../assets/jl.png";
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
import canvaIcon from "../assets/icon/canva.png";
import scikitlearnIcon from "../assets/icon/scikit-learn.png";
import seabornIcon from "../assets/icon/seaborn.png";
import tailwindIcon from "../assets/icon/tailwind.png";
import tableauIcon from "../assets/icon/tableau.png";

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
    <div id="Home" className="flex flex-col items-center justify-center lg:mt-20 mt-6 px-6 space-y-8 bg-black text-white">
      {/* Kontainer Utama dengan Flexbox */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:space-x-12">
        {/* Bagian Penjelasan */}
        <div className="lg:w-1/2 text-center lg:text-left animate__animated animate__fadeIn animate__delay-2s">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide mb-10 text-white">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
              Lutfi Julpian's Portfolio
            </span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto lg:mx-0">
            Saya Lutfi Julpian, seorang profesional yang bersemangat dalam mengolah data untuk menciptakan visualisasi yang efektif dan informatif. Dengan keahlian di bidang Data Science, Data Analysis, dan Data Engineering, saya dapat memberikan wawasan yang mendalam untuk pengambilan keputusan yang lebih cerdas.
          </p>

          <p className="text-lg text-neutral-400 mt-4">
            Keahlian saya dalam bidang{" "}
            <span className="font-bold text-red-600">{currentText}</span>
          </p>

          {/* Tombol Unduh CV */}
          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1FY4QXsFr8bsonVyiAIIqZdH4DVexnds2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition duration-300 text-sm"
            >
              CV
            </a>
          </div>
        </div>

        {/* Bagian Foto Profil */}
        <div className="lg:w-1/2 flex justify-center animate__animated animate__fadeIn animate__delay-1s">
          <img
            src={jl}
            alt="Lutfi Julpian"
            className="w-96 h-96 rounded-full object-contain shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>

      {/* Bagian Keterampilan */}
      <div className="w-full mt-12 text-center">
        <h2 className="text-2xl font-semibold text-neutral-700">My Skills</h2>
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {/* Ikon Keterampilan */}
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl hover:text-red-600">
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
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={canvaIcon} alt="Canva" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={scikitlearnIcon} alt="Scikit-Learn" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={seabornIcon} alt="Seaborn" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={tailwindIcon} alt="Tailwind" className="w-12 h-12 mb-2" />
          </div>
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-125 hover:shadow-xl">
            <img src={tableauIcon} alt="Tableau" className="w-12 h-12 mb-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
