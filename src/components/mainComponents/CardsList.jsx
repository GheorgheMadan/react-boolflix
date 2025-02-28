// import della funzione useContest
import { useContext } from "react"
// import del GlobalContxt 
import GlobalContext from "../../contexts/GlobalContext"

// import della singola card  CardFilm.jsx 
import CardFilm from "./CardFilm"

// CardsList.jsx
export default function CardsList() {

    const { films, tvSeries } = useContext(GlobalContext)


    return (
        <>
            {films.map((film) => (
                <>
                    {/* <h2>Film</h2> */}
                    <CardFilm key={film.id} mediaCard={film} type='film' />
                </>
            ))}
            {tvSeries.map((serie) => (
                <>
                    {/* <h2>Serie Tv</h2> */}
                    <CardFilm key={serie.id} mediaCard={serie} type='serie' />
                </>
            ))}
        </>
    )
}