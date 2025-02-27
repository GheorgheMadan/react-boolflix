import { Outlet } from "react-router-dom";

// import del header 
import Header from "../components/Header";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}