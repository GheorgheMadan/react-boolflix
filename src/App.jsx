// Import del global context 
import GlobalContext from "./contexts/GlobalContext"

// Import delle routers 
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import del layout di default
import DefaultLayout from "./layouts/DefaultLayout";

// import delle pagine 
import HomePage from "./pages/HomePage";

// import di useEffect e useState
import { useEffect, useState } from "react";

// import di axios
import axios from "axios";

function App() {

  const [films, setFilms] = useState([])

  function fetchFilms() {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=0afbbb328ee875db0e8cd1259868bf87&query=ritorno+al+futuro')
      .then(res => {
        setFilms(res.data.results),
          console.log(res.data.results)
      }
      )
      .catch(err => console.error('caricamento fallito', err)
      )
  }

  useEffect(() => {
    fetchFilms()
  }, [])



  return (
    <>
      {/* <GlobalContext> */}
      <BrowserRouter>
        <Routes>
          {/* Setto il layout di Default */}
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </GlobalContext> */}
    </>
  )
}

export default App
