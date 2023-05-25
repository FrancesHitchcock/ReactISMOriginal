import React from "react"

export default function PagePhoto(props){
    // const styles = {
    //     backgroundImage: `url(${props.imageUrl})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center"
    // }

    // return(
    //     <div className="page-photo-container" style={styles}>
    //         {props.children}
    //     </div>
    // )

    return(
        <div className="page-photo-container">
            <img className="page-photo" src={props.imageUrl} alt={props.altText}></img>
            {props.children}
        </div>
    )
}