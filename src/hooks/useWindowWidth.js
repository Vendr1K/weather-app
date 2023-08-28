import { useEffect, useState } from "react"

const getWindowWidth = () => {
    const {innerWidth: windowWidth} = typeof window !== 'undefined' ? window : {innerWidth: 0}

    return {windowWidth}
}

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    const handleResize = () => setWindowWidth(getWindowWidth());

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])
    
    return{windowWidth, handleResize};
}