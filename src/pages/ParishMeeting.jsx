import PagePhoto from "../components/PagePhoto"
import { parishMeetingMins } from "../data/genData"

export default function ParishMeeting(){
    return(
        <main className="main">
            <section className="image-section">
                <PagePhoto
                    imageUrl="/images/speed-sign.jpg"
                    altText="Entry to the village maked with a road sign displaying the name 'Ilketshall St Margaret' and a 30mph speed limit sign. The surrounding scenery comprises a green arable field and mature deciduous trees in full leaf. The top of the church tower can be seen in the background."
                />
            </section>
            <section className="main-information">
                <h2><span className="first-word-span">Parish</span> Meeting</h2>
                <p>
                    <span className="first-sentence-span">Welcome to the Ilketshall St Margaret Parish Meeting page.</span> Click on the link to read the <a href="/parishCouncilDocs/Constitution_2022.pdf" target="_blank">Ilketshall St Margaret Parish Meeting Constitution.</a>
                </p>
                <p>
                    To see the minutes of the last meeting click on the link below:<br />
                    <a href={`/parishCouncilDocs/minutes/${parishMeetingMins.urlFragment}`} target="_blank">Meeting {parishMeetingMins.number}: {parishMeetingMins.title}</a>
                </p>
            </section>
        </main>
    )
}