import React from 'react'
import { Pointers } from '../../Loader/Pointers/Pointers'
import { activeStyle } from '../../../utils/activeStyles'
import styles from './tabList.module.css'

export function TabListItem({ item, isLoading }) {
  return (
    <li className={`${styles.season__item} ${styles.season_item}`} >
      <span className={styles.season_item__day}>{item.day}</span>
      <img
        src={item.img ? `https://openweathermap.org/img/wn/${item.img}@2x.png` : '/image/day-rain.png'}
        alt='иконка погоды'
      />
      {item.temp ?
        <div className={`${styles.season_item__temp_temp} ${styles.item_temp}`}>
          <span className={styles.item_temp__now}>{`${item.temp} °C`}</span>
          <div className={`${styles.loader} ${activeStyle(isLoading, styles)}`}>
            <Pointers />
          </div>
        </div>
        :
        <div className={`${styles.season_item__temp} ${styles.item_temp}`}>
          <span className={styles.item_temp__now}>{`${item.tempMax}°C`}</span>
          <span className={styles.item_temp__feels_like}>{`${item.tempMin}°C`}</span>
          <div className={`${styles.loader} ${activeStyle(isLoading, styles)}`}>
            <Pointers />
          </div>
        </div>
      }
    </li>
  )
}
