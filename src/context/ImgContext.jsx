import React from "react";
import { createContext, useContext, useState } from "react";

const ImgContext = createContext();

export const useImg = () => {
  const context = useContext(ImgContext);
  if (!context) {
    throw new Error("useImg must be used within an ImgProvider");
  }
  return context;
};

export const ImgProvider = ({ children }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <ImgContext.Provider value={{ selectedImg, setSelectedImg }}>
      {children}
    </ImgContext.Provider>
  );
};
