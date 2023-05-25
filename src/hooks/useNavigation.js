import {useState, useEffect, useRef} from "react"

import useScreenSizer from "./useScreenSizer"

function useNavigation(){
    const {mobileScreen} = useScreenSizer()

    const [eventsDropdownHidden, setEventsDropdownHidden] = useState(true)
    const [communityDropdownHidden, setCommunityDropdownHidden] = useState(true)
    const [outerNavHidden, setOuterNavHidden] = useState(true)

    const eventsDropdown = useRef(null)
    const communityDropdown = useRef(null)
    const eventsTitle = useRef(null)
    const communityTitle = useRef(null)
    const outerNavRef = useRef(null) 
    const menuButton = useRef(null)

    function showEventsDropdown(){
        setEventsDropdownHidden(false)
    }

    function hideEventsDropdown(){
        setEventsDropdownHidden(true)
    }
    function showCommunityDropdown(){
        setCommunityDropdownHidden(false)
    }

    function hideCommunityDropdown(){
        setCommunityDropdownHidden(true)
    }

    function toggleEventsDropdown(){
        setEventsDropdownHidden(prev => !prev)
    }

    function toggleCommunityDropdown(){
        setCommunityDropdownHidden(prev => !prev)
    }

    function toggleOuterNav(){
        setOuterNavHidden(prev => !prev)
    }

    useEffect(() => {
        if(mobileScreen){
            const currentEventsDropdown = eventsDropdown.current
            const currentEventsTitle = eventsTitle.current
            const currentCommunityDropdown = communityDropdown.current
            const currentCommunityTitle = communityTitle.current
    
            function hideDropdown(e){
                if(e.target !== currentEventsDropdown && e.target !== currentEventsTitle){
                    setEventsDropdownHidden(true)
                }
    
                if(e.target !== currentCommunityDropdown && e.target !== currentCommunityTitle){
                    setCommunityDropdownHidden(true)
                }
            }
            document.addEventListener("click", hideDropdown)
        
            return function(){
                document.removeEventListener("click", hideDropdown)
            }
        }
    }, [])

    useEffect(() => {
        if(mobileScreen){
            const menuButtonCurrent = menuButton.current
            const eventsTitleCurrent = eventsTitle.current
            const communityTitleCurrent = communityTitle.current
    
            const menuButtonChildren = Array.from(menuButtonCurrent.children)
    
            function hideOuterNav(e){
                if(e.target !== eventsTitleCurrent && e.target !== communityTitleCurrent && e.target !== menuButtonCurrent && !menuButtonChildren.includes(e.target)){
                    setOuterNavHidden(true)
                }
            }
    
            document.addEventListener("click", hideOuterNav)
    
            return function(){
                document.removeEventListener("click", hideOuterNav)
            }
        }
    }, [])

    return {
        eventsDropdownHidden, 
        communityDropdownHidden, 
        outerNavHidden,
        eventsDropdown,
        communityDropdown,
        eventsTitle,
        communityTitle,
        outerNavRef, 
        menuButton,
        showEventsDropdown, 
        hideEventsDropdown, 
        showCommunityDropdown, 
        hideCommunityDropdown, 
        toggleEventsDropdown,
        toggleCommunityDropdown,
        toggleOuterNav,
    }
}

export default useNavigation