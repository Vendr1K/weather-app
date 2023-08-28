export function windSpeed(speed) {
    if(speed >= 10) {
        return Math.round(speed)
    }
    return speed.toFixed(1) 
}
