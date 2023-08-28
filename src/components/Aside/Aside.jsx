import { useState } from 'react';
import {activeStyle} from '../../utils/activeStyles';
import { Icon } from '../Icon/Icon';
import { useTheme } from '../../hooks/useTheme';
import { SeacrhBar } from '../SeacrhBar/SeacrhBar';
import { useActiveCity } from '../../hooks/useActiveCity';
import { useWeatherApi } from '../../hooks/useWeatherApi';
import { getTimeApi } from '../../utils/getTimeApi';
import { Pointers } from '../Loader/Pointers/Pointers';
import styles from './aside.module.css';

export function Aside() {
    const [panelIsOpen, setPanelIsOpen] = useState(false);
    const { activeCity } = useActiveCity();
    const theme = useTheme();
    const {weather, isLoading, error} = useWeatherApi();

    const changeTheme = () =>  {
       theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light')
    }

    const handleOpen = () => {
        setPanelIsOpen(true)
    }

    return (
        <section className={styles.hero }>
            <aside className={styles.hero__aside}>
                <div className={styles.hero__background}></div>
                <h1 style={{display:'none'}}>Сайт погоды</h1>
                <div className={styles.hero__btns}>
                    <div className={styles.hero__btn_wrap}>
                        <button className={styles.hero__search_btn} onClick={handleOpen} aria-label="Открыть меню поиска">
                            Поиск города
                        </button>
                    </div>
                    <button className={styles.theme__btn} onClick={() => changeTheme()} >
                        <Icon 
                            name={'themeLight'} 
                            className={`
                                ${styles.theme__slide} 
                                ${activeStyle(theme.theme === 'dark', styles)} 
                                ${styles.theme__slide_dark}
                            `} 
                        />
                        <Icon 
                            name={'themeDark'} 
                            className={`
                                ${styles.theme__slide} 
                                ${activeStyle(theme.theme === 'light', styles)} 
                                ${styles.theme__slide_light}
                            `} 
                        />
                    </button>
                </div>
                <div className={styles.wrapp_data_content}>
                        {error &&  
                        <div className={styles.error}>
                                <span>{error}</span>
                            </div>
                        } 
                    <div className={styles.hero__weather}>
                        <div className={styles.hero__weather__icon}>
                        <div className={`${styles.loader} ${activeStyle(isLoading, styles)}`}>
                        <Pointers />
                        </div>
                            {weather ? <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                            alt='Погода'
                            /> : <img src="/image/snow-main.png" alt="Иконка" />}
                        </div>
                    </div>
                    <div className={`${styles.hero__weather_info} ${styles.hero_weather_info}`}>
                        <div className={`${styles.hero_weather_info__info } ${styles.hero_info}`}>
                            <h2 className={styles.hero_info__wrap}>
                                <div className={`${styles.loader} ${activeStyle(isLoading, styles)}`}/>
                                <span className={styles.hero_info__temp}>{weather ? weather.main.temp.toFixed() : '0'}</span>
                                <span className={styles.hero_info__measurement}>°C</span>
                            </h2>
                            <h2 className={styles.hero_info__precipitation}> 
                                <div className={`${styles.loader} ${activeStyle(isLoading, styles)}`}>
                                    <Pointers />
                                </div> 
                                {weather ?  weather.weather[0].description : '?'} 
                            </h2>
                            <div className={styles.hero_info__fill_like}>
                                <div className={`${styles.loader} ${activeStyle(isLoading, styles)}`}/>
                                <span className={styles.hero_info__descr}> Ощущается как </span>
                                <span className={styles.hero_info__temp_fill_like}>{weather ? weather.main.feels_like.toFixed() : '?'}</span>
                            </div>
                        </div>
                        <div className={`${styles.hero_weather_info__date } ${styles.hero_date}`}>
                            <div className={`${styles.loader} ${activeStyle(isLoading, styles)}`}/>
                            <div className={styles.hero_date__day}>
                                Сегодня
                            </div>

                            <div className={styles.hero_date__date}>
                                {weather ? `${getTimeApi(weather.dt).weekDay}, ${getTimeApi(weather.dt).dayNumber} ${getTimeApi(weather.dt).mounth}` : 'Вс, 13 мар'}
                            </div>
                        </div>

                        <div className={`${styles.hero_weather_info__location } ${styles.hero_location}`}>
                            <button className={`${styles.hero_location__icon} btn-reset`} aria-label="Определить вашу локацию">
                                <Icon name={'location'}/>
                            </button>
                            <h3 className={styles.hero_location__name}>
                            { activeCity.apiName ?? activeCity.city}
                            </h3>
                        </div>
                    </div>
                </div>
                <SeacrhBar panelIsOpen={panelIsOpen} setPanelIsOpen={setPanelIsOpen}/>
            </aside>
        </section>
    )
}
