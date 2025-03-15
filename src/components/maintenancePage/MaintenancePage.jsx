import React from "react";
import { Settings } from "lucide-react";
import "./maintenancePage.css";
import logometam from "../../assets/images/logometam.png"
import drone from "../../assets/images/drone.png"
import aeromedico from "../../assets/images/aeromedico.png"


const MaintenancePage = () => {
  return (
    <div className="maintenance-container">
      <div className="logo-group">
        <img src={logometam} alt="Logo Metam" className="logo logo-metam" />
        <img src={drone} alt="Drone" className="logo logo-drone" />
        <img src={aeromedico} alt="Aero Médico" className="logo logo-aeromedico" />
      </div>

      <div className="maintenance-header">
        <h1>Em Manutenção</h1>
        <Settings size={32} className="settings-icon" />
      </div>

      <p className="maintenance-text">
        Estamos trabalhando para construir algo incrível. Volte em breve!
      </p>
    </div>
  );
};

export default MaintenancePage;
