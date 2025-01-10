import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="relative mt-20 bg-gradient-to-b from-black via-[#141414] to-black text-white py-20">
      <div id="project" className="text-center">
        <span className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          MY Project
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide">
          Explore{" "}
          <span className="bg-gradient-to-r from-red-600 to-red-900 text-transparent bg-clip-text">
            My Work
          </span>
        </h2>
        <p className="text-neutral-400 mt-4 text-lg">
          A showcase of projects I've worked on, from AI models to Java applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#141414] p-6 rounded-lg shadow-lg transform hover:scale-105 hover:-rotate-2 transition-transform duration-300 group"
          >
            <div className="flex flex-col h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-transform group-hover:scale-105 duration-300"
              />
              <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-neutral-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg text-lg font-medium hover:from-red-700 hover:to-red-900 hover:scale-105 transition-transform duration-300 text-center"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
