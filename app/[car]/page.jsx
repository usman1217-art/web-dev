"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// === Imports remain the same ===
import lambo1 from "../../public/lambo.avif";
import lambo2 from "../../public/lambo2.avif";
import lambo3 from "../../public/lambo4.avif";
import lambo23 from "../../public/lambo23.avif";

import bmw from "../../public/bmw.png";
import bmw1 from "../../public/bmw1.avif";
import bmw3 from "../../public/bmw3.avif";
import bmw4 from "../../public/bmw4.avif";
import bmw5 from "../../public/bmw5.avif";

import RR from "../../public/RR.jpg";
import RR1 from "../../public/RR1.avif";
import RR2 from "../../public/RR2.avif";
import RR3 from "../../public/RR3.avif";
import RR4 from "../../public/RR4.avif";

import BB from "../../public/bugatti.png";
import BB1 from "../../public/BB1.avif";
import BB2 from "../../public/BB2.avif";
import BB3 from "../../public/BB3.avif";
import BB4 from "../../public/BB4.avif";
import BB5 from "../../public/BB5.avif";

import sup from "../../public/supra.png";
import sup1 from "../../public/sup1.avif";
import sup2 from "../../public/sup2.avif";

import FF1 from "../../public/FF1.avif";
import FF2 from "../../public/FF2.avif";
import FF3 from "../../public/FF3.avif";
import FF4 from "../../public/FF4.avif";

import PP1 from "../../public/PP1.avif";
import PP2 from "../../public/PP2.avif";
import PP3 from "../../public/PP3.avif";
import PP4 from "../../public/PP4.avif";

import MM1 from "../../public/MM1.avif";
import MM3 from "../../public/MM3.avif";
import MM2 from "../../public/MM2.avif";
import MM4 from "../../public/MM4.avif";

import AA1 from "../../public/AA1.avif";
import AA2 from "../../public/AA2.avif";
import AA3 from "../../public/AA3.avif";
import AA4 from "../../public/AA4.avif";

import GT1 from "../../public/GT1.avif";
import GT2 from "../../public/GT2.avif";
import GT4 from "../../public/GT4.avif";
import GT3 from "../../public/GT3.avif";

const carData = {
  "lamborghini veneno": {
    images: [lambo1, lambo2, lambo3, lambo23],
    specs: [
      "Engine: 6.5L V12",
      "Horsepower: 740 HP",
      "Top Speed: 355 km/h",
      "Acceleration: 0–100 km/h in 2.8s",
      "Price: $4.5 Million",
    ],
  },
  "bmw m8": {
    images: [bmw, bmw1, bmw3, bmw4, bmw5],
    specs: [
      "Engine: 4.4L Twin-Turbo V8",
      "Horsepower: 617 HP",
      "Top Speed: 305 km/h",
      "Acceleration: 0–100 km/h in 3.2s",
      "Drivetrain: AWD",
    ],
  },
  "rolls royce phantom": {
    images: [RR, RR1, RR2, RR3, RR4],
    specs: [
      "Engine: 6.75L V12",
      "Horsepower: 563 HP",
      "Top Speed: 250 km/h",
      "Acceleration: 0–100 km/h in 5.3s",
      "Luxury Level: Ultimate Comfort",
    ],
  },
  "bugatti chiron": {
    images: [BB, BB1, BB2, BB3, BB4, BB5],
    specs: [
      "Engine: 8.0L Quad-Turbo W16",
      "Horsepower: 1500 HP",
      "Top Speed: 420 km/h",
      "Acceleration: 0–100 km/h in 2.4s",
      "Torque: 1600 Nm",
    ],
  },
  "toyota supra mk5": {
    images: [sup, sup1, sup2],
    specs: [
      "Engine: 3.0L Turbocharged I6",
      "Horsepower: 382 HP",
      "Top Speed: 250 km/h",
      "Acceleration: 0–100 km/h in 3.9s",
      "Transmission: 8-speed automatic",
    ],
  },
  "ferrari sf90 stradale": {
    images: [FF1, FF2, FF3, FF4],
    specs: [
      "Engine: 4.0L Twin-Turbo V8 Hybrid",
      "Horsepower: 986 HP",
      "Top Speed: 340 km/h",
      "Acceleration: 0–100 km/h in 2.5s",
      "Drive: AWD Plug-in Hybrid",
    ],
  },
  "porsche 911 turbo s": {
    images: [PP1, PP2, PP3, PP4],
    specs: [
      "Engine: 3.8L Twin-Turbo Flat-6",
      "Horsepower: 640 HP",
      "Top Speed: 330 km/h",
      "Acceleration: 0–100 km/h in 2.7s",
      "Transmission: 8-speed PDK",
    ],
  },
  "mclaren 720s": {
    images: [MM1, MM2, MM3, MM4],
    specs: [
      "Engine: 4.0L Twin-Turbo V8",
      "Horsepower: 710 HP",
      "Top Speed: 341 km/h",
      "Acceleration: 0–100 km/h in 2.9s",
      "Weight: 1419 kg",
    ],
  },
  "aston martin dbs superleggera": {
    images: [AA1, AA2, AA3, AA4],
    specs: [
      "Engine: 5.2L Twin-Turbo V12",
      "Horsepower: 715 HP",
      "Top Speed: 340 km/h",
      "Acceleration: 0–100 km/h in 3.4s",
      "Transmission: 8-speed automatic",
    ],
  },
  "nissan gt-r nismo": {
    images: [GT1, GT2, GT3, GT4],
    specs: [
      "Engine: 3.8L Twin-Turbo V6",
      "Horsepower: 600 HP",
      "Top Speed: 315 km/h",
      "Acceleration: 0–100 km/h in 2.9s",
      "Drivetrain: AWD",
    ],
  },
};

export default function CarPage({ params }) {
  const carName = decodeURIComponent(params.car).toLowerCase();
  const car = carData[carName];

  if (!car) {
    return (
      <h1 className="text-center text-red-600 font-bold text-3xl mt-20">
        Car Not Found
      </h1>
    );
  }

  return (
    <div className="bg-[#000814] text-white min-h-screen flex flex-col items-center px-4 sm:px-8 py-10">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffc300] mb-8 capitalize tracking-wide text-center">
        {carName}
      </h1>

      {/* === SLIDER SECTION === */}
      <div className="w-full max-w-5xl flex justify-center items-center">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="rounded-2xl w-full"
        >
        
        {car.images.map((img, i) => (
  <SwiperSlide key={i}>
    <div className="flex justify-center items-center bg-[#001d3d] rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] p-3 sm:p-4 md:p-5">
      
      <div className="relative w-[220px] sm:w-[260px] md:w-[320px] h-auto">
        <Image
          src={img}
          alt={`${carName}-${i}`}
          width={800} // request higher-res image from Next.js
          height={600}
          className="rounded-xl object-contain w-full h-auto transition-transform duration-500 ease-in-out hover:scale-105"
          quality={100} // full resolution
          priority
        />
      </div>

    </div>
  </SwiperSlide>
))}

        
        </Swiper>
      </div>

      {/* === SPECS SECTION === */}
      <div className="mt-10 text-center max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#ffc300]">
          Specifications
        </h2>
        <ul className="text-base sm:text-lg space-y-3 text-gray-300">
          {car.specs.map((s, i) => (
            <li key={i} className="hover:text-white transition-all">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
