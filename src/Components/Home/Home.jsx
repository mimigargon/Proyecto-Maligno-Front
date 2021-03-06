import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";



const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">MALIGNO RETURNS</h1>
      <section>
        <div className="container">
          <div className="box">
            <div className="p">
              El contenido de este juego es una simulación.
            </div>
            <div className="p">Recomendado para mayores de edad.</div>
          </div>
          <div>
            <div>
              <div className="title">¡ATENCIÓN!</div>
            </div>
          </div>
        </div>
      </section>
      <div className="buttons-container">
        <Link to={"/game-info"}>
          <button className="home-btn">START</button>
        </Link>
        <Link to={"/login"}>
          <button className="home-btn">LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
