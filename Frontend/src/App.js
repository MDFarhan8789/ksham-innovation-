// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/ContactPage";
import Content from "./components/Content";
import ProjectCards from "./components/ProjectCards";
import Video from "./components/Video";
import LogoSlider from "./components/LogoSlider";
import Footer from "./components/Footer";

function App() {
  const [isAbout, setIsAbout] = useState(false);
  const [isContact, setIsContact] = useState(false);


  const toggleSection = (section) => {
    if (section === "about") {
      setIsAbout(true);
      setIsContact(false);
    } else if (section === "contact") {
      setIsAbout(false);
      setIsContact(true);
    } else if (section === "home") {
      setIsAbout(false);
      setIsContact(false);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar toggleSection={toggleSection} />

        {isAbout ? (
          <About />
        ) : isContact ? (
          <Contact />
        ) : (
          <>
            <Content />
            <ProjectCards />
            <Video />
            <LogoSlider />
          </>
        )}
         <Footer />
      </div>
    </Router>
  );
}

export default App;
