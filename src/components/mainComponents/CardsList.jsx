// import della funzione useContest
import { useContext } from "react"
// import del GlobalContxt 
import GlobalContext from "../../contexts/GlobalContext"

// import della singola card dei film CardFilm.jsx 
import CardFilm from "./CardFilm"

// import della card delle serie tv
import CardSerieTv from "./CardSerieTv"



// CardsList.jsx
export default function CardsList() {

    const { films, tvSeries } = useContext(GlobalContext)


    return (
        <>
            <div>
                {films.length === 0 ? <h2>Nessun film trovato</h2> : <h2>Sezione film</h2>}
            </div>
            <section className="container-card">
                {films.map((film) => (
                    <>
                        {/* <h2>Film</h2> */}
                        <CardFilm key={film.id} mediaCard={film} />
                    </>
                ))}
            </section>
            <div>
                {tvSeries.length === 0 ? <h2>Nessuna serie tv trovata</h2> : <h2>Sezione Serie Tv</h2>}
            </div>
            <section className="container-card">
                {tvSeries.map((serie) => (
                    <>
                        {/* <h2>Serie Tv</h2> */}
                        <CardSerieTv key={serie.id} mediaCard={serie} />
                    </>
                ))}
            </section>
        </>
    )
}