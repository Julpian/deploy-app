import { useState } from "react";
import { projects } from "../constants"; // Pastikan path ini benar
import { motion, AnimatePresence } from "framer-motion";
import bgImage from '../assets/spi.jpg'; // DITAMBAHKAN: Path ke gambar background Anda

// -- Komponen Tombol Filter --
const FilterButtons = ({ categories, activeFilter, setActiveFilter }) => (
  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setActiveFilter(category)}
        className={`px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 transform hover:scale-105
          ${
            activeFilter === category
              ? "bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg"
              : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
          }
        `}
      >
        {category}
      </button>
    ))}
  </div>
);

// -- Komponen Header --
const SectionHeader = () => (
  <div className="text-center space-y-3">
    <span className="inline-block bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-full text-sm font-medium px-3 py-1 uppercase tracking-wide">
      My Projects
    </span>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
      Explore{" "}
      <span className="bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
        My Work
      </span>
    </h2>
    <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
      A showcase of projects I've worked on. Filter by category to see more.
    </p>
  </div>
);

// -- Komponen Kartu Proyek --
const ProjectCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4 }}
    className="bg-neutral-900 p-5 rounded-xl shadow-lg border border-neutral-800 transition-all duration-300 hover:border-red-600/30 hover:shadow-red-600/10 group"
    role="article"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />
    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white group-hover:text-blue-500 transition-colors duration-200">
      {project.title}
    </h3>
    <p className="text-sm text-neutral-400 mb-1">
      Category: <span className="font-semibold text-red-400/90">{project.category}</span>
    </p>
    <p className="text-neutral-300 text-sm sm:text-base mt-2 mb-4 line-clamp-3">
      {project.description}
    </p>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center px-4 py-2 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-lg font-medium hover:from-red-700 hover:to-blue-700 transition-all duration-300"
      aria-label={`View ${project.title} project`}
    >
      View Project
    </a>
  </motion.div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    // DIUBAH: Dihapus bg-black dari sini
    <section id="projects" className="relative text-white py-16 sm:py-20">
      
      {/* DITAMBAHKAN: Latar belakang, overlay, dan gradien */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 -z-10 bg-black/60"></div>
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>

      {/* DIUBAH: Ditambahkan relative z-10 agar konten di atas background */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader />
        
        <FilterButtons
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
        
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title || index} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;