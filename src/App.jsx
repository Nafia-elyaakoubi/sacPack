import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
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
      <About data={landingPageData.About} />

      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Gallery data={landingPageData.Gallery} />

      {<Team data={landingPageData.Team} />}

      <Contact data={landingPageData.Contact} />
      
{/* Floating WhatsApp Button */}
{/* Floating WhatsApp Button */}
<div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
  <a 
    href="https://wa.me/212770950926"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    <img 
      src="img/whatsapp.png" 
      alt="Support Sac-Pack" 
      style={{ borderRadius: '50%', width: '50px', height: '50px' }}
    />
  </a>
</div>



    </div>
  );
};

export default App;
