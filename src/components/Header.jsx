import React, { useEffect, useState } from "react";

const Header = () => {
  const [showDate, setShowDate] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setShowDate(position > 600);
    setIsScrolled(position > 600); // Cambia el estado basado en el scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full p-4 flex justify-between items-center z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#C2B2A0]" : "bg-inherit"
      } text-white`}
    >
      {showDate && (
        <div id="scrollDate" className="text-sm">
          <a href="#fecha" className="hover:underline">
            19 de Octubre, 2025
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
