import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Intro() {
  let iconStyles = { fontSize: "1.1em" };
  return (
      <div className="p-2 font-ale  text-sm">
        <div className=" px-2 flex flex justify-end">
            <p className="px-4">Working Hours Monday - Saturday <b>08:00-17:00</b> </p>
            <a href="mailto:mainazac@gmail.com">mainazac@gmail.com</a>
          <ul className="flex  flex-wrap p-1 px-2">
            <li className="px-2 ">
              <a
                className="hover:text-[#5d8d61]"
                href="http://web.facebook.com/IamDMWachira"
                target="_blank"
              >
                <FaFacebook style={iconStyles} />
              </a>
            </li>
            <li className="px-2">
              <a
                className="hover:text-[#5d8d61] icon"
                href="https://twitter.com/mutathiwachira"
                target="_blank"
              >
                <FaTwitter style={iconStyles} />
              </a>
            </li>
            <li className="px-2">
              <a
                className=" hover:text-[#5d8d61] icon"
                href="https://www.instagram.com/iamdmwachira"
                target="_blank"
              >
                <FaInstagram style={iconStyles} />
              </a>
            </li>
            <li className="px-2">
              <a
                className="hover:text-[#5d8d61] icon"
                href="http://www.linkedin.com/in/mutathi-wachira-716bb8195"
                target="_blank"
              >
                <FaLinkedinIn style={iconStyles} />
              </a>
            </li>
          </ul>
        </div>
      </div>
       );
}
