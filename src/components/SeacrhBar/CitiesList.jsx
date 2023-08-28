import React from 'react';
import { activeStyle } from '../../utils/activeStyles';
import { Icon } from '../Icon/Icon';
import styles from './SeacrhBar.module.css';

export function CitiesList({cities, activeCity, setError, handleClose}) {
    return (
        <ul className={styles.list_city_pool}>
            {cities.map((city) => (
                <li key={city.id} 
                    className={`${styles.item_city_pool} ${activeStyle(city.id === activeCity.activeCity.id ,styles)}`} 
                    tabIndex={0}
                    onClick={() => {
                    activeCity.changeActiveCity(city);
                    handleClose();
                    setError('')
                }}>
                    {city.apiName ?? city.city}
                    <Icon name={'arrowRight'} className={`${styles.item_city_pool__icon} ${activeStyle(city.id === activeCity.activeCity.id ,styles)}`}/>
                </li>
            ))}
        </ul>
    )
}
