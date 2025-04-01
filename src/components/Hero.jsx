function Hero({ hero }) {
    return (
        <div className="layout">
            <header className="layout__header">
                <h1>{hero.title}</h1>
                <p>{hero.lead}</p>
                <p>{hero.prod}</p>
            </header>
        </div>
    );
}

export default Hero;