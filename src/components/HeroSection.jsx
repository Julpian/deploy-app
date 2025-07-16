import { useState, useEffect } from "react";
import julpian from "../assets/julpian.jpg";
// Import gambar latar belakang
import bgImage from "../assets/gb.jpg";

// Import semua icon Anda
import pythonIcon from "../assets/icon/python.png";
import colabIcon from "../assets/icon/GoogleColab.png";
import VScodeIcon from "../assets/icon/VScode.png";
import lookerIcon from "../assets/icon/GoogleLooker.png";
import matplotIcon from "../assets/icon/Matplotlib.png";
import numpyIcon from "../assets/icon/numpy.png";
import pandasIcon from "../assets/icon/pandas.png";
import streamlitIcon from "../assets/icon/streamlit.png";
import seabornIcon from "../assets/icon/seaborn.png";
import tableauIcon from "../assets/icon/tableau.png";
import flask from "../assets/icon/flask.png";
import scikitlearnIcon from "../assets/icon/scikit-learn.png";
import tensorflowIcon from "../assets/icon/tensorflow.png";
import yoloIcon from "../assets/icon/yolo.png";
import phpIcon from "../assets/icon/php.png";
import jsIcon from "../assets/icon/java-script.png";
import htmlIcon from "../assets/icon/html.png";
import structureIcon from "../assets/icon/structure.png";
import cssIcon from "../assets/icon/css-3.png";
import androidIcon from "../assets/icon/AndroidStudio.png";
import figmaIcon from "../assets/icon/figma.png";
import canvaIcon from "../assets/icon/canva.png";
import tailwindIcon from "../assets/icon/tailwind.png";
import gitIcon from "../assets/icon/git.png";

// Komponen TypingAnimation diperbarui untuk menggunakan warna merah
const TypingAnimation = () => {
  const texts = ["Data Science", "Data Analyst", "Data Engineer"];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (isTyping && charIndex < texts[textIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (isTyping && charIndex === texts[textIndex].length) {
      timeout = setTimeout(() => setIsTyping(false), 1500);
    } else if (!isTyping) {
      timeout = setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setCurrentText("");
        setCharIndex(0);
        setIsTyping(true);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, textIndex, texts]);

  return (
    // DIUBAH: Warna teks animasi menjadi merah untuk kontras
    <span className="font-semibold text-red-500" aria-live="polite">
      {currentText}
    </span>
  );
};

// Komponen ProfileSection diperbarui dengan gradien merah-biru
const ProfileSection = () => (
  <div className="lg:w-1/2 text-center lg:text-left space-y-6">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      Welcome to{" "}
      {/* DIUBAH: Gradien diubah menjadi merah-ke-biru */}
      <span className="bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
        Lutfi Julpian's Portfolio
      </span>
    </h1>
    <p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
      I am Lutfi Julpian, a professional passionate about processing data to create effective and informative visualizations. With expertise in Data Science, Data Analytics, and Data Engineering, I help uncover insights for smarter decisions.
    </p>
    <p className="text-neutral-400 text-base sm:text-lg">
      My expertise is in <TypingAnimation />
    </p>
    <div className="mt-6">
      <a
        href="https://drive.google.com/file/d/1FY4QXsFr8bsonVyiAIIqZdH4DVexnds2/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        // DIUBAH: Tombol juga menggunakan gradien merah-ke-biru
        className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-full font-medium hover:from-red-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
        aria-label="Download Lutfi Julpian's CV"
      >
        Download CV
      </a>
    </div>
  </div>
);

// Komponen ProfileImage diperbarui dengan efek glow merah saat hover
const ProfileImage = () => (
  <div className="lg:w-1/2 flex justify-center">
    {/* DIUBAH: Ditambahkan efek shadow merah (glow) saat hover */}
    <div className="relative rounded-full overflow-hidden shadow-lg border-4 border-neutral-800 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(220,38,38,0.7)]">
      <img
        src={julpian}
        alt="Lutfi Julpian"
        className="w-64 h-64 sm:w-80 sm:h-80 object-cover"
        loading="lazy"
      />
    </div>
  </div>
);

// Komponen SkillsSection tidak ada perubahan, tetap netral agar tidak terlalu ramai
const SkillsSection = () => {
  const skills = [
    { icon: pythonIcon, name: "Python" }, { icon: VScodeIcon, name: "VS Code" },
    { icon: colabIcon, name: "Google Colab" }, { icon: numpyIcon, name: "NumPy" },
    { icon: pandasIcon, name: "Pandas" }, { icon: seabornIcon, name: "Seaborn" },
    { icon: matplotIcon, name: "Matplotlib" }, { icon: lookerIcon, name: "Looker Studio" },
    { icon: tableauIcon, name: "Tableau" }, { icon: streamlitIcon, name: "Streamlit" },
    { icon: androidIcon, name: "Android Studio" }, { icon: flask, name: "Flask" },
    { icon: scikitlearnIcon, name: "Scikit-learn" }, { icon: tensorflowIcon, name: "TensorFlow" },
    { icon: yoloIcon, name: "YOLO" }, { icon: phpIcon, name: "PHP" },
    { icon: jsIcon, name: "JavaScript" }, { icon: htmlIcon, name: "HTML" },
    { icon: cssIcon, name: "CSS" }, { icon: structureIcon, name: "SQL" },
    { icon: figmaIcon, name: "Figma" }, { icon: canvaIcon, name: "Canva" },
    { icon: tailwindIcon, name: "Tailwind CSS" }, { icon: gitIcon, name: "Git" },
  ];
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="w-full mt-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">
        My Tech Stack
      </h2>
      <div className="relative w-full overflow-hidden mask-gradient">
        <div className="flex w-max animate-scroll">
          {duplicatedSkills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center w-[150px] h-[100px] mx-4 flex-shrink-0" aria-label={skill.name}>
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2 object-contain" loading="lazy" />
              <span className="text-sm text-neutral-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const HeroSection = () => {
  return (
    <section id="home" className="relative text-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 z-[-1] bg-black/70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-12 lg:gap-16">
          <ProfileSection />
          <ProfileImage />
        </div>
        <SkillsSection />
      </div>
    </section>
  );
};

export default HeroSection;

// PENTING: Anda mungkin perlu menambahkan CSS ini di file CSS utama Anda (misal: index.css)
// untuk efek gradien transparan di sisi kiri dan kanan skill scroller.
/*
@layer utilities {
  .mask-gradient {
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  }
}
*/