import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import ds from "../assets/sertifikat/datascince.png";
import ic from "../assets/sertifikat/iconic.png";
import kn from "../assets/sertifikat/KNIME.png";
import st from "../assets/sertifikat/TSA.png";
import ts from "../assets/sertifikat/Stupen.png";

import fun from "../assets/project/funtastic.png";
import ico from "../assets/project/iconicit.png";
import jav from "../assets/project/java.png";
import app from "../assets/project/Apple.png";

export const navItems = [
  { label: "Features", href: "/features" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
];

export const certifications = [
  {
    image: ds,
    title: "Data Science Professional Certificate",
    provider: "Coursera",
    description: "A comprehensive program covering data analysis and machine learning.",
    link: "https://drive.google.com/file/d/1kxhIQ6BnoxCbqLfLnC_Rf4QiKax7H9In/view?usp=drive_link",
  },
  {
    image: st,
    title: "Full Stack Developer",
    provider: "Udemy",
    description: "Hands-on experience in building web applications using MERN stack.",
    link: "https://drive.google.com/file/d/1WmjxDgNcJ80lgYfKGyNZvawUm999NUQu/view?usp=drive_link",
  },
  {
    image: kn,
    title: "KNIME Advanced Analytics",
    provider: "KNIME Academy",
    description: "Deep insights into analytics using KNIME software.",
    link: "https://drive.google.com/file/d/1NLMBLN6YiPwxB5plcRscDZ56uqVg67PE/view?usp=drive_link",
  },
  {
    image: ic,
    title: "Iconic AI Certification",
    provider: "AI Academy",
    description: "Exploring the fundamentals of artificial intelligence and machine learning.",
    link: "https://drive.google.com/file/d/1vKU8fuRs8419-wuYF1-GxjkjZirRb0mV/view?usp=drive_link",
  },
  {
    image: ts,
    title: "Technical Stupen Certification",
    provider: "Tech Stupen",
    description: "Technical certification covering advanced programming topics.",
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
      "Sebuah proyek berbasis AI untuk memprediksi kualitas air menggunakan algoritme pembelajaran mesin, yang dikerjakan saat mengikuti program Kampus Merdeka MSIB batch 6 bersama GreatEdu.",
    link: "https://funtasticfour-water-prediction-app.streamlit.app/",
    image: fun
  },
  {
    title: "Brilium",
    description:
      "A personal portfolio website built using React and Tailwind CSS.",
    link: "https://github.com/Julpian/IconicIT",
    image: ico
  },
  {
    title: "Java Quake",
    description:
      "JavaQuake adalah proyek clustering yang mengklasifikasikan gempa bumi di Pulau Jawa. Proyek ini dibuat selama pelatihan dan kompetisi yang diselenggarakan oleh KOMINFO.",
    link: "https://maetalascientist-javaquake.streamlit.app/",
    image: jav
  },
  {
    title: "AppleSense",
    description:
      "A personal portfolio website built using React and Tailwind CSS.",
    link: "https://github.com/Julpian/AppleSense",
    image: app
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
