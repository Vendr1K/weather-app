import React from 'react';
import { useState, useRef } from 'react';
import { fakeApiWeek, fakeApiHours } from './fakeApi.js';
import { TabListItem } from './TabList/TabListItem.jsx';
import { Icon } from '../Icon/Icon.jsx';
import { useWeatherApiHours } from '../../hooks/useWeatherApiHours.js';
import { useEffect } from 'react';
import {useMediaQuery} from '../../hooks/useMediaQuery'
import styles from './statisticSeason.module.css';

export function StatisticSeason() {
    const {isLoading, error, weekWeatherDays, hoursWeather} = useWeatherApiHours();
    const refTab1 = useRef();
    const refTab2 = useRef();
    const media1440 = useMediaQuery(1440);
    const media1200 = useMediaQuery(1200);
    const media1100 = useMediaQuery(1100);
    const [tab, setTab] = useState(1);
    const [currentStep1, setCurrentStep1] = useState(0);
    const [currentStep2, setCurrentStep2] = useState(0);
    const [visbleCardSlide, setVisbleCardSlide] = useState(0);

    useEffect(() => {
       if(tab === 1) {
        const sliderScrollWidth = refTab1.current.scrollWidth;
        const slidesScrollWidth = sliderScrollWidth / refTab1.current.childNodes.length; //124
        const leftScrollStep = (sliderScrollWidth - refTab1.current.clientWidth) / slidesScrollWidth;
    
        if (leftScrollStep !== visbleCardSlide) setVisbleCardSlide(leftScrollStep);
        if (currentStep1 >= leftScrollStep) setCurrentStep1(leftScrollStep - 1);
        refTab1.current.scrollTo({
            left: slidesScrollWidth * currentStep1,
            behavior: 'smooth',
          });
       }

       if(tab === 2) {
        const sliderScrollWidth = refTab2.current.scrollWidth;
        const slidesScrollWidth = sliderScrollWidth / refTab2.current.childNodes.length; //124
        const leftScrollStep = (sliderScrollWidth - refTab2.current.clientWidth) / slidesScrollWidth;
        if (leftScrollStep !== visbleCardSlide) setVisbleCardSlide(leftScrollStep);
        if (currentStep2 >= leftScrollStep) setCurrentStep2(leftScrollStep - 1);
        refTab2.current.scrollTo({
            left: slidesScrollWidth * currentStep2,
            behavior: 'smooth',
          });
       }
    },[refTab2, currentStep1, currentStep2, visbleCardSlide, refTab1, tab, media1440, media1100 ,media1200])

    const slideLeft = () => {
        if ( tab === 1 ) {
            if (currentStep1 > 0) {
                setCurrentStep1(currentStep1 - 1);
              }
        }

        if (tab === 2) {
            if (currentStep2 > 0) {
                setCurrentStep2(currentStep2 - 1);
              }
        }
    }

    const slideRight = () => {
        if ( tab === 1 ) {
            if (currentStep1 < visbleCardSlide - 1) {
                setCurrentStep1(currentStep1 + 1);
              }
        }

        if (tab === 2) {
            if (currentStep2 < visbleCardSlide - 1) {
                setCurrentStep2(currentStep2 + 1);
              }
        }
    }

    const disableSlideButtonLeft = (tab, currentStep1, currentStep2) => {
        if( tab === 1) {
            return currentStep1 === 0
          }
        if( tab === 2) {
            return currentStep2 === 0
        }
     
    }

    const disableSlideButtonRight = (tab, currentStep1, currentStep2, visbleCardSlide) => {
        if( tab === 1) {
            return   currentStep1 + 1 > visbleCardSlide
        }
        if( tab === 2) {
          return  currentStep2 + 1 > visbleCardSlide
        }

      
    }


    return (
        <section className={styles.season}>
            <div className={styles.season_head}>
                <h2 className={styles.season_head__title}>Прогноз </h2>
                <div className={styles.tab_head}>
                    <div className={styles.season_head__tabs_title}>
                        <h3 
                            className={`${styles.season_head__tab_title} ${tab === 1 ? styles.active : ''}`} 
                            tabIndex="0" 
                            aria-label="Недельный прогноз"
                            onClick={() => setTab(1)}
                        >
                            на неделю
                        </h3>
                        <h3 
                            className={`${styles.season_head__tab_title} ${tab === 2 ? styles.active : ''}`} 
                            tabIndex="0" 
                            aria-label="Суточный почасовой прогноз"
                            onClick={() => setTab(2)}
                        >
                            почасовой
                        </h3>
                    </div>
                </div>
            </div>
            <div className={`${styles.season__wrapper} ${styles.slider}`}>
            {error &&  
                <div className={styles.error}>
                    <span>{error}</span>
                </div>
            }
                <ul
                    ref={refTab1}
                    className={`
                        ${styles.tab__slide} 
                        ${styles.season__list} 
                        ${styles.season__list_week} 
                        ${tab === 1 ? styles.active : ''}
                    `}
                >
                     {weekWeatherDays.length ? weekWeatherDays.map(item => (
                        <TabListItem  item={item} isLoading={isLoading} key={item.id}/>
                    )):
                    fakeApiHours.map(item => (
                        <TabListItem  item={item} isLoading={isLoading} key={item.id}/>
                    ))
                    }
                </ul>
                <ul id="weather-hours" 
                    ref={refTab2}
                    className={`
                        ${styles.tab__slide} 
                        ${styles.season__list} 
                        ${styles.season__list_hours}
                        ${tab === 2 ? styles.active : ''}
                    `}>
                    {hoursWeather.length ? hoursWeather.map(item => (
                        <TabListItem  item={item} isLoading={isLoading} key={item.id}/>
                    )):
                    fakeApiWeek.map(item => (
                        <TabListItem  item={item} isLoading={isLoading} key={item.id}/>
                    ))
                    }
                </ul>
                <button 
                    onClick={() => {slideLeft()}}
                    className={`btn-reset ${styles.slide__btn} ${styles.slide__btn_left}`} 
                    aria-label="листать влево"
                    disabled={ disableSlideButtonLeft(tab, currentStep1, currentStep2)}
                >
                    <Icon name={'leftButton'}/>
                </button>
                <button 
                    onClick={() => {
                      slideRight()
                    }}  
                    className={`btn-reset ${styles.slide__btn} 
                    ${styles.slide__btn_right}`} 
                    aria-label="листать вправо"
                    disabled={ 
                        disableSlideButtonRight(tab, currentStep1, currentStep2, visbleCardSlide    )
                    }
                >
                     <Icon name={'rightButton'}/>
                </button>  
            </div>
        </section>
    )
}