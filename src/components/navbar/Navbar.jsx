import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logometam.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="navbar-container">
      <div className="logo" data-aos="fade-right">
        <img src={isMobile ? logo2 : logo} alt="logo" style={isMobile ? { width: "40px" } : { width: "120px" }} />
      </div>

      <div className={`nav-items ${menuOpen ? "active" : ""}`} data-aos="fade-down">
        <h3 onClick={() => handleScroll("about")}>Sobre</h3>
        <h3 onClick={() => handleScroll("services")}>Serviços</h3>
        <h3 onClick={() => handleScroll("resources")}>Recursos</h3>
        <h3 onClick={() => handleScroll("strategic-actions")}>Ações Estratégicas</h3>
        <h3 onClick={() => handleScroll("courses")}>Cursos</h3>
      </div>

      <div className="side-nav-items" data-aos="fade-left">
        <Link to="/maintenance">
          <span>Entrar</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
