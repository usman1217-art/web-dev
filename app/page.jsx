"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card";
import "./globals.css";

import lambo from "../public/lambo.jpg";
import bmw from "../public/bmw.png";
import RR from "../public/RR.jpg";
import BB from "../public/bugatti.png";
import sup from "../public/supra.png";
import FF from "../public/FF.jpg";
import PP from "../public/PP.jpg";
import MM from "../public/MM.jpg";
import AA from "../public/AA.jpg";
import GT from "../public/GT.jpg";

const Home = () => {
  const cars = [
    {
      name: "Lamborghini Veneno",
      img: lambo,
      specs: {
        engine: "6.5L V12",
        horsepower: "740 HP",
        topSpeed: "355 km/h",
        acceleration: "0-100 km/h in 2.8s",
      },
    },
    {
      name: "BMW M8",
      img: bmw,
      specs: {
        engine: "4.4L Twin-Turbo V8",
        horsepower: "617 HP",
        topSpeed: "305 km/h",
        acceleration: "0-100 km/h in 3.2s",
      },
    },
    {
      name: "Rolls Royce Phantom",
      img: RR,
      specs: {
        engine: "6.75L V12",
        horsepower: "563 HP",
        topSpeed: "250 km/h",
        acceleration: "0-100 km/h in 5.3s",
      },
    },
    {
      name: "Bugatti Chiron",
      img: BB,
      specs: {
        engine: "8.0L Quad-Turbo W16",
        horsepower: "1500 HP",
        topSpeed: "420 km/h",
        acceleration: "0-100 km/h in 2.4s",
      },
    },
    {
      name: "Toyota Supra MK5",
      img: sup,
      specs: {
        engine: "3.0L Turbocharged I6",
        horsepower: "382 HP",
        topSpeed: "250 km/h",
        acceleration: "0-100 km/h in 3.9s",
      },
    },
    {
      name: "Ferrari SF90 Stradale",
      img: FF,
      specs: {
        engine: "4.0L Twin-Turbo V8 Hybrid",
        horsepower: "986 HP",
        topSpeed: "340 km/h",
        acceleration: "0-100 km/h in 2.5s",
      },
    },
    {
      name: "Porsche 911 Turbo S",
      img: PP,
      specs: {
        engine: "3.8L Twin-Turbo Flat-6",
        horsepower: "640 HP",
        topSpeed: "330 km/h",
        acceleration: "0-100 km/h in 2.7s",
      },
    },
    {
      name: "McLaren 720S",
      img: MM,
      specs: {
        engine: "4.0L Twin-Turbo V8",
        horsepower: "710 HP",
        topSpeed: "341 km/h",
        acceleration: "0-100 km/h in 2.9s",
      },
    },
    {
      name: "Aston Martin DBS Superleggera",
      img: AA,
      specs: {
        engine: "5.2L Twin-Turbo V12",
        horsepower: "715 HP",
        topSpeed: "340 km/h",
        acceleration: "0-100 km/h in 3.4s",
      },
    },
    {
      name: "Nissan GT-R Nismo",
      img: GT,
      specs: {
        engine: "3.8L Twin-Turbo V6",
        horsepower: "600 HP",
        topSpeed: "315 km/h",
        acceleration: "0-100 km/h in 2.9s",
      },
    },
  ];

  const [query, setQuery] = useState("");

  // Filter cars by search input
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* === HEADING === */}
      <h1 className="welcome-text text-center text-[#ffc300] text-2xl sm:text-3xl md:text-4xl font-bold my-6">
        <span className="typewriter">
          Welcome to the World of Legendary Cars (QBM)
        </span>
      </h1>

      {/* === SEARCH BAR === */}
      <div className="flex justify-center items-center my-6 px-4">
        <input
          type="text"
          placeholder="Search your dream car..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-1/2 md:w-1/3 bg-[#001d3d] text-[#ffc300] border border-[#ffc300]/50 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffc300] placeholder-gray-400 transition-all"
        />
      </div>

      {/* === CARS DISPLAY === */}
      <div className="hero px-4 md:px-10">
        {filteredCars.length > 0 ? (
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-2xl w-full"
          >
            {filteredCars.map((car, i) => (
              <SwiperSlide
                key={i}
                className="flex justify-center items-center"
              >
                <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
                  <Card name={car.name} img={car.img} specs={car.specs} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-400 mt-10">
            No cars found matching your search.
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
