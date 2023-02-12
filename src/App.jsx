import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Fans } from "./components/Fans";
import { About } from "./components/about";
import { Artists } from "./components/Artists";
import { Insights } from "./components/Insights";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Fans data={landingPageData.Fans} />
      <About data={landingPageData.About} />
      <Artists data={landingPageData.Artists} />
      <Insights data={landingPageData.Insights} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
