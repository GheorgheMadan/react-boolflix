// import del GlobalContext.jsx
import GlobalContext from "../../contexts/GlobalContext"

// import del useEffect e useContext 
import { useContext, useEffect, useState } from "react"

// import di axios
import axios from "axios"


// Form.jsx
export default function Form() {

    // setto lo stato iniziale del form 
    const [form, setForm] = useState('')

    // accedo alla funzione setFilms() da App.jsx per utilizzarla nella fetchFilms
    const { setFilms } = useContext(GlobalContext)



    function fetchFilms(e) {
        e.preventDefault()

        // const tvSeries = `https://api.themoviedb.org/3/search/tv?api_key=0afbbb328ee875db0e8cd1259868bf87&query=shamless`
        const movies = `https://api.themoviedb.org/3/search/movie?api_key=0afbbb328ee875db0e8cd1259868bf87&query=${form}`

        axios.get(movies)
            .then(res => {
                setFilms(res.data.results)
                // ,console.log(res.data.results)
            }
            )
            .catch(err => console.error('caricamento fallito', err)
            )
    }
    // useEffect(() => {
    //     fetchFilms()
    // }, [])

    // funzione per aggiornare lo stato dell'input
    function changeInput(e) {
        // aggiorno il valore dell'input
        setForm(e.target.value)
    }

    return (
        <form onSubmit={fetchFilms}>
            <input
                type="text"
                name="name"
                value={form}
                onChange={changeInput}
            />
            <button type="submit">Cerca</button>
        </form>
    )
} 