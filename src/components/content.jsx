import React from "react";
import energy from "../assets/energy.jpg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
export default function content() {
  return (
    <section
      className="font-ale text-white bg-hero-pattern  lg:min-h-screen-75 p-20 bg-no-repeat bg-cover bg-center mx-auto"
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),url(${energy})`,
      }}
    >
      <div className="hero__wrap" bis_skin_checked="1">
        <div className="bg-[#002c77] p-1 w-32 text-center">Heart Health</div>
        <h2 className=" my-6 text-5xl lg:w-1/2">
          5 Healthy-Heart Steps That Take Just Minutes
        </h2>
        <div className="my-4 text-xl lg:w-1/2">
          A few simple habits can help you protect your heart to live a longer,
          healthier life—starting now.
        </div>
      </div>
      <button className="px-6 py-3 mt-3  bg-[#5d8d61] hover:bg-transparent  hover:border-2 ">
        Learn More
        <i class="fa-solid fa-arrow-up-right-from-square fa-bounce"></i>
      </button>
    </section>
  );
}
