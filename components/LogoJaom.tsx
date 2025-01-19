import React from "react";

const LogoJaom: React.FC = () => {
  return (
    <div className="flex items-center">
      <img
        src="/logo-image.png"
        alt="Logo Jaom"
        className="h-12 w-auto object-contain" // Height is fixed; width adjusts automatically
      />
    </div>
  );
};

export default LogoJaom;
