import PagePhoto from "../components/PagePhoto"

export default function VillageHall(){
    return(
        <main className="main">
            <section className="image-section">
                <PagePhoto
                    imageUrl="/images/village-hall.jpg"
                    altText="A single-storey building of red brick, with extensions of various heights, angles and ages. It is partially obscured by a small shed in the foreground. There is a mature deciduous tree behind the building. The building is lit by winter sunshine."
                />
            </section>
            <section className="main-information">
                <h2><span className="first-word-span">Hire</span> the Village Hall</h2>
                <img className="main-information-image" src="/flyers/village-hall-hire.jpg" alt="Purple flyer with information about how to hire the village hall: Available to hire for private functions. For further information and bookings contact Maggie Oldham on 01986 781640. Contributions £5 per hour for residents. Fully equipped kitchen, toilet & disabled access, car parking, large hall seats up to 40 people comfortably." />
            </section>
        </main>
    )
}