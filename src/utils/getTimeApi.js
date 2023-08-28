export function getTimeApi(UTCtime) {

    const days = [
      'Вс',
      'Пн',
      'Вт',
      'Ср',
      'Чт',
      'Пт',
      'Сб'
    ];

    const mounthName = [
      'Ян',
      'Фв',
      'Мр',
      'Ап',
      'Май',
      'Ин',
      'Ил',
      'Авг',
      'Сн',
      'Ок',
      'Нб',
      'Дек',
    ];

    const date = new Date(UTCtime * 1000);  
    const dayNumber = date.getDate();
    const weekDay = days[date.getDay()] 
    const mounth = mounthName[date.getMonth()];
    const hours =  date.getHours() >= 10 ? date.getHours() : `0` + date.getHours();
    const minutes =  date.getMinutes() >= 10 ? date.getMinutes() : `0` + date.getMinutes();
    
    return {
      hours,
      minutes,
      dayNumber,
      mounth,
      weekDay
    }
  }