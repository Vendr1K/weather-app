## Для запуска приложения из корня проекта установите зависимости с помощью 

### npm i 
    или
### yarn

## Для запуска придложения используйте

### npm start 
    или 
### yarn start

## Для сборки 

### npm build 
    или 
### yarn build

Пиложения погоды с возможностью поиска и отображения информации по нужному городу.

## В приложении реализовано
- Приложение написано на ReactJs без использование библиотек и ts (основное требование)
- Семантическая кроссбраузерная адаптинвания верстка 
- Простые анимации (транзишины) для интеркативности/загрузки данных
- Возможность сохранения запросов по городам (до 5 запросов)
- Возможность смены темы приложения 
- Синхронизация с ls
- Работа с 2мя API  ``https://nominatim.openstreetmap.org`` для поиска местолокации и определения координат, ``https://api.openweathermap.org`` для вывода данных о погодных условиях 
- Для вывода понедельного блока использую Возможность API брать погоду на 5 дней с интервалом 3 часа, далее обрабатываю и вывржу каждый доступный   день. Да это не неделя, но это все, что с мог выжить из API, другие тарифы платные.
- Для вывода почасового прогноза беру все тот же запрос на 5 дней, обрабатываю его и вывожу 8 слайдов с интервалом в 3 часа (как раз прогноз на 24 чакса получается), опять же за неимением лучшего.
- При вводе города или выбора города из списка идут 2 независымых друг от друга запроса, на блок подброно и на блок с табами.



