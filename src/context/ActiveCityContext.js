import { createContext } from 'react';

export const ActiveCityContext = createContext({
    activeCity: {},
    changeActiveCity: () => {},
})