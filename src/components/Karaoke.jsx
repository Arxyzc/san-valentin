import React, { useState, useEffect } from "react";
import { Howl } from "howler";

const lyrics = [
    { time: 11, text: "En el silencio cósmico, tu voz resuena," },
    { time: 21, text: "un eco de hechizos que rompen la quietud." },
    { time: 29, text: "Eres la bruja que domina el vacío," },
    { time: 34, text: "y en tu caos encuentro mi eterna luz." },
    { time: 40, text: "Las estrellas giran, el universo conspira," },
    { time: 44, text: "nos encontró en su laberinto sin final." },
    { time: 49, text: "Tu magia es el hilo que teje nuestro destino," },
    { time: 54, text: "y en tu esencia, hallé mi hogar celestial." },
    { time: 59, text: "Sé mi San Valentín, bruja de las sombras," },
    { time: 68, text: "en este ritual de oscuridad y fulgor." },
    { time: 78, text: "El caos es nuestro pacto, el amor nuestro hechizo," },
    { time: 84, text: "y en el abismo infinito, arde nuestra pasión." },
    { time: 93, text: "Tus ojos son portales a otras dimensiones," },
    { time: 104, text: "donde el tiempo se quiebra y el espacio se dobla." },
    { time: 112, text: "Eres la sacerdotisa del caos estelar," },
    { time: 117, text: "y en tu abrazo, el universo se desdobla." },
    { time: 123, text: "Las estrellas giran, el universo conspira," },
    { time: 127, text: "nos encontró en su laberinto sin final." },
    { time: 132.5, text: "Tu magia es el hilo que teje nuestro destino," },
    { time: 137, text: "y en tu esencia, hallé mi hogar celestial." },
    { time: 142.5, text: "Sé mi San Valentín, bruja de las sombras," },
    { time: 150, text: "en este ritual de oscuridad y fulgor." },
    { time: 161, text: "El caos es nuestro pacto, el amor nuestro hechizo," },
    { time: 167, text: "y en el abismo infinito, arde nuestra pasión." },
    { time: 174, text: "Per noctem et sidera, te amo." },
    { time: 177, text: "In infinito caos, tuus sum." },
    { time: 182, text: "Nostrum fatum inter astra scriptum est," },
    { time: 186, text: "et in magia tua, cor meum ardet." },
    { time: 191, text: "El cosmos nos unió en su eterno designio," },
    { time: 201, text: "dos almas perdidas que al fin se encontraron." },
    { time: 209, text: "Eres mi bruja, mi caos, mi eternidad," },
    { time: 215, text: "y en tu magia, nuestro amor se consagró." },
];

function Karaoke() {
    const [currentLyric, setCurrentLyric] = useState("");
    const [audio, setAudio] = useState(null);
    const [showButton, setShowButton] = useState(true);
    const [particles, setParticles] = useState([]);

    const handlePlay = () => {
    const sound = new Howl({
        src: ["/Cósmica-Bruja-del-Caos.mp3"],
        autoplay: true,
        onend: () => {
            console.log("Canción terminada");
        },
    });
    setAudio(sound);
    setShowButton(false);

      // Sincroniza la letra con el audio
        lyrics.forEach((lyric) => {
        setTimeout(() => {
            setCurrentLyric(lyric.text);
        }, lyric.time * 1000);
    });

    // Genera partículas mágicas
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 10 + 5,
    }));
    setParticles(newParticles);

    // Limpia las partículas después de 2 segundos
    setTimeout(() => {
        setParticles([]);
    }, 2000);
};

    return (
        <div className="karaoke">
        {showButton && (
            <button className={showButton ? "" : "hide"} onClick={handlePlay}>
                Inicio
            </button>
        )}
        {particles.map((particle) => (
            <div
                key={particle.id}
                className="particle"
                style={{
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
        }}
        ></div>
        ))}
            <p>{currentLyric}</p>
        </div>
    );
}

export default Karaoke;