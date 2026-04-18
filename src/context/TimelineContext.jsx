"use client";
import React, { createContext, useContext, useState } from "react";
import { Toaster } from "react-hot-toast";

const TimelineContext = createContext(null);

export const useTimeline = () => useContext(TimelineContext);

export default function TimelineProvider({ children }) {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries((prev) => [{ id: Date.now(), ...entry }, ...prev]);
  };

  const value = { entries, addEntry };

  return (
    <TimelineContext.Provider value={value}>
      {children}
      <Toaster position="top-right" />
    </TimelineContext.Provider>
  );
}
