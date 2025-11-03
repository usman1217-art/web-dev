import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./globals.css";

const Card = ({ name, img, specs }) => {
  return (
    <div className="group relative bg-[#000814] text-white rounded-3xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(255,195,0,0.5)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.03] w-[260px] md:w-[320px] flex flex-col border border-[#111] hover:border-[#ffc300]/40">
      
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover rounded-t-3xl group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 320px"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000814]/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <h2 className="text-2xl font-bold text-[#ffc300] tracking-wide mb-3 group-hover:text-yellow-400 transition-colors">
          {name}
        </h2>

        <ul className="text-sm text-gray-300 space-y-1">
          <li>
            <span className="font-semibold text-white">Engine:</span> {specs.engine}
          </li>
          <li>
            <span className="font-semibold text-white">Horsepower:</span> {specs.horsepower}
          </li>
          <li>
            <span className="font-semibold text-white">Top Speed:</span> {specs.topSpeed}
          </li>
        </ul>

        {/* Button */}
        <Link
          href={`/${encodeURIComponent(name.toLowerCase())}`}
          className="mt-5 inline-block bg-[#ffc300] text-black font-semibold px-5 py-2.5 rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,195,0,0.6)] text-center"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Card;
