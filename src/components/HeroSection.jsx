import { useState, useEffect } from "react";

import julpian from "../assets/julpian.jpg";

// Import Icon
// Bahasa Pemrograman dan IDE
import pythonIcon from "../assets/icon/python.png";
import colabIcon from "../assets/icon/GoogleColab.png";
import VScodeIcon from "../assets/icon/VScode.png";
// Analisisi dan Visualisasi Data
import lookerIcon from "../assets/icon/GoogleLooker.png";
import matplotIcon from "../assets/icon/Matplotlib.png";
import numpyIcon from "../assets/icon/numpy.png";
import pandasIcon from "../assets/icon/pandas.png";
import streamlitIcon from "../assets/icon/streamlit.png";
import seabornIcon from "../assets/icon/seaborn.png";
import tableauIcon from "../assets/icon/tableau.png";
import flask from "../assets/icon/flask.png";
//Machine Learning
import scikitlearnIcon from "../assets/icon/scikit-learn.png";
import tensorflowIcon from "../assets/icon/tensorflow.png";
import yoloIcon from "../assets/icon/yolo.png";
// Desain dan Pengembangan Web
import phpIcon from "../assets/icon/php.png";
import jsIcon from "../assets/icon/java-script.png";
import htmlIcon from "../assets/icon/html.png";
import structureIcon from "../assets/icon/structure.png";
import cssIcon from "../assets/icon/css-3.png";
import androidIcon from "../assets/icon/AndroidStudio.png";
// Desain Grafis
import figmaIcon from "../assets/icon/figma.png";
import canvaIcon from "../assets/icon/canva.png";
import tailwindIcon from "../assets/icon/tailwind.png";
// Version Control
import gitIcon from "../assets/icon/git.png";



// Typing Animation Component
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
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 1500);
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
    <span className="font-semibold text-red-500" aria-live="polite">
      {currentText}
    </span>
  );
};

// Profile Section Component
const ProfileSection = () => (
  <div className="lg:w-1/2 text-center lg:text-left space-y-6">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      Welcome to{" "}
      <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
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
        className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-medium hover:bg-gradient-to-r hover:from-red-700 hover:to-red-900 transition-all duration-300"
        aria-label="Download Lutfi Julpian's CV"
      >
        Download CV
      </a>
    </div>
  </div>
);

// Profile Image Component
const ProfileImage = () => (
  <div className="lg:w-1/2 flex justify-center">
    <div className="relative rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 border-4 border-red-600/20">
      <img
        src={julpian}
        alt="Lutfi Julpian"
        className="w-64 h-64 sm:w-80 sm:h-80 object-cover"
        loading="lazy"
      />
    </div>
  </div>
);

// Skills Section Component
const SkillsSection = () => {
  const skills = [
    // bahasa pemrograman dan IDE
    { icon: pythonIcon, name: "Python" },
    { icon: VScodeIcon, name: "VS Code" },
    { icon: colabIcon, name: "Google Colab" },
    // Analisisi dan Visualisasi Data
    { icon: numpyIcon, name: "NumPy" },
    { icon: pandasIcon, name: "Pandas" },
    { icon: seabornIcon, name: "Seaborn" },
    { icon: matplotIcon, name: "Matplotlib" },
    { icon: lookerIcon, name: "Google Looker" },
    { icon: tableauIcon, name: "Tableau" },
    { icon: streamlitIcon, name: "Streamlit" },
    { icon: androidIcon, name: "Android Studio" },
    { icon: flask, name: "Flask" },
    // Machine Learning
    { icon: scikitlearnIcon, name: "Scikit-learn" },
    { icon: tensorflowIcon, name: "TensorFlow" },
    { icon: yoloIcon, name: "YOLO" },
    // Desain dan Pengembangan Web
    { icon: phpIcon, name: "PHP" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: htmlIcon, name: "HTML" },
    { icon: cssIcon, name: "CSS" },
    { icon: structureIcon, name: "SQL" },
    { icon: figmaIcon, name: "Figma" },
    { icon: canvaIcon, name: "Canva" },
    { icon: tailwindIcon, name: "Tailwind CSS" },
    // Version Control
    { icon: gitIcon, name: "Git" },
  ];

  return (
    <div className="w-full max-w-5xl mt-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">My Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:text-red-600"
            role="img"
            aria-label={skill.name}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 sm:w-12 sm:h-12 mb-2"
              loading="lazy"
            />
            <span className="text-xs sm:text-sm text-neutral-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-black text-white py-12 sm:py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center">
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