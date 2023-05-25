import { Link } from "react-router-dom"
import Events from "../components/Events"
import { firstMonth as monthData } from "../data/firstMonthData"
import { secondMonth } from "../data/secondMonthData"

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
                <div className="events-nav-container first-events-nav-container">
                    <Link to={`/events-${secondMonth.month.toLowerCase()}`} className="events-nav-link forward-link">
                        {secondMonth.month} &gt;
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