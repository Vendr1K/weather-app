import React, { useState } from 'react';
import { ActiveCityContext } from '../context/ActiveCityContext';

export function ActiveCityProvider({children, ...props}) {
    const [activeCity, setActiveCity] = useState({});

    const changeActiveCity = (city) => {

        setActiveCity({ 
            city: city.city,
            lat: city.lat,
            lon: city.lon,
            id: city.id,
            apiName: city.apiName
        })
    }

  return (
    <ActiveCityContext.Provider value={{activeCity, changeActiveCity}} {...props}>
        {children}
    </ActiveCityContext.Provider>
  )
}
