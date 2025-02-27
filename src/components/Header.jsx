import { NavLink } from "react-router-dom"

// import del form 
import Form from "./headerComponents/Form"
// Header.jsx 
export default function Header() {
    return (
        <>
            <header>
                <section>
                    <div>
                        <h1>BOOLFLIX</h1>
                    </div>
                    <div>
                        {/* <NavLink to='/'>Home</NavLink> */}
                    </div>
                </section>
                <section>
                    <Form />
                </section>
            </header>
        </>
    )
}