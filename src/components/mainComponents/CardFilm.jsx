// CardFilm.jsx
export default function CardFilm(props) {
    // destrutturo 
    const { filmCard } = props
    console.log(filmCard);

    return (
        <>
            <div className="card">
                <h3>{filmCard.title}</h3>
                <span>{filmCard.original_title}</span><br />
                <span>{filmCard.original_language}</span><br />
                <span>{filmCard.vote_average}</span>
            </div>
        </>
    )
}