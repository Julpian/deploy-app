import { certifications } from "../constants";

const Certifications = () => {
  return (
    <div id= "sertifikat" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Certifications
      </h2>
      <div className="flex flex-wrap justify-center">
        {certifications.map((certification, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4 opacity-0 animate-fadeIn transition-opacity duration-1000"
          >
            <div className="bg-neutral-900 rounded-lg p-6 text-md border border-neutral-800 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img
                className="w-full h-40 object-cover rounded-md mb-4"
                src={certification.image}
                alt={certification.title}
              />
              <h3 className="text-lg font-semibold">{certification.title}</h3>
              <p className="text-sm italic text-neutral-600">
                {certification.provider}
              </p>
              <p className="mt-4 text-sm text-neutral-300">
                {certification.description}
              </p>
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-green-800 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-purple-600 hover:to-green-900 transition duration-300"
              >
                Lihat Detail
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
