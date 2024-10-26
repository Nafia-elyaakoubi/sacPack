import React, { useEffect } from "react";
import './Navigation.css'; // Import the CSS file

export const Navigation = (props) => {
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.getElementById("menu");
    const title = document.getElementById("title");
    // const menuBtn = document.getElementById("menuBtn")
    const navItems = document.getElementsByClassName("page-scroll");
    const navbarCollapse = document.getElementsByClassName("navbar-collapse")[0];
    const menuBtn = document.getElementsByClassName("navbar-toggle")[0];

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scroll down
        // navbar.classList.add("hidden");
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
        title.style.display = "none";
        // menuBtn.style.backgroundColor = "#333333";
      } else {
        // Scroll up
        navbar.style.backgroundColor = "white";
        navbar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.15)";
        title.style.display = "block"; 
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    const handleNavitemClick = () => {
      const navbarToggler = document.querySelector(".navbar-toggle");
      const navbarCollapse = document.querySelector(".navbar-collapse");
      navbarToggler.classList.add("collapsed");
      navbarCollapse.classList.remove("in");
    }

    const handleNavbarBackground = () => {
        navbarCollapse.style.backgroundColor = "white";
    }

    Array.from(navItems).forEach((item, index) => {
      item.addEventListener('click', handleNavitemClick);
    });

    window.addEventListener("scroll", handleScroll);
    // navItem.addEventListener("click", handleNavitemClick);
    // na .addEventListener("click", handleNavbarCollapse);
    menuBtn.addEventListener("click", handleNavbarBackground);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-wrapper">
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index} className="announcement-text">Échantillon Gratuit</span>
          ))}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              id="menuBtn"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" id="title" href="#page-top">
              Sac-Pack
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#catalogue" className="page-scroll">
                  catalogue
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Personnalisation
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};