import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import logo from "../assets/logo.webp";


import { Link } from "react-router-dom";


export default function navBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 font-ale text-xs fixed inset-x-0 bg-white">
    <div className="p-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:p-4">
      <div className="relative flex items-center justify-between">
        <img className="object-cover h-16 w-40" src={logo} alt="logo" />

        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/"
              className="hover:text-[#5d8d61]  tracking-wide  transition-colors duration-200 "
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#5d8d61]  tracking-wide  transition-colors duration-200 "
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              Linkria-label="Product pricing"
              title="Product pricing"
              className="hover:text-[#5d8d61]  tracking-wide  transition-colors duration-200 "
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-[#5d8d61]  tracking-wide  transition-colors duration-200 "
            >
              PRODUCTS
            </Link>
          </li>
        </ul>
        <ul className="flex items-center space-x-8 ">
          <li className=" hidden lg:flex">
            <a
              href="tel:+254 712 574 584"
              className="text-[#5d8d61]    inline-flex items-center justify-center h-10 px-2  tracking-wide  transition duration-200    focus:shadow-outline focus:outline-none"
            >
              <BsTelephoneFill />

              <span className="pl-1">
                {" "}
                <span>+254 723 231 641</span>
              </span>
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="  transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-[#5d8d61]" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center "
                    >
                      <img
                        className="object-cover h-12 w-32"
                        src=""
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-[#FB743F] focus:bg-[#FB743F]focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        className="w-5 hover:text-white text-black"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li onClick={() => setIsMenuOpen(false)}>
                      <Link
                        to="/"
                        className="hover:text-[#5d8d61]  tracking-wide  transition-colors duration-200 "
                      >
                        HOME
                      </Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <Link
                        to="/about"
                        className="hover:text-[#5d8d61]  tracking-wide  transition-colors duration-200 "
                      >
                        ABOUT
                      </Link>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#5d8d61]"
                      >
                        SERVICES
                      </a>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                      <Link
                        to="/products"
                        className="hover:text-[#5d8d61] font-medium tracking-wide  transition-colors duration-200 "
                      >
                        PRODUCTS
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
    
      </div>
    </div> 
  </nav>
  );
}
