import { NavLink } from "react-router-dom"

// import del form 
import Form from "./headerComponents/Form"
// Header.jsx 
export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <NavLink path='/'>
                        <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" />
                    </NavLink>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='serie-tv'>Serie TV</NavLink>
                    {/* <NavLink>Film</NavLink>
                    <NavLink>Originali</NavLink>
                    <NavLink>Aggiunti di recente</NavLink>
                    <NavLink>La mia lista</NavLink> */}
                </nav>
                <div>
                    <Form />
                </div>
            </header >
        </>
    )
}