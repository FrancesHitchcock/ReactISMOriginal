import React from "react"

import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"

import useScreenSizer from "../hooks/useScreenSizer"

export default function Header(){
    const {mobileScreen} = useScreenSizer()

    return(
        <header className="header">
            <div className="hero">
                <div className="title-container">
                    <span className="title-span">The village of</span>
                    <img className="header-logo header-logo-wide" src="/icons/logo.png" alt="ISM village sign logo" />
                    <h1>Ilketshall St Margaret</h1>
                    <img className="header-logo header-logo-mobile" src="/icons/logo.png" alt="ISM village sign logo" />
                </div>
            </div>
            {mobileScreen ? <MobileNav /> : <DesktopNav />}
        </header>
    )
}   