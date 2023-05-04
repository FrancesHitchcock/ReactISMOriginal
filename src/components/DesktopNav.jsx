import React from "react"
import {Link} from "react-router-dom"

import useNavigation from "../hooks/useNavigation"

export default function DesktopNav(){
    const {
        eventsDropdownHidden, 
        communityDropdownHidden, 
        showEventsDropdown, 
        hideEventsDropdown, 
        showCommunityDropdown, 
        hideCommunityDropdown
    } = useNavigation()

    return(
        <nav className="outer-nav-container">
            <div className='outer-nav'>
                <Link to="/"><div className="outer-nav-title">Home</div></Link>

                <div className="events-dropdown-container">
                    <span className='events-dropdown-title dropdown-title'>
                        <div className={`outer-nav-title ${!eventsDropdownHidden ? "accent" : "null"}`} onMouseEnter={showEventsDropdown} onMouseLeave={hideEventsDropdown}>Events
                            <div className={`events-dropdown dropdown ${eventsDropdownHidden ? "dropdown-hidden" : "dropdown-visible"}`} onClick={hideEventsDropdown}>
                                <Link to="/events-events1"><div className="inner-nav-title">Events1</div></Link>
                                <Link to="/events-events2"><div className="inner-nav-title">Events2</div></Link>
                                <Link to="/events-events3"><div className="inner-nav-title last">Events3</div></Link>
                            </div>
                        </div>
                    </span>
                </div>

                <div className="community-dropdown-container" >
                    <span className='community-dropdown-title dropdown-title'>
                        <div className={`outer-nav-title ${!communityDropdownHidden ? "accent" : "null"}`} onMouseEnter={showCommunityDropdown} onMouseLeave={hideCommunityDropdown}>Community
                            <div className={`community-dropdown dropdown ${communityDropdownHidden ? "dropdown-hidden" : "dropdown-visible"}`} onClick={hideCommunityDropdown}>
                                <Link to="/village-hall"><div className="inner-nav-title">Hire Village Hall</div></Link>
                                <Link to="/parish-meeting"><div className="inner-nav-title">Parish Meeting</div></Link>
                                <Link to="/newsletter"><div className="inner-nav-title">Village Newsletter</div></Link>
                                <Link to="/church"><div className="inner-nav-title last">St Margaret's Church</div></Link>
                            </div>
                        </div>
                    </span>
                </div>

                <Link to="/village-show"><div className="outer-nav-title last">Village Show</div></Link>
            </div>
        </nav>
    )
}