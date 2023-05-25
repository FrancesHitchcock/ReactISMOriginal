import PagePhoto from "../components/PagePhoto"

export default function VillageShow(){
    return(
        <main className="main">
            <section className="image-section">
                <PagePhoto
                    imageUrl="/images/village-show.jpg"
                    altText="Entry to the village maked with a road sign displaying the name 'Ilketshall St Margaret' and a 30mph speed limit sign. The surrounding scenery comprises a green arable field and mature deciduous trees in full leaf. The top of the church tower can be seen in the background."
                />
            </section>
            <section className="main-information">
                <h2><span className="first-word-span">Village</span> Show Gallery</h2>
                <p>
                    <span className="first-sentence-span">Memorable moments from Saturday 16th July 2022</span>
                </p>
                <p>
                     Click the link to see the report on the <a href="/flyers/flower-show-report-2022.pdf" target="_blank">2022 Ilketshall St Margaret Village Show.</a>
                </p>
                <p>
                    Memories of the Show are captured in our photo gallery below:
                </p>
                <div className="show-gallery">
                    
                </div>
 
            </section>
        </main>
    )
}