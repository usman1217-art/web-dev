import React from "react";
import Image from "next/image";
import { Code, Globe, Zap } from "lucide-react"; // icons
import car from "../../public/car.jpg";

const About = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src={car}
          alt="About background"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ffc300] mb-4">
            About This Website
          </h1>
          <p className="text-white/90 max-w-3xl text-lg md:text-xl leading-relaxed">
            This website represents a fusion of design and development — built
            to showcase modern web experiences that are clean, functional, and
            visually striking. Every section reflects precision, purpose, and
            creativity.
          </p>
        </div>
      </div>

      {/* Info Boxes Section */}
      <div className="bg-[#000814] py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Box 1 */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex justify-center mb-4">
            <Code size={40} className="text-blue-400" />
          </div>
          <h2 className="text-xl font-semibold text-[#ffc300] mb-2">
            Clean Code
          </h2>
          <p className="text-gray-400">
            Every component is written with clarity, scalability, and
            performance in mind. Simplicity is the ultimate sophistication.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex justify-center mb-4">
            <Globe size={40} className="text-green-400" />
          </div>
          <h2 className="text-xl font-semibold text-[#ffc300] mb-2">
            Global Reach
          </h2>
          <p className="text-gray-400">
            Designed to connect with audiences worldwide through responsive
            layouts and seamless user experiences.
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex justify-center mb-4">
            <Zap size={40} className="text-yellow-400" />
          </div>
          <h2 className="text-xl font-semibold text-[#ffc300] mb-2">
            Fast & Dynamic
          </h2>
          <p className="text-gray-400">
            Optimized for speed and interaction — built with Next.js for
            instant performance and smooth navigation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
