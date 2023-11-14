import { useEffect, useState } from "react";
import { daysApiFilter } from "../utils/daysApiFilter";
import { getTimeApi } from "../utils/getTimeApi";
import { useActiveCity } from "./useActiveCity";

const KEY = process.env.REACT_APP_WEATHER_API_KEY

export function useWeatherApiHours() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { activeCity } = useActiveCity();

  const [weekWeatherDays, setWeekWeatherDays] = useState([]);
  const [hoursWeather, setHoursWeather] = useState([])


  useEffect(() => {
    if (!activeCity.city) return
    setError('')
    const fetchWeather = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${activeCity.lat}&lon=${activeCity.lon}&appid=${KEY}&units=metric&lang=ru`);
        if (!response.ok) {
          setError('Ошибка загрузки данных, повторите попытку')
          throw new Error('Ошибка загрузки данных, повторите попытку')
        }
        const data = await response.json();
        setWeather(data);
        setWeekWeatherDays(
          daysApiFilter(data).map(item => {
            const filterToDay = item[((item.length - 1) / 2).toFixed()]
            return {
              day: `${getTimeApi(filterToDay.dt).weekDay}, ${getTimeApi(filterToDay.dt).dayNumber} ${getTimeApi(filterToDay.dt).mounth}`,
              img: filterToDay.weather[0].icon,
              tempMax: filterToDay.main.temp_max.toFixed(),
              tempMin: filterToDay.main.temp_min.toFixed(),
              id: filterToDay.dt,
            }
          })
        );
        setHoursWeather(
          data.list.slice(0, 8).map(item => {
            return {
              day: `${getTimeApi(item.dt).weekDay} ${getTimeApi(item.dt).hours}:${getTimeApi(item.dt).minutes}`,
              img: item.weather[0].icon,
              temp: item.main.temp.toFixed(),
              id: item.dt,
            }
          })
        );

      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);

      }
    }
    fetchWeather();


  }, [activeCity])

  return ({
    activeCity,
    weekWeatherDays,
    hoursWeather,
    weather,
    isLoading,
    error
  })
}