
import { Navigation } from "./navigation";
// import ThemeChanger from './ThemeChanger';
import { Header } from "./header";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
// import { Testimonials } from "./testimonials";
import { Contact } from "./contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import { useState, useEffect } from "react";

// export const scroll = new SmoothScroll('a[href*="/"]', {
//     speed: 1000,
//     speedAsDuration: true,
//   });
  
  

const Home=()=>{
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
    return (
         <div className="home-content">
             {/* <Navigation /> */}
             <Header />
             <About data={landingPageData.About} />
             <Services data={landingPageData.Services} />
             <Gallery />
             <Contact data={landingPageData.Contact} />
         </div>
    );
};
export default Home;