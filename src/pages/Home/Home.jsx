import React from "react";
import Header from "../../components/header/Header";
import Portada from "../../components/portada/Portada";
import "./home.css";
import spotify from "../../assets/icon/spotify.png";
import discord from "../../assets/icon/discord.png";
import twitter from "../../assets/icon/twitter.png";
import instagram from "../../assets/icon/instagram.png";

function Home() {
  return (
    <>
      <div className="home">
        <Header></Header>

        <div className="title__container">
          <h1 className="title">I'm</h1>
          <h1 className="title title--secondary">Louis</h1>
        </div>
        <div className="portada__main">
          <Portada></Portada>
        </div>

        {/*es para desktop */}
        <div className="comentario">
          <p>
            I'm a versatile programmer with experience in game development, web
            applications, Android, and network solutions.
          </p>
        </div>

        <div className="accounts">
          <a href="https://www.instagram.com/lf3r._chr/">
            <img src={instagram} alt="" />
          </a>

          <a href="https://open.spotify.com/playlist/664GP2vplKClhHeC4Bavk0?si=3b6bbae274784431">
            <img src={spotify} alt="" />
          </a>
          <a href="https://twitter.com/Luis3Fernando_C">
            <img src={twitter} alt="" />
          </a>
          <a href="https://discord.com/users/f3rnan3l3#2673">
            <img src={discord} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
