import React, { useEffect } from "react";
import "./NightSky.css"; // Estilos para el fondo estrellado

function NightSky() {
    useEffect(() => {
        const starsContainer = document.querySelector(".stars");

        // Genera estrellas aleatorias
        for (let i = 0; i < 200; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
        }
    }, []);

    return (
        <div className="night-sky">
        <div className="stars"></div>
        <div className="twinkling"></div>
        </div>
    );
}

export default NightSky;