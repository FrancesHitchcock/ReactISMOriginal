import {nanoid} from "nanoid"

// standard regular events:
// "Coffee Morning every Wednesday 10.30am to 12.00"
// "Exercise for the over 60s (EFOS) every Monday at 10.30am, followed by coffee (open to all) at 11.30am" 

// to add markup to a string the property value will need to be in this format:
// details: (<span>click on the link to visit <a href="https://stackoverflow.com/questions/14659240/angle-bracket-without-triggering-html-code">Stack Overflow</a></span>)



const lookAhead = {
    dates: [
        {
            id: nanoid(),
            date: "Thursday 4th June",
            events: [
                {
                    id: nanoid(),
                    time: "7.00am - 10.00pm",
                    title: "Local Elections",
                    details: "in the Village Hall",
                },
            ]
        },
        {
            id: nanoid(),
            date: "Tuesday 23rd June",
            events: [
                {
                    id: nanoid(),
                    time: "7.30pm",
                    title: "Parish Meeting AGM",
                    details: "",
                },
                {
                    id: nanoid(),
                    time: "7.30pm",
                    title: "Bingo Evening",
                    details: "Cost: £1 per person. in the Village Hall",
                },
            ]
        }
    ]
}

export {lookAhead}