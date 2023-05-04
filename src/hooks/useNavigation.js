import {useState, useEffect, useRef} from "react"

function useNavigation(){
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

    function closeOuterNav(){
        setOuterNavHidden(true)
    }

    useEffect(() => {
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
    }, [])

    useEffect(() => {
        const menuButtonCurrent = menuButton.current
        const eventsTitleCurrent = eventsTitle.current
        const communityTitleCurrent = communityTitle.current

        function hideOuterNav(e){

            if(e.target !== eventsTitleCurrent && e.target !== communityTitleCurrent && e.target !== menuButtonCurrent){
                setOuterNavHidden(true)
            }
        }

        document.addEventListener("click", hideOuterNav)

        return function(){
            document.removeEventListener("click", hideOuterNav)
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
        closeOuterNav
    }
}

export default useNavigation