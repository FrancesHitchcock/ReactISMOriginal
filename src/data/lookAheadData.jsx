import {nanoid} from "nanoid"

// standard regular events:
// "Coffee Morning every Wednesday 10.30am to 12.00"
// "Exercise for the over 60s (EFOS) every Monday at 10.30am, followed by coffee (open to all) at 11.30am" 

// to add markup to a string the property value will need to be in this format:
// details: (<span>click on the link to visit <a href="https://stackoverflow.com/questions/14659240/angle-bracket-without-triggering-html-code">Stack Overflow</a></span>)

// Where there are more than one event on the same day it should take the following format:

// {
//     id: nanoid(),
//     date: "Saturday 3rd June",
//     events: [
//         {
//             id: nanoid(),
//             time: "10.30am",
//             title: "Church Coffee Morning",
//             details: "",
//         },
//         {
//             id: nanoid(),
//             time: "7.30pm",
//             title: "Bingo Evening",
//             details: "Cost: £1 per person. in the Village Hall",
//         },
//     ]
// },

// If there are no events just leave the array empty and the JS will take care of the display.

const lookAhead = {
    dates: [
        // {
        //     id: nanoid(),
        //     date: "Thursday 4th June",
        //     events: [
        //         {
        //             id: nanoid(),
        //             time: "7.00am - 10.00pm",
        //             title: "Local Elections",
        //             details: "in the Village Hall",
        //         },
        //     ]
        // },
    ]
}

export {lookAhead}