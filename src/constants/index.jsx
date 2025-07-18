import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import ds from "../assets/sertifikat/datascince.png";
import ic from "../assets/sertifikat/iconic.png";
import kn from "../assets/sertifikat/KNIME.png";
import st from "../assets/sertifikat/TSA.png";
import ts from "../assets/sertifikat/Stupen.png";

import fun from "../assets/project/funtastic.png";
import ico from "../assets/project/iconicit.png";
import jav from "../assets/project/java.png";
import app from "../assets/project/Apple.png";
import fuelapp from "../assets/project/fuelapp.png";
import kas from "../assets/project/kas.png";
import heart from "../assets/project/hear.png";
import look from "../assets/project/superstore.png";

export const navItems = [
  { label: "Home", href: "#Home" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Certification", href: "#sertifikat" },
];

export const certifications = [
  {
    image: ds,
    title: "Associate Data Science",
    provider: "BNSP",
    description: "BNSP Data Science certification: analysis, coding, and practical algorithmic solutions.",
    link: "https://drive.google.com/file/d/1kxhIQ6BnoxCbqLfLnC_Rf4QiKax7H9In/view?usp=drive_link",
  },
  {
    image: ts,
    title: "Sertifikat Studi Independen Bersertifikat", 
    provider: "MSIB Angkatan 6",
    description: "Completed Batch 6 Independent Study, GreatEdu Greenceleration Data Science Bootcamp.",
    link: "https://drive.google.com/file/d/1WmjxDgNcJ80lgYfKGyNZvawUm999NUQu/view?usp=drive_link",
  },
  {
    image: kn,
    title: "KNIME Advanced Analytics",
    provider: "KNIME Academy",
    description: "Learning in-depth data analytics using KNIME software in a practical way.",
    link: "https://drive.google.com/file/d/1NLMBLN6YiPwxB5plcRscDZ56uqVg67PE/view?usp=drive_link",
  },
  {
    image: ic,
    title: "ICONIC AI Certification",
    provider: "Universitas Siliwangi",
    description: "This certificate was obtained from the Data Science competition, testing analytical skills.",
    link: "https://drive.google.com/file/d/1vKU8fuRs8419-wuYF1-GxjkjZirRb0mV/view?usp=drive_link",
  },
  {
    image: st,
    title: "Data Science and AI Solutions for Real-World Issues",
    provider: "Digital Talent Scholarship",
    description: "Pelatihan Data Science yang diselenggarakan oleh Kementerian Komunikasi dan Informatika, mencakup pemodelan, analisis, dan visualisasi data untuk menyelesaikan isu-isu dunia nyata.",
    link: "https://drive.google.com/file/d/15pLqT0kf7VFHC_-S78N_1YpCBZndzxYp/view?usp=drive_link",
  },

];

export const internships = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const projects = [
  {
    title: "Water Quality Prediction",
    description:
      "Water quality prediction with AI, MSIB batch 6 project with GreatEdu.",
    link: "https://funtasticfour-water-prediction-app.streamlit.app/",
    image: fun,
    category: "Data Science",
  },
  {
    title: "Brilium",
    description:
      "ML-based learning recommendation system for the ICONIC IT competition.",
    link: "https://github.com/Julpian/IconicIT",
    image: ico,
    category: "Data Science",
  },
  {
    title: "Java Quake",
    description:
      "JavaQuake: Classification of Java earthquakes via clustering, KOMINFO project.",
    link: "https://maetalascientist-javaquake.streamlit.app/",
    image: jav,
    category: "Data Science",
  },
  {
    title: "AppleSense",
    description:
      "Automatic detection and counting of apples with YOLO on the farm",
    link: "https://github.com/Julpian/AppleSense",
    image: app,
    category: "Data Science",
  },
  {
    title: "Fuel Entry App",
    description:
      "Web application for recording fuel consumption of truck units and heavy equipment at PT. Kalimantan Prima Persada",
    link: "https://fuel-app-pi.vercel.app/login",
    image: fuelapp,
    category: "Software Development",
  },
  {
    title: "FinTrack",
    description:
      "This application helps you track every income and expense, organize your monthly budget, and monitor your savings and investments all in one intuitive and easy-to-use dashboard.",
    link: "https://fintrack-kappa-ten.vercel.app/",
    image: kas,
    category: "Software Development",
  },
  {
    title: "Prediction of Heart Disease",
    description:
      "🫀 Early Prediction, Save Lives — My thesis project for AI-based heart disease risk detection.",
    link: "https://heartdisease-tugasakhir.streamlit.app/",
    image: heart,
    category: "Data Science",
  },
  {
    title: "Supestore Dashboard",
    description:
      "Superstore sales dashboard, my first project to learn and practice data analysis.",
    link: "https://lookerstudio.google.com/reporting/63043862-74d0-4648-9ef2-8423ae8614d5",
    image: look,
    category: "Data Anlaysis",
    
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
