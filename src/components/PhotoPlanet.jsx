import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

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
]; // Puedes agregar más imágenes

const PhotoPlanet = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img === selectedImage ? null : img);
  };

  return (
    <div className="photo-planet-container">
      <Canvas
        camera={{
          position: [0, 10, 25], // Cámara más alta (eje Y positivo)
          fov: 80, // Campo de visión más amplio
          near: 0.1, // Plano de recorte cercano
          far: 1000, // Plano de recorte lejano (más grande para evitar cortes)
        }}
      >
        <OrbitControls
          enableZoom={true}
          minDistance={10} // Distancia mínima de la cámara al planeta
          maxDistance={50} // Distancia máxima de la cámara al planeta
          minPolarAngle={0} // Ángulo mínimo de rotación vertical (hacia abajo)
          maxPolarAngle={Math.PI} // Ángulo máximo de rotación vertical (hacia arriba)
        />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 🌍 Esfera central (Planeta) más grande y ligeramente más arriba */}
        <mesh position={[0, 0, 0]}> {/* Centramos el planeta en el eje Y */}
          <sphereGeometry args={[6, 32, 32]} /> {/* Planeta más grande */}
          <meshStandardMaterial color="blue" wireframe />
        </mesh>

        {/* 🖼️ Imágenes distribuidas en 3D alrededor del planeta */}
        {images.map((src, index) => {
          // Coordenadas esféricas para distribuir las imágenes en 3D
          const phi = Math.acos(-1 + (2 * index) / images.length); // Ángulo polar
          const theta = Math.sqrt(images.length * Math.PI) * phi; // Ángulo azimutal

          // Convertir coordenadas esféricas a cartesianas
          const radius = 12; // Radio más grande para la esfera de imágenes
          const x = radius * Math.sin(phi) * Math.cos(theta);
          const y = radius * Math.sin(phi) * Math.sin(theta);
          const z = radius * Math.cos(phi);

          return (
            <mesh
              key={index}
              position={[x, y, z]} // Ajustar la posición en Y para mover las imágenes con el planeta
              rotation={[0, -theta, 0]} // Rotar las imágenes para que miren hacia el planeta
              onClick={() => handleImageClick(src)}
            >
              <planeGeometry args={selectedImage === src ? [3, 3] : [2, 2]} /> {/* Imágenes más grandes */}
              <meshBasicMaterial
                map={new THREE.TextureLoader().load(src)}
                transparent
                side={THREE.DoubleSide} // Permite que la imagen sea visible por ambos lados
              />
            </mesh>
          );
        })}
      </Canvas>
    </div>
  );
};

export default PhotoPlanet;

