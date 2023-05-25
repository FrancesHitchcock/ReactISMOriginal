import PagePhoto from "../components/PagePhoto"

export default function Church(){
    return(
        <main className="main">
            <section className="image-section">
                <PagePhoto
                    imageUrl="/images/church.jpg"
                    altText="Ilketshall Saint Margaret Church and churchyard with ancient gravestones. The church is built of stone and cobble. It has a round tower and prominent porch. In the foreground is a branch of tan-coloured beech leaves and some evergreen shrubs. In the background are mature winter deciduous trees."
                />
            </section>
            <section className="main-information">
                <h2><span className="first-word-span">About</span> St Margaret's Church</h2>
                <p>
                    <span className="first-sentence-span">Ilketshall St Margaret is one of one hundred and eighty round tower churches in England, </span> most of which are located in East Anglia. St Margaret's consists of a round west tower, nave, chancel and south porch. Today the roof is of slates, although the pitch of an earlier thatched roof can be seen against the tower. Local flints are the main building material, with later brick buttresses at the east end. 
                </p>
                <p>
                    Whilst many of the round towers were built on to existing churches, St Margaret's tower is a complete circle within, indicating that it was built at the same time as the church.
                </p>
                <p>
                    The tower, up to the base of the belfry, and most of the church are believed to date from the Middle Saxon period - probably just before 1000AD.
                </p>
                <p>
                    Later additions include the thirteenth century chancel windows and south doorway. The belfry is believed to be fourteenth century, whilst the nave windows are fifteenth century.
                </p>
                <p>
                    Click on the link for the  <a href="/churchServices/Sunday-Service-Rota-2023.pdf" target="_blank">Saints Benefice Sunday Service Rota</a> 
                </p>
                <p>
                    Visit <a href="https://www.roundtowers.org.uk/" target="_blank">the Round Tower Churches Society</a> for more information.
                </p>
                <p>
                    To find out more about St Margaret's Church, including services, visit <a href="https://www.achurchnearyou.com/church/2235/" target="_blank">A Church Near You</a>.
                </p>
            </section>
        </main>
    )
}