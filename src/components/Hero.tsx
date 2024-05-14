import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animations after the component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-75"></div>
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1
          className={`text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
        >
          Explore the Cosmos
        </h1>
        <p
          className={`text-lg sm:text-2xl lg:text-3xl mb-8 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          Join NASA's mission to discover the unknown.
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Get Started
        </a>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/preview.png"
          alt="Spaceship"
          className="animate-turn lg:mt-[40px]"
        />
      </div>
    </div>
  );
};

export default Hero;
