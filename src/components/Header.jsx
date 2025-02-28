import { NavLink } from "react-router-dom"

// import del form 
import Form from "./headerComponents/Form"
// Header.jsx 
export default function Header() {
    return (
        <>
            <header>
                <div>
                    <NavLink to='/'>BOOLFLIX</NavLink>
                </div>
                <div>
                    <Form />
                </div>
            </header >
        </>
    )
}