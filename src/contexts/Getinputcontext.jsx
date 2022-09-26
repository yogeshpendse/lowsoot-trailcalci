import { createContext, useContext, useState } from "react";

const Getinputprov = createContext();

export function Getinputcontextprovider({ children }) {
  const [cars, setCars] = useState([]);
  function addnewcar() {
    const currarray = [...cars];
    if (currarray.length > 0) {
      setCars([
        ...currarray,
        {
          carnumber: currarray[currarray.length - 1].carnumber + 1,
          cartype: "gasoline",
          driveeachweek: "0",
          kilometersperliter: "1",
        },
      ]);
    } else {
      setCars([
        {
          carnumber: 1,
          cartype: "gasoline",
          driveeachweek: "0",
          kilometersperliter: "1",
        },
      ]);
    }
  }
  function removenewcar() {
    setCars((prevstate) => {
      if (prevstate.length > 0) {
        return [...prevstate].slice(0, prevstate.length - 1);
      }
    });
  }
  return (
    <Getinputprov.Provider value={{ cars, setCars, addnewcar, removenewcar }}>
      {children}
    </Getinputprov.Provider>
  );
}

export function useGetinput() {
  return useContext(Getinputprov);
}
