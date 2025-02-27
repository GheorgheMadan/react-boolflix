// import del GlobalContext.jsx
import GlobalContext from "../../contexts/GlobalContext"

// import del useEffect e useContext 
import { useContext, useEffect } from "react"

// import di axios
import axios from "axios"


// Form.jsx
export default function Form() {

    // accedo alla funzione setFilms() da App.jsx per utilizzarla nella fetchFilms
    const { setFilms, films } = useContext(GlobalContext)

    function fetchFilms() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=0afbbb328ee875db0e8cd1259868bf87&query=ritorno+al+futuro')
            .then(res => {
                setFilms(res.data.results)
                // ,console.log(res.data.results)
            }
            )
            .catch(err => console.error('caricamento fallito', err)
            )
    }
    console.log(films);


    useEffect(() => {
        fetchFilms()
    }, [])

    return (
        <form>
            <input type="text" />
            <button>Cerca</button>
        </form>
    )
} 