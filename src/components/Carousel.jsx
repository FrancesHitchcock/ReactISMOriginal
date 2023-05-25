import React, { useRef, useEffect } from "react"

// Carousel JavaScript adapted from original code by Chirp Internet: chirpinternet.eu

export default function Carousel(){
    const ref=useRef(null)

    useEffect(() => {
        let runCarousel = true
        if(runCarousel){
            const stage = ref.current
            const arr = stage.getElementsByTagName("img")

            function fadeComplete() { 
                stage.appendChild(arr[0]) 
            }

            for(let i=0; i < arr.length; i++) {
                arr[i].addEventListener("animationend", fadeComplete)
            }
        }
        return function(){
            runCarousel = false
        }    
    }, [])

    return(
        <div className="stage" ref={ref} id="stage">
            <img className="carousel-image" src='/images/high-street.jpg' />
            <img className="carousel-image" src='/images/church.jpg' />
            <img className="carousel-image" src='/images/field.jpg' />
            <img className="carousel-image" src='/images/village-hall.jpg' />
            <img className="carousel-image" src='/images/white-house-farm.jpg' />
            <img className="carousel-image" src='/images/flower-field.jpg' />
        </div>
    )
}
