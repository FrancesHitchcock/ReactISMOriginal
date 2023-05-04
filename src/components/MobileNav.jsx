import React from "react"
import {Link} from "react-router-dom"

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
        closeOuterNav
    } = useNavigation()

    return(
        <nav className={`outer-nav-container`}>
            <div className="menu-icon" onClick={toggleOuterNav} ref={menuButton}>{outerNavHidden ? "=" : "X"}</div>
            <div className={`outer-nav ${outerNavHidden ? "outer-nav-hidden" : "outer-nav-visible"}`} ref={outerNavRef}>
                <Link to="/"><div className="outer-nav-title" onClick={closeOuterNav}>Home</div></Link>

                <div className="events-dropdown-container">
                    <span className='events-dropdown-title dropdown-title'>
                        <div className={`outer-nav-title ${!eventsDropdownHidden ? "accent" : "null"}`} onClick={toggleEventsDropdown} ref={eventsTitle}>
                            Events
                        </div>
                    </span>
                </div>

                <div className="community-dropdown-container" >
                    <span className='community-dropdown-title dropdown-title'>
                        <div className={`outer-nav-title ${!communityDropdownHidden ? "accent" : "null"}`} onClick={toggleCommunityDropdown} ref={communityTitle}>
                            Community
                        </div>
                    </span>
                </div>

                <Link to="/village-show"><div className="outer-nav-title last" onClick={closeOuterNav}>Village Show</div></Link>
            </div>

            <div className={`events-dropdown dropdown ${eventsDropdownHidden ? "dropdown-hidden" : "dropdown-visible"}`} onClick={hideEventsDropdown} ref={eventsDropdown}>
                <Link to="/events-events1"><div className="inner-nav-title" onClick={closeOuterNav}>Events1</div></Link>
                <Link to="/events-events2"><div className="inner-nav-title" onClick={closeOuterNav}>Events2</div></Link>
                <Link to="/events-events3"><div className="inner-nav-title last" onClick={closeOuterNav}>Events3</div></Link>
            </div>

            <div className={`community-dropdown dropdown ${communityDropdownHidden ? "dropdown-hidden" : "dropdown-visible"}`} onClick={hideCommunityDropdown} ref={communityDropdown}>
                <Link to="/village-hall"><div className="inner-nav-title" onClick={closeOuterNav}>Hire Village Hall</div></Link>
                <Link to="/parish-meeting"><div className="inner-nav-title" onClick={closeOuterNav}>Parish Meeting</div></Link>
                <Link to="/newsletter"><div className="inner-nav-title" onClick={closeOuterNav}>Village Newsletter</div></Link>
                <Link to="/church"><div className="inner-nav-title last" onClick={closeOuterNav}>St Margaret's Church</div></Link>
            </div>
        </nav>
    )
}