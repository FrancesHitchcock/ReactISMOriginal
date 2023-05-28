import { Link } from "react-router-dom"
import Events from "../components/Events"
import { secondMonth } from "../data/secondMonthData"
import { lookAhead } from "../data/lookAheadData"

export default function Events3(){
    let lookAheadInfo = ""

    if(lookAhead.dates.length > 0){
        lookAheadInfo = "All events take place at Ilketshall St Margaret Village Hall unless stated otherwise."
    }
    else{
        lookAheadInfo = "There are no events in the look-ahead calendar at the moment."
    }

    const datesMarkup = lookAhead.dates.map(date => (
        <Events
            key={date.id}  
            date={date}
        />
    ))

    return(
        <main className="main">
            <section className="main-information events-section">
                <div className="events-nav-container last-events-nav-container">
                    <Link to={`/events-${secondMonth.month.toLowerCase()}`} className="events-nav-link back-link">
                        &lt; {secondMonth.month}
                    </Link>
                </div>
                <h2><span className="first-word-span">Events</span> look-ahead</h2>
                <p className="events-location-info">{lookAheadInfo}</p>
                {datesMarkup}
            </section>
        </main>
    )
}