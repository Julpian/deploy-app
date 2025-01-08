import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="relative mt-20 bg-neutral-900 text-white py-20">
      <div id= "project" className="text-center">
      <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-green-500 text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          MY Project
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide">
          Explore{" "}
          <span className="bg-gradient-to-r from-purple-500 to-green-800 text-transparent bg-clip-text">
            My Work
          </span>
        </h2>
        <p className="text-neutral-400 mt-4 text-lg">
          A showcase of projects I've worked on, from AI models to Java
          applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col h-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-neutral-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-green-800 text-white rounded-lg text-lg font-medium hover:bg-gradient-to-r hover:from-purple-600 hover:to-green-900 transition-colors duration-200 text-center"
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
