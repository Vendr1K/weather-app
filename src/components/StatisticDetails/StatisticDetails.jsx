import React from 'react';
import { Icon } from '../Icon/Icon';
import { useWeatherApi } from '../../hooks/useWeatherApi';
import { Pointers } from '../Loader/Pointers/Pointers';
import { activeStyle } from '../../utils/activeStyles';
import { pressureNow } from '../../utils/pressure';
import { windSpeed } from '../../utils/windSpeed';
import { windDirection } from '../../utils/windDirection';
import styles from './statisticDetails.module.css';

export  function StatisticDetails() {
    const { weather, isLoading, error} = useWeatherApi();

    return (
        <section className={`${styles.detail} ${styles.statistic__detail }`}>
            <h2 className={styles.detail__title}>Подробно на сегодня</h2>
            <ul className={styles.list_detail}>
                {error &&  
                <div className={styles.error}>
                    <span>{error}</span>
                </div>
                }
                <li className={styles.item_detail}>
                    <div className={`${styles.loader} ${activeStyle(isLoading, styles)}`}>
                        <Pointers />
                    </div>
                    <h3 className={styles.item_detail__title}>Скорость ветра</h3>
                    <div className={styles.info_detail}>
                        <span className={styles.info_detail__value}>
                            {weather ? windSpeed(weather.wind.speed ) : ''}
                        </span>
                        <span className={`${styles.info_detail__dimension} ${styles.info_detail__dimension_speed}`}>м/с</span>
                    </div>
                    <div className={styles.item_detail__direction}>
                        <Icon name={'windDiretion'} className={styles.wind_direction_icon} style={{transform: `rotate(${weather ? windDirection(weather.wind.deg).rotation + 45 : 0}deg)`}}/>
                        <span className={styles.item_detail__direction__dimension}>
                            {weather ? windDirection(weather.wind.deg).direction : 'СЗ'}
                        </span>
                    </div>
                    
                </li>
                <li className={styles.item_detail} >
                    <h3 className={styles.item_detail__title}>Влажность</h3>
                    <div className={`${styles.info_detail} ${styles.info_detail_humidity}`}>
                        <span className={styles.info_detail__value}> {weather ? weather.main.humidity : 84} </span>
                        <span className={styles.info_detail__dimension}>%</span>
                    </div>
                    <div className={styles.progress_bar_wrap}>
                        <span className={styles.progress_bar}>
                            <span className={`${styles.bar_metric} ${styles.bar_metric__start}`}>0</span>
                            <span className={`${styles.bar_metric} ${styles.bar_metric__middle}`}>50</span>
                            <span className={`${styles.bar_metric} ${styles.bar_metric__end}`}>100</span>
                            <span className={`${styles.bar_metric} ${styles.bar_metric__proccent}`}>%</span>
                            <span className={styles.progress} style={{width: `${weather ? weather.main.humidity : 84}%`}}></span>
                        </span>
                    </div>
                    <div className={`${styles.loader} ${activeStyle(isLoading, styles)}`}>
                        <Pointers />
                    </div>
                </li>
                <li className={styles.item_detail} >
                    <h3 className={`${styles.item_detail__title} ${styles.item_detail__title_visible}`}>Видимость</h3>
                    <div className={`${styles.info_detail} ${styles.info_detail_visible}`}>
                        <span className={styles.info_detail__value}>{weather ? weather.visibility/1000 : 6.2}</span>
                        <span className={`${styles.info_detail__dimension} ${styles.info_detail__dimension__visible}`}>км</span>
                    </div>
                    <div className={`${styles.loader} ${activeStyle(isLoading, styles)}`}>
                        <Pointers />
                    </div>
                </li>
                <li className={styles.item_detail} >
                    <h3 className={`${styles.item_detail__title} ${styles.item_detail__title_pressure}`}>Давление</h3>
                    <div className={`${styles.info_detail} ${styles.info_detail_pressure}`}>
                        <span className={styles.info_detail__value}>
                            {weather ? pressureNow(weather.main.pressure).pressure__rt : 742}
                        </span>
                        <span className={`${styles.info_detail__dimension} ${styles.info_detail__dimension_pressure}`}>мм рт. ст.</span>
                    </div>
                    <div className={`${styles.loader} ${activeStyle(isLoading, styles)}`}>
                        <Pointers />
                    </div>
                </li>
            </ul>
        </section>
    )
}
