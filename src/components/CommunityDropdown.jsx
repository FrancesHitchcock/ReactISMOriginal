import React from "react"
import {Link} from "react-router-dom"

import useScreenSizer from "../hooks/useScreenSizer"

export default function CommunityDropdown(){
    const {mobileScreen} = useScreenSizer()

    return(
        <>
            <Link to="/village-hall">
                <div className="inner-nav-title">{mobileScreen ? "Village Hall" : "Hire Village Hall"}</div>
            </Link>
            <Link to="/parish-meeting">
                <div className="inner-nav-title">Parish Meeting</div>
            </Link>
            <Link to="/newsletter">
                <div className="inner-nav-title">{mobileScreen ? "Newsletter" : "Village Newsletter"}</div>
            </Link>
            <Link to="/church">
                <div className="inner-nav-title last">{mobileScreen ? "Church" : "St Margaret's Church"}</div>
            </Link>
        </>
    )
}