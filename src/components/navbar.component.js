import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="">
                    Home
                </Link>
                <Link className="navbar-brand" to="/movies">
                    IMDb
                </Link>
                <Link className="navbar-brand" to="/creatnewmovie">
                    Add A new Movie
                </Link>
                <Link className="navbar-brand" to="/login">
                    login
                </Link>
                <Link className="navbar-brand" to="/signup">
                    SignUp
                </Link>
            </nav>
        </>
    );
}

export default Navbar;
