// import della funzione useContest
import { useContext } from "react"
// import del GlobalContxt 
import GlobalContext from "../../contexts/GlobalContext"

// import della singola card  CardFilm.jsx 
import CardFilm from "./CardFilm"

// CardsList.jsx
export default function CardsList() {

    const { films } = useContext(GlobalContext)

    return (
        <>
            <section className="container-cards">
                {films.map((film) => (
                    <CardFilm key={film.id} filmCard={film} />
                ))}
            </section>
        </>
    )
}