
function MovieCard({movie}){
    function onFavouriteClick(){
        alert("clicked!");
    }
    return <div>
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div>
                <button onClick={onFavouriteClick}>
                    Button
                </button>
            </div>
        </div>
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

// to access this we need to export it
export default MovieCard;