import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { FloatingWhatsApp } from 'react-floating-whatsapp'; // Import the Floating WhatsApp component
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
      {<Team data={landingPageData.Team} />}

      <Contact data={landingPageData.Contact} />
      
      {/* Floating WhatsApp Button */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
  <FloatingWhatsApp
    phoneNumber="+212 770-950926"
    accountName="Support Sac-Pack"
    avatar="img/what.jpg"
    statusMessage="Répond généralement en moins d'une heure"
    chatMessage={` Bonjour et bienvenue chez Sac-Pack ! 
Vous souhaitez un emballage élégant et personnalisé ?
Écrivez-nous pour en savoir plus !`}
    placeholder="Tapez votre message ici ..."
  />
</div>

    </div>
  );
};

export default App;
