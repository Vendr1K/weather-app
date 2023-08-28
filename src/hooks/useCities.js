import { useContext } from "react";
import { CitiesPoolContext } from "../context/CitiesPoolContext";

export const useCities = () => useContext(CitiesPoolContext);