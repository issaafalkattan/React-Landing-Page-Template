import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";

import { Contact } from "./components/contact";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import "./App.css";
import dummyAvatar from "./components/assets/uifaces-avatar.jpg";

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
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />  
      <FloatingWhatsApp
          phoneNumber = "558494797413"
          accountName = "Adriana Magalhães"
          avatar={dummyAvatar}
          statusMessage= "Em geral, respondemos dentro de 1 hora."
          chatMessage = "Olá! Sou Adriana Magalhães! 🤝 Como posso ajudar?"
          placeholder = "Digite sua mensagem..."
          
        
      />
      <Contact data={landingPageData.Contact} />
      
    </div>
  );
};

export default App;
