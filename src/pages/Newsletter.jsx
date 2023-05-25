import PagePhoto from "../components/PagePhoto"
import {newsletters} from "../data/genData.js"

export default function Newsletter(){
    return(
        <main className="main">
            <section className="image-section">
                <PagePhoto
                    imageUrl="/images/flower-field.jpg"
                    altText="Field with a mix of sunflowers and smaller mauve flowers. There is dense broad-leaved woodland in the background."
                >
                    <div className="main-photo-link-container">
                        <div className="inner-link-container">
                            <button className="newsletter-button"><a href={`/newsletters/Issue${newsletters.previous.issue}.pdf`} target="_blank">No. {newsletters.previous.issue}: {newsletters.previous.title}</a></button>
                            <button className="newsletter-button"><a href={`/newsletters/Issue${newsletters.current.issue}.pdf`} target="_blank">No. {newsletters.current.issue}: {newsletters.current.title}</a></button>
                        </div>
                    </div>
                </PagePhoto> 
            </section>
            <section className="main-information">
                <h2><span className="first-word-span">Village Voice</span> Newsletter</h2>
                <p>
                    <span className="first-sentence-span">The Village Voice is a quarterly newsletter dedicated to events and news from Ilketshall St Margaret.</span> Contributions are welcome. Please contact the editor Jon Lewis at <a href="mailto:villagevoiceism@gmail.com" target="_blank">villagevoiceism@gmail.com</a>
                </p>
                <p>
                    Click on the links at the top of this page to read the most recent issues of the Village Voice.
                </p>
            </section>
        </main>
    )
}