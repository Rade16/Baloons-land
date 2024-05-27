import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const roadmapRef = useRef(null);
  const minigamesRef = useRef(null);
  const nftRef = useRef(null);
  const linksRef = useRef(null);

  return (
    <ScrollContext.Provider
      value={{ aboutRef, roadmapRef, minigamesRef, nftRef, linksRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
