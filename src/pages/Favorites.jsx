import Hero from "../components/Hero"


function Favorites() {
    const heros = [{ id: 2, title: "Powering Your Awards, from Entry to Excellence", lead: "Awards Engine is the all-in-one platform designed for awards organisers, streamlining entry collection, judging, and winner announcements-all in one seamless system.", prod: "How does Awards Engine work?" }];
    return (
        <div>
            {heros.map((hero) => (
                <Hero key={hero.id} hero={hero} />
            ))}
        </div>
    );
}


export default Favorites;