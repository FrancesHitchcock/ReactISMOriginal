import React from "react"
import {Link} from "react-router-dom"

import EventsDropdown from "./EventsDropdown"
import CommunityDropdown from "./CommunityDropdown"

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
                        <div className={`outer-nav-title ${!eventsDropdownHidden ? "accent" : "null"}`} onMouseEnter={showEventsDropdown} onMouseLeave={hideEventsDropdown}>Events &#x25BC;
                            <div className={`events-dropdown dropdown ${eventsDropdownHidden ? "dropdown-hidden" : "dropdown-visible"}`} onClick={hideEventsDropdown}>
                                <EventsDropdown />
                            </div>
                        </div>
                    </span>
                </div>

                <div className="community-dropdown-container" >
                    <span className='community-dropdown-title dropdown-title'>
                        <div className={`outer-nav-title ${!communityDropdownHidden ? "accent" : "null"}`} onMouseEnter={showCommunityDropdown} onMouseLeave={hideCommunityDropdown}>Community &#x25BC;
                            <div className={`community-dropdown dropdown ${communityDropdownHidden ? "dropdown-hidden" : "dropdown-visible"}`} onClick={hideCommunityDropdown}>
                                <CommunityDropdown />
                            </div>
                        </div>
                    </span>
                </div>

                <Link to="/village-show"><div className="outer-nav-title last">Village Show</div></Link>
            </div>
        </nav>
    )
}