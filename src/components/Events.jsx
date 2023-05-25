import React from "react"

export default function Events({date}){
    const events = date.events.map(event => (
        <div className="event-container" key={event.id}>
            <p className="event-time">{event.time}</p>
            <p className="event-details"><span className="event-title">{event.title}</span> {event.details}</p>
        </div>
    ))
    return(
        <div className="event-date-container">
            <h3 className="event-date">{date.date}</h3>
            <div className="events-container">
                {events}
            </div>
        </div>
    )
}
