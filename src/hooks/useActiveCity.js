import { useContext } from "react";
import { ActiveCityContext } from "../context/ActiveCityContext";

export const useActiveCity = () => useContext(ActiveCityContext);