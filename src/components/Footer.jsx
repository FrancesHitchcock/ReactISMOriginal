import React from "react"

export default function Footer(){
    return (
        <footer className="footer">
            <img className="footer-logo" src="../icons/logo.png" alt="ISM village sign logo"/>
            <h4 className="footer-text">&#169; 2023 Ilketshall St Margaret Village<span> | </span></h4>
            <h4 className="footer-text">created by <a href="https://resilient-crostata-abfab8.netlify.app/" target="_blank">Frances</a> | hosted by <a href="https://www.reddune.com/" target="_blank">Red Dune</a></h4>
        </footer>
    )
}