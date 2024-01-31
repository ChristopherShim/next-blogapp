"use client";

import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const allBlogs = async () => {
    const res = await axios.get("/api/tasks");
    setBlogs(res);
  };
  useEffect(() => {
    allBlogs();
  });

  return (
    <GlobalContext.Provider value={{ blogs }}>
      <GlobalUpdateContext.Provider value={{}}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
