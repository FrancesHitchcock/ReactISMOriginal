import Carousel from "../components/Carousel"

export default function Home(){
    return(
        <main className="main">
            <section className="image-section">
                <Carousel />
            </section>
            <section className="main-information">
                <h2><span className="first-word-span">About</span> Ilketshall St Margaret</h2>
                <p>
                    <a href="https://en.wikipedia.org/wiki/Ilketshall_St_Margaret" target="_blank">visit Wikipedia</a>
                </p>
                <p>
                    <span className="first-sentence-span">Ilketshall St Margaret is a village and civil parish in the north of the English county of Suffolk.</span> It is 3 miles (4.8 km) south of the market town of Bungay in the East Suffok district. The parish is part of the area known as the Saints and had a population of 160 at the 2011 United Kingdom census.
                </p>
				<p>
                    The parish is sparsely populated and situated to the west of the A144 road between Bungay and Halesworth. It borders the parishes of Bungay, Ilketshall St John, Ilketshall St Lawrence, Spexhall, Rumburgh, St Michael South Elmham, St Peter South Elmham and Flixton.
                </p>
				<p>
                    The parish church is dedicated to St Margaret. It dates from the early 11th century and features a round tower, one of around 40 round-tower churches in Suffolk.
                </p>
            </section>
        </main>
    )
}