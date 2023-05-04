import React from 'react'
import { Routes, Route} from "react-router-dom"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from "./pages/Home"
import Events1 from "./pages/Events1"
import Events2 from "./pages/Events2"
import Events3 from "./pages/Events3"
import Church from "./pages/Church"
import Newsletter from "./pages/Newsletter"
import ParishMeeting from "./pages/ParishMeeting"
import VillageHall from "./pages/VillageHall"
import VillageShow from "./pages/VillageShow"
import Layout from "./components/Layout"

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route exact path="/" element={<Home />}/>
                <Route path="/events-events1" element={<Events1 />}/>
                <Route path="/events-events2" element={<Events2 />}/>
                <Route path="/events-events3" element={<Events3 />}/>
                <Route path="/village-hall" element={<VillageHall />}/>
                <Route path="/parish-meeting" element={<ParishMeeting />}/>
                <Route path="/newsletter" element={<Newsletter />}/>
                <Route path="/church" element={<Church />} />
                <Route path="/village-show" element={<VillageShow />}/>
            </Route>
        </Routes>
    )
}

export default App
