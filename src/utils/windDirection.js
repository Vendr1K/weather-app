export const windDirection = (deg) => {
    const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
    const degreesPerDirection = 360 / directions.length;
    const direction = Math.floor((deg + degreesPerDirection / 2) / degreesPerDirection) % directions.length;
    const rotation = direction * 45;

    return {
        direction: directions[direction],
        rotation: rotation,
    };
};


