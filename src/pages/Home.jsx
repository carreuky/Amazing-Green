import { Fragment } from "react";
import Content from "../components/content";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Collection from "../components/collection";
import IntroNav from "../components/introNav";
export default function home() {
  return (
    <Fragment>
      <BrowserRouter>
        <IntroNav/>
        <Content/>
        <Collection/>

      </BrowserRouter>
    </Fragment>
  );
}
