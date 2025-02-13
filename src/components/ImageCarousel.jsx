import React, { useState } from "react";
import "./ImageCarousel.css"; // Archivo de estilos

const images = [
    "/FOTO-1.jpg",
    "/FOTO-3.jpg",
    "/FOTO-4.jpg",
    "/FOTO-5.jpg",
    "/FOTO-6.jpg",
    "/FOTO-7.jpg",
    "/FOTO-8.jpg",
    "/FOTO-9.jpg",
    "/FOTO-12.jpg",
    "/FOTO-14.jpg",
    "/FOTO-16.jpg",
    "/FOTO-17.jpg",
    "/FOTO-18.jpg",
    "/FOTO-19.jpg",
    "/FOTO-20.jpg",
    "/FOTO-21.jpg",
    "/FOTO-22.jpg",
    "/FOTO-24.jpg",
    "/FOTO-25.jpg",
    "/FOTO-26.jpg",
    "/FOTO-27.jpg",
    "/FOTO-28.jpg",
    "/FOTO-29.jpg",
    "/FOTO-30.jpg",
    "/FOTO-31.jpg",
    "/FOTO-32.jpg",
]; // Rutas de tus imágenes

const ImageCarousel = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={`carousel-container ${isHovered ? "paused" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="carousel">
                {images.map((src, index) => {
                    const angle = (360 / images.length) * index;
                    return (
                        <div
                            key={index}
                            className={`carousel-item ${hoveredIndex === index ? "hovered" : ""}`}
                            style={{
                                transform: `rotateY(${angle}deg) translateZ(700px)`, // Espaciamos más las imágenes y mantenemos el círculo fijo
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={src} alt={`Imagen ${index + 1}`} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageCarousel;
