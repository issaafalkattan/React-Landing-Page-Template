import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
// import ThemeChanger from './components/ThemeChanger';
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Switch, Route, Redirect } from "react-router-dom";
import Engineering from "./pages/Engineering-demo";
import Environment from "./pages/Environment";
import ERT from "./pages/ERT";
import Microgravity from "./pages/Microgravity";
import Multichannel from "./pages/Multichannel";
import Seismic from "./pages/Seismic";
import Downhole from "./pages/Downhole";
import Crosshole from "./pages/Crosshole";
import Refraction from "./pages/Refraction";
import Ground from "./pages/Ground";
import ElectroMagnetic from "./pages/ElectroMagnetic";
import Home from "./components/Home";
import FixedSocialBar from "./components/FixedSocialBar";
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
      <FixedSocialBar/>
      <Switch>
        <Route exact path='/' >
          <Redirect to='/home' />
        </Route>
        
        <Route  path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About data={landingPageData.About} />
        </Route>
        <Route exact path="/services">
          <Services data={landingPageData.Services} />
        </Route>
        <Route exact path="/ert">
          <ERT />
        </Route>
        <Route exact path="/microgravity">
          <Microgravity />
        </Route>
        <Route exact path="/multichannel">
          <Multichannel />
        </Route>
        <Route exact path="/seismic">
          <Seismic />
        </Route>
        <Route exact path="/downhole">
          <Downhole />
        </Route>
        <Route exact path="/crosshole">
          <Crosshole />
        </Route>
        <Route exact path="/refraction">
          <Refraction />
        </Route>
        <Route exact path="/ground">
          <Ground />
        </Route>
        <Route exact path="/electromagnetic">
          <ElectroMagnetic />
        </Route>
        <Route exact path="/engineering">
          <Engineering />
        </Route>
        <Route exact path="/environment">
          <Environment />
        </Route>

        <Route exact path="/portfolio">
          <Gallery />
        </Route>
        {/* <Route exact path="/testimonials">
          <Testimonials data={landingPageData.Testimonials} />
        </Route> */}
        <Route exact path="/contact">
          <Contact data={landingPageData.Contact} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
