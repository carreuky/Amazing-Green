import React from "react";
import Intro from "../components/intro";
import Navbar from "../components/navBar";

export default function introNav() {
  
  return (
    <div class="divide-y divide-[#5d8d61]">
      <Intro />
      <Navbar />
    </div>
  );
}
