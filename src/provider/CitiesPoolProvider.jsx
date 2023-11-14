import React, { useEffect, useState } from 'react';
import { CitiesPoolContext } from '../context/CitiesPoolContext';

const storage = {
  setItem: (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
  },
  getItem: (name) => {
    const item = localStorage.getItem(name);
    if (item) {
      return JSON.parse(item);
    }
  },
};

export function CitiesPoolProvider({ children, ...props }) {

  const [cities, setCities] = useState(storage.getItem('cities-pool') || [])

  const changeCitiesPool = ({ city, lat, lon, id, apiName }) => {
    const newCity = {
      city: city,
      lat: lat,
      lon: lon,
      id: id,
      apiName: apiName
    }
    const newCities = cities.length > 4 ? [newCity, ...cities].slice(0, 5) : [newCity, ...cities];
    setCities(newCities);
  }

  useEffect(() => {
    localStorage.setItem('cities-pool', JSON.stringify(cities));
  }, [cities])

  return (
    <CitiesPoolContext.Provider value={{ cities, changeCitiesPool }} {...props}>
      {children}
    </CitiesPoolContext.Provider>
  )
}
