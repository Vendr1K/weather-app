import React, { useEffect, useState } from 'react';
import { CitiesList } from './CitiesList';
import { Icon } from '../Icon/Icon';
import { activeStyle } from '../../utils/activeStyles';
import { useCities } from '../../hooks/useCities';
import { useActiveCity } from '../../hooks/useActiveCity';
import { validateInputValue } from '../../utils/validateInputValue';
import { replaceSpacesAndDashes } from '../../utils/replaceSpacesAndDashes';
import { Spiner } from '../Loader/Spiner/Spiner';
import styles from './SeacrhBar.module.css';

export function SeacrhBar({panelIsOpen, setPanelIsOpen}) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const {cities, changeCitiesPool} = useCities();
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const activeCity = useActiveCity();

    const handleClose = () => {
        setPanelIsOpen(false);
    }    
    const inputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleClear = () => {
        setInputValue('')
    }
    

    const handleSubmit = async(e, inputValue) => {
        e.preventDefault();
        if (validateInputValue(inputValue)) {
            return setError('Введите: Аа-Яя, -, 0-9');
        }
        setError('');
        const filterInputValue = replaceSpacesAndDashes(inputValue);
        const hashCity = cities.find(city => {
            return ( city.city === filterInputValue || city.apiName === filterInputValue)}) ?? false
        if(hashCity) {
            activeCity.changeActiveCity(hashCity);
            handleClose();
            setInputValue('');
            return
        }
        try {
                setBtnDisabled(true)
                setIsLoading(true)
                const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${filterInputValue}&format=json&addressdetails=1&limit=1`);
                if(!response.ok) {
                    setError('Server Error')
                    throw new Error('Server Error')
                }

                const data = await response.json();
                if(!data.length) {
                    return setError('Упс! Город не найден, попробуйте другой');
                }
                console.log(data, 'data')
                const city = filterInputValue;
                const lon = data[0].lon;
                const lat = data[0].lat;
                const id = new Date().toISOString();
                const apiName = data[0].name
            

                changeCitiesPool({city, lat, lon, id, apiName});
                handleClose();
                setInputValue('');
            return activeCity.changeActiveCity({city, lat, lon, id, apiName})
        } catch(error) {
            setError(error.message)
        } finally {
            setBtnDisabled(false)
            setIsLoading(false)
        }
    }
 
    useEffect(() => {   
        if( cities.length ) {
            activeCity.changeActiveCity(cities[0]);
        } else {
            const city =  "Москва";
            const lon = "37.6174943";
            const lat = "55.7504461";
            const id = new Date().toISOString();
            activeCity.changeActiveCity({city, lat, lon, id})
        }   
    }, [])

    return (
        <div className={`${styles.search_menu__wrapper} ${activeStyle(panelIsOpen, styles)} ${styles.search_menu}`}>
            <div className={styles.search_menu__container}>
                <div className={`${styles.search_menu__close_wrapper} ${styles.search_close}`}>
                    <button id="seacrh-close" className={`${styles.search_close__btn} btn-reset`} onClick={handleClose} aria-label="закрыть меню">
                        <Icon name={'close'}/>
                    </button>
                </div>
                
                <form id="search-form" onSubmit={(e) => handleSubmit(e, inputValue)} className={styles.search_form}>
                    {error && <span className={styles.search__error}> {error} </span>}
                    <div className={styles.search_input}>
                    {isLoading && <span className={styles.spinner}>
                            <Spiner/>
                            </span>}
                    <input className={styles.search_input__input} value={inputValue} onChange={inputChange} type="search" name="search_string" id="search_string" aria-label="Ввод города для поиска"/>
                        <label 
                            className={`${styles.search_input__label} 
                            ${styles.search_input__label_search}`} 
                            htmlFor="search_string"  
                            aria-label="Поиск"
                            >
                            <Icon name={'seacrh'}/>
                        </label>

                        <label 
                            className={`${styles.search_input__label} ${styles.search_input__label_delete}`} 
                            onClick={handleClear}
                            htmlFor="search_string"  
                            aria-label="Стереть вводтимые данные"
                            >
                           {inputValue && !isLoading &&  <Icon name={'close'} className={styles.search_input__label_delete_icon}/>} 
                        </label>
                    </div>
                    <button
                        className={`${styles.search_form__btn_seacrh} btn btn-reset`} 
                        aria-label="Отправить запрос на поиск"
                        disabled={btnDisabled}
                    >
                        Найти
                    </button>
                </form>
                <CitiesList cities={cities} activeCity={activeCity} setError={setError} handleClose={handleClose}/>
            </div>
        </div> 
    )
}
