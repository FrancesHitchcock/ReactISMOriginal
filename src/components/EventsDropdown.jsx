import React from "react"
import {Link} from "react-router-dom"

import { firstMonth } from "../data/firstMonthData"
import { secondMonth } from "../data/secondMonthData"

export default function EventsDropdown(){
    return(
        <>
            <Link to={`/events-${firstMonth.month.toLowerCase()}`}><div className="inner-nav-title">{firstMonth.month}</div></Link>
            <Link to={`/events-${secondMonth.month.toLowerCase()}`}><div className="inner-nav-title">{secondMonth.month}</div></Link>
            <Link to="/events-look-ahead"><div className="inner-nav-title last">Look-ahead</div></Link>
        </>
    )
}