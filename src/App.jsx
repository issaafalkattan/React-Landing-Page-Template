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
import { Switch, Route, Redirect } from "react-router-dom";
import Engineering from "./pages/Engineering-demo";
import Environment from "./pages/Environment";

export const scroll = new SmoothScroll('a[href*="/"]', {
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
      <Switch>
        <Route exact path='/' >
          <Redirect to='/page-top' />
        </Route>
        <Route  exact path="/page-top">
          <Header />
        </Route>
        <Route exact path="/about">
          <About data={landingPageData.About} />
        </Route>
        <Route exact path="/services">
          <Services data={landingPageData.Services} />
        </Route>
        <Route exact path="/engineering" >
          <Engineering />
        </Route>
        <Route exact path="/environment" >
          <Environment />
        </Route>
        <Route exact path="/portfolio">
          <Gallery />
        </Route>
        <Route exact path="/testimonials">
          <Testimonials data={landingPageData.Testimonials} />
        </Route>
        <Route exact path="/contact">
          <Contact data={landingPageData.Contact} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
