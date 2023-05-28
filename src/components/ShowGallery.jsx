import React from "react"
import showGalleryData from "../data/showGalleryData"

export default function ShowGallery(){

    const galleryImages = showGalleryData.map(({id, imgUrls}) => {
        function getFrame(){
            if(imgUrls.length === 1){
                return (
                    <img className="show-image" src={`/showGalleryImages/2022-${imgUrls[0].url}.jpg`} alt={imgUrls[0].altText}/>
                )
            }
            else {
                return (
                    <>
                        <img className="show-image" src={`/showGalleryImages/2022-${imgUrls[0].url}.jpg`} alt={imgUrls[0].altText}/>
                        <img className="show-image" src={`/showGalleryImages/2022-${imgUrls[1].url}.jpg`} alt={imgUrls[1].altText}/>
                    </>
                )
            }
            
        }
        return (
            <div className="show-image-container" key={id}>
                {getFrame()}
            </div>
        )}
    )

    return(
        <div className="show-gallery">
            {galleryImages}
        </div>
    )
}