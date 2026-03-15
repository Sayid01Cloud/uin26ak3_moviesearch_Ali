import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout


