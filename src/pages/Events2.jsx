import {Link} from "react-router-dom"
import Events from "../components/Events"
import { firstMonth } from "../data/firstMonthData"
import { secondMonth as monthData } from "../data/secondMonthData"

export default function Events1(){
    const regularEventsMarkup = monthData.regularEvents.map(regularEvent => (<p key={regularEvent.id} className="regular-event-para">{regularEvent.event}</p>))

    const datesMarkup = monthData.dates.map(date => (
        <Events
            key={date.id}  
            date={date}
        />
    ))

    return(
        <main className="main">
            <section className="main-information events-section">
                <div className="events-nav-container middle-events-nav-container">
                    <Link to={`/events-${firstMonth.month.toLowerCase()}`} className="events-nav-link back-link">
                        &lt; {firstMonth.month}
                    </Link>
                    <Link to="/events-look-ahead" className="events-nav-link forward-link">
                        look-ahead &gt;
                    </Link>
                </div>
                <h2><span className="first-word-span">{monthData.month} {monthData.year}</span> Events</h2>
                <p className="events-location-info">All events take place at Ilketshall St Margaret Village Hall unless stated otherwise.</p>
                {regularEventsMarkup}
                {datesMarkup}
            </section>
        </main>
    )
}