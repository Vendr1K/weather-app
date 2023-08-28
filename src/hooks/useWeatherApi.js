import { useEffect, useState } from "react";
import { useActiveCity } from "./useActiveCity";

const KEY = '410eca8247cda096958ede6c0d087db6'

export  function useWeatherApi() {
    const [weather, setWeather ] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const {activeCity} = useActiveCity();
    
     useEffect(  () => {
        if(!activeCity.city)  return
        setError('')
            const fetchWeather = async () => 
            {
              try {
                setIsLoading(true);
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${activeCity.lat}&lon=${activeCity.lon}&appid=${KEY}&units=metric&lang=ru`);
                if(!response.ok) {
                  setError('Ошибка загрузки данных, повторите попытку')
                  throw new Error('Ошибка загрузки данных, повторите попытку')
                }
                const data = await response.json();
                setWeather(data)
             
              } catch (error) {
                setError(error.message);
                console.log(error);
                
              } finally {
                setIsLoading(false);

              }
            }
            fetchWeather();

            
    }, [activeCity])

    return ({
        activeCity,
        weather,
        isLoading,
        error
    })
}