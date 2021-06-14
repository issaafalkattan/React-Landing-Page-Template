import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
// import ThemeChanger from './components/ThemeChanger';
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
// import Engineering from "./pages/Engineering-Geophysics";
// import Environment from "./pages/Environment-Geophysics";
// import { Route, Switch } from "react-router-dom";

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
      <Header />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />

      {/* <Switch>
        <Route path="/#services/engineering" exact>
          <Engineering />
        </Route>
        <Route path="/#services/environment" exact>
          <Environment />
        </Route>
      </Switch> */}

      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
