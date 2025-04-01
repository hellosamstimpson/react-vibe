import TypographyTest from "../components/TypographyTest"
import Hero from "../components/Hero"

function Typography() {

    const heros = [{ id: 2, title: "Title 2", lead: "Awards Engine is the all-in-one platform designed for awards organisers, streamlining entry collection, judging, and winner announcements-all in one seamless system.", prod: "How does Awards Engine work?" }];
    return (
        <div>
            {heros.map((hero) => (
                <Hero key={hero.id} hero={hero} />
            ))}
            <main>
                <TypographyTest />
            </main>
        </div>
    )
}


export default Typography;