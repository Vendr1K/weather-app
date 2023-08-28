import React from 'react'
import { LeftButton } from "./Icons/LeftButton";
import { RightButton } from "./Icons/RightButton";
import { WindDiretion } from './Icons/WindDirection';
import { Location } from './Icons/Location';
import { Seacrh } from './Icons/Seacrh';
import { ThemeLight } from './Icons/ThemeLight';
import { ThemeDark } from './Icons/ThemeDark';
import { CloseSeacrh } from './Icons/CloseSeacrh';
import { ArrowRight } from './Icons/ArrowRight'

export function Icon({className, style, width, height, name }) {
    switch (name) {
        case 'leftButton':
            return <LeftButton className={className} style={style} width={width} height={height}/>
        case 'rightButton':
            return <RightButton className={className} style={style} width={width} height={height}/>
        case 'windDiretion':
            return <WindDiretion className={className} style={style} width={width} height={height}/>
        case 'location':
            return <Location className={className} style={style} width={width} height={height}/>
        case 'seacrh':
            return <Seacrh className={className} style={style} width={width} height={height}/>
        case 'close':   
            return <CloseSeacrh className={className} style={style} width={width} height={height}/>
        case 'themeLight':   
            return <ThemeLight className={className} style={style} width={width} height={height}/>
        case 'themeDark':   
            return <ThemeDark className={className} style={style} width={width} height={height}/>
        case 'arrowRight':   
            return <ArrowRight className={className} style={style} width={width} height={height}/>
            default : <></>
    }
}
