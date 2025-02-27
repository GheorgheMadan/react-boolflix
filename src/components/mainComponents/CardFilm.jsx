// CardFilm.jsx
export default function CardFilm(props) {
    // destrutturo 
    const { filmCard } = props
    console.log(filmCard);

    return (
        <>
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/w342${filmCard.poster_path}`} alt="" />
                <h3>{filmCard.title || filmCard.name}</h3>
                <span>{filmCard.original_title || filmCard.original_name}</span><br />
                <span>Language: {filmCard.original_language}</span><br />
                <span>Vote: {filmCard.vote_average}</span>
            </div>
        </>
    )
}