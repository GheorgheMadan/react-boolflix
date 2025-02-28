// import del GlobalContext.jsx
import GlobalContext from "../../contexts/GlobalContext"

// import del useEffect e useContext 
import { useContext, useState } from "react"

// import di axios
import axios from "axios"

// import dei font aswome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch"

// Form.jsx
export default function Form() {

    // setto lo stato iniziale del form 
    const [form, setForm] = useState('')

    // accedo alla funzione setFilms() da App.jsx per utilizzarla nella fetchFilms
    const { setFilms, setTvSeries } = useContext(GlobalContext)



    function fetchFilms(e) {
        e.preventDefault()

        const movies = `https://api.themoviedb.org/3/search/movie?api_key=0afbbb328ee875db0e8cd1259868bf87&query=${form}`
        const tvSeries = `https://api.themoviedb.org/3/search/tv?api_key=0afbbb328ee875db0e8cd1259868bf87&language=it_IT&query=${form}`

        axios.all([
            axios.get(movies),
            axios.get(tvSeries)
        ])
            .then(axios.spread(function (resMovies, resSeries) {
                console.log(resMovies.data.results);
                setFilms(resMovies.data.results)

                console.log(resSeries.data.results);
                setTvSeries(resSeries.data.results)
            }))

            .catch(error => console.log(error));
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
        <>
            <form onSubmit={fetchFilms}>
                <input
                    type="text"
                    name="name"
                    value={form}
                    onChange={changeInput}
                    placeholder="cerca"
                    required
                />
                <button type="submit">{<FontAwesomeIcon icon={faSearch} />}</button>
            </form>
        </>
    )
} 