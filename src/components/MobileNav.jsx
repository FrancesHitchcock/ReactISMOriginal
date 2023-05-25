import React from "react"
import {Link} from "react-router-dom"

import EventsDropdown from "./EventsDropdown"
import CommunityDropdown from "./CommunityDropdown"

import useNavigation from "../hooks/useNavigation"

export default function MobileNav(props){
    const {
        eventsDropdownHidden, 
        communityDropdownHidden,
        outerNavHidden,
        eventsDropdown,
        communityDropdown,
        eventsTitle,
        communityTitle,
        outerNavRef, 
        menuButton,
        hideEventsDropdown, 
        hideCommunityDropdown,
        toggleEventsDropdown,
        toggleCommunityDropdown,
        toggleOuterNav,
    } = useNavigation()

    // const menuIcon = outerNavHidden ? "../icons/hamburger.png" : "../icons/cancel.png"

    return(
        <nav className={`outer-nav-container`}>
            <div className={`menu-icon ${outerNavHidden ? "null" : "open"}`} ref={menuButton} onClick={toggleOuterNav}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`outer-nav ${outerNavHidden ? "outer-nav-hidden" : "outer-nav-visible"}`} ref={outerNavRef}>
                <Link to="/"><div className="outer-nav-title">Home</div></Link>

                <div className="events-dropdown-container">
                    <span className='events-dropdown-title dropdown-title'>
                        <div className={`outer-nav-title ${!eventsDropdownHidden ? "accent" : "null"}`} onClick={toggleEventsDropdown} ref={eventsTitle}>
                        &#x25C0; Events
                        </div>
                    </span>
                </div>

                <div className="community-dropdown-container" >
                    <span className='community-dropdown-title dropdown-title'>
                        <div className={`outer-nav-title ${!communityDropdownHidden ? "accent" : "null"}`} onClick={toggleCommunityDropdown} ref={communityTitle}>
                        &#x25C0; Community
                        </div>
                    </span>
                </div>

                <Link to="/village-show"><div className="outer-nav-title last">Village Show</div></Link>
            </div>

            <div className={`events-dropdown dropdown ${eventsDropdownHidden ? "dropdown-hidden" : "dropdown-visible"}`} onClick={hideEventsDropdown} ref={eventsDropdown}>
                <EventsDropdown />
            </div>

            <div className={`community-dropdown dropdown ${communityDropdownHidden ? "dropdown-hidden" : "dropdown-visible"}`} onClick={hideCommunityDropdown} ref={communityDropdown}>
                <CommunityDropdown />
            </div>
        </nav>
    )
}