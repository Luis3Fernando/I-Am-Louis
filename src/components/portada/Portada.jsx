import React from "react";
import "./portada.css";
import perfil from "../../assets/img/perfil3.png";
import flecha from "../../assets/icon/angulo-doble-pequeno-derecho (1).png";

function Portada() {
  return (
    <div className="portada">
      <img className="imagen" src={perfil} alt="" />
      
      <div className="portada__enlace">
        <button><img src={flecha} alt="" /></button>
      </div>

      <div className="portada__info">
          <p>Hola Mundo <hr /> </p>
      </div>
    </div>
  );
}

export default Portada;
