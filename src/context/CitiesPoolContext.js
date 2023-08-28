import { createContext } from 'react';

export const CitiesPoolContext = createContext({
    cities: [],
    changeCitiesPool: () => {},
})