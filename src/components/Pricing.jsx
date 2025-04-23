import { projects } from "../constants";

// Reusable Section Header Component
const SectionHeader = () => (
  <div className="text-center space-y-3">
    <span className="inline-block bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white rounded-full text-sm font-medium px-3 py-1 uppercase tracking-wide">
      My Projects
    </span>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
      Explore{" "}
      <span className="bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text">
        My Work
      </span>
    </h2>
    <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
      A showcase of projects I've worked on, from AI models to Java applications.
    </p>
  </div>
);

// Project Card Component
const ProjectCard = ({ project, index }) => (
  <div
    className="bg-[#1a1a1a] p-5 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
    role="article"
    aria-labelledby={`project-title-${index}`}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-102"
      loading="lazy"
    />
    <h3
      id={`project-title-${index}`}
      className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-200"
    >
      {project.title}
    </h3>
    <p className="text-neutral-300 text-sm sm:text-base mb-4 line-clamp-3">
      {project.description}
    </p>
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg font-medium hover:from-red-700 hover:to-red-900 transition-all duration-300"
      aria-label={`View ${project.title} project`}
    >
      View Project
    </a>
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-black via-[#141414] to-black text-white py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;