import { useState, useEffect } from "react";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; // ScrollUpButton from React
import { Navigation } from "./components/navigation"; // Navigation-bar 
import { Header } from "./components/header"; 
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import JsonData from "./data/data.json"; // JsonData for the content
import { Sellform } from "./components/sellform";
import SmoothScroll from "smooth-scroll"; // SmoothScroll 
import "./App.css"; // CSS-File
import ArticleList from "./components/articles";
import { Footer } from "./components/footer";
 


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
      <About data={landingPageData.About} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Sellform />
      <ArticleList />
      <Footer />
    
      <ScrollUpButton/>
    </div>



  );
};

export default App;
