import React from 'react';
import { StatisticSeason } from '../StatisticSeason/StatisticSeason';
import { StatisticDetails } from '../StatisticDetails/StatisticDetails';
import styles from './statistic.module.css';

export function Statistic() {
  return (
    <div className={styles.statistic}>
        <StatisticSeason/>
        <StatisticDetails/>
    </div>
  )
}
