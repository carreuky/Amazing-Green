import { Fragment } from "react";
import Navbar from "../components/navBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Intro from "../components/intro";
export default function home() {
  return (
    <Fragment>
      <BrowserRouter>
        <div class="divide-y divide-[#5d8d61]">
          <Intro />
          <Navbar />
        </div>
      </BrowserRouter>
    </Fragment>
  );
}
