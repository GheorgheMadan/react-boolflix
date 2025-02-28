// Import del global context 
import GlobalContext from "./contexts/GlobalContext"

// Import delle routers 
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import del layout di default
import DefaultLayout from "./layouts/DefaultLayout";

// import delle pagine 
import HomePage from "./pages/HomePage";

// import di useEffect e useState
import { useState } from "react";

function App() {

  const [films, setFilms] = useState([])
  const [tvSeries, setTvSeries] = useState([])

  return (
    <>
      <GlobalContext.Provider value={{ films, setFilms, tvSeries, setTvSeries }}>
        <BrowserRouter>
          <Routes>
            {/* Setto il layout di Default */}
            <Route element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
