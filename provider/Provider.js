import { View, Text } from "react-native";
import React, { createContext, useState } from "react";
const DataContext = createContext();
function SPProvider({ children }) {
  const [data, setData] = useState();
  const [l, setL] = useState();
  const [d, setD] = useState();
  const [bp, setBp] = useState();
  const [user, setUser] = useState();
  return (
    <DataContext.Provider
      value={{ data, setData, l, setL, d, setD, bp, setBp, user, setUser }}
    >
      {children}
    </DataContext.Provider>
  );
}
export { DataContext, SPProvider };
