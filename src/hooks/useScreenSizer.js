import {useState, useEffect} from "react"

function useScreenSizer(){
    const [mobileScreen, setMobileScreen] = useState(window.innerWidth < 480) 

    useEffect(() => {
        window.addEventListener("resize", setScreenSize)

        function setScreenSize(){
            setMobileScreen(window.innerWidth < 480)
        }

        return function(){
            window.removeEventListener("resize", setScreenSize)
        }
    }, [])

    return {mobileScreen}
}

export default useScreenSizer