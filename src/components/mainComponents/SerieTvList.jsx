// import della funzione useContest
import { useContext } from "react"
// import del GlobalContxt 
import GlobalContext from "../../contexts/GlobalContext"

// import della card delle serie tv
import CardSerieTv from "./CardSerieTv"



// SerieTvList.jsx
export default function SerieTvList() {

    const { tvSeries } = useContext(GlobalContext)


    return (
        <>
            <main>
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
            </main>
        </>
    )
}