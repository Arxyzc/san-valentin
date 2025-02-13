import React from "react";
import NightSky from "./components/NightSky";
import Karaoke from "./components/Karaoke";
import ImageCarousel from "./components/ImageCarousel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NightSky />
      <h1>¿Quieres ser mi san Valentin?</h1>
      <div className="content">
        <Karaoke />
      </div>
      <ImageCarousel />
    </div>
  );
}

export default App;