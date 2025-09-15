import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import assets from "../assets/assets.js";

const MainContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCVU, setShowCVU] = useState(false);
  const [buttonText, setButtonText] = useState("Mostrar y Copiar CVU");
  const [buttonColor, setButtonColor] = useState("bg-[#228B22]");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const images = [
    { src: assets.carrusel1 },
    { src: assets.carrusel2 },
    { src: assets.carrusel3 },
    { src: assets.carrusel4 },
    { src: assets.carrusel5 },
    { src: assets.carrusel6 },
    { src: assets.carrusel7},
    { src: assets.carrusel8 },
    { src: assets.carrusel9},
    { src: assets.carrusel10}
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Cambiar imagen cada 3 segundos

    return () => clearInterval(intervalId);
  }, []);

  const handleCopyCVU = () => {
    const cvu = "0000003100077329958295";
    navigator.clipboard.writeText(cvu).then(() => {
      setButtonText("¡Copiado!");
      setButtonColor("bg-green-500");
      setTimeout(() => {
        setButtonText("Ocultar CVU");
        setButtonColor("bg-[#006400]");
      }, 2000); // Cambiar de vuelta después de 2 segundos
    });
  };

  return (
    <div>
      {/* Sección de "Nos Casamos" */}
   <section
  id="fecha"
  className="min-h-screen flex items-center justify-center relative bg-gray-900"
>
  {/* Imagen de fondo con opacidad */}
 <div
    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
      isImageLoaded ? "opacity-100" : "opacity-0"
    }`}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(${assets.fondo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <img
      src={assets.fondo}
      alt="Fondo"
      onLoad={handleImageLoad}
      className="hidden" 
    />
  </div>

  {/* Contenido */}
  {isImageLoaded && (
    <motion.div
  className="container flex flex-col text-center relative z-10 px-4"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-200 drop-shadow-lg mx-2">
      BODAS DE PLATA
    </h2>
    <h3 className="text-2xl md:text-3xl text-gray-200 italic mt-2 flex items-center justify-center drop-shadow-md mx-2">
      <FontAwesomeIcon icon={faHeart} className="mr-2" />
      Cristian y Romina
      <FontAwesomeIcon icon={faHeart} className="ml-2" />
    </h3>
    <p className="text-lg md:text-xl text-gray-200 mt-2 drop-shadow-sm mx-2">
      Domingo 19 de octubre
    </p>
    </motion.div>

  )}
</section>


      {/* Sección de Ubicación */}
      <section
        id="ubicacion"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-50 space-y-6 lg:flex-row-reverse lg:items-center lg:space-y-0"
      >
        {/* Contenedor del texto */}
        <div className="w-full text-center lg:w-1/2 space-y-4 order-1 lg:order-none">
          <img
            src={assets.anillos}
            alt="anillos"
            className="w-25 mx-auto mb-2"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            CELEBRACIÓN
          </h2>
          <p className="italic text-gray-600">
            “El amor es sufrido, es benigno;el amor no tiene envidia,
             el amor no es jactancioso, no se envanece;no hace nada indebido, no busca 
             lo suyo, no se irrita, no guarda rencor.”<br></br>1Corintios 13:4-5
          </p>
          <p className="text-gray-800">
            Los esperamos el Domingo 19 de octubre de 11:00 a 19:00 en
            <b className="block mt-2 text-lg">LA QUINTA "CATALINA"</b>
          </p>
          <p className="text-gray-700">
            Domingo Scarlatti 4480 G.CATAN
          </p>
          <a
            href="https://maps.app.goo.gl/JBVg6pGhwcJZGZQa7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#228B22] hover:bg-[#006400] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 ease-in-out space-x-2 mt-4"
            style={{ gap: "0.5rem" }}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
            <span>Cómo llegar</span>
          </a>
        </div>

        {/* Contenedor del carrusel en lugar del video */}
        <div className="w-full lg:w-1/2 order-2 lg:order-none flex flex-col items-center mb-8 lg:mb-0 my-12">
          <div className="relative bg-white shadow-lg p-6 rounded-lg flex items-center justify-center text-center">
            <img
              src={images[currentIndex].src}
              alt={`Foto ${currentIndex + 1}`}
              style={{ height: "35rem", width: "50rem" }}
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
        </div>

      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hecho con ❤️ por Gabo y Juani
        </p>
      </footer>
    </div>
  );
};

export default MainContent;
