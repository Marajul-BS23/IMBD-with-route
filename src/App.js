import Movies from "./components/movies.component";
import Navbar from "./components/navbar.component";
import { Route } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import CreatNewMovie from "./components/creatnew.component";
import Home from "./components/home.component";

function App() {
    return (
        <>
            <Navbar />
            <br />
            <switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/creatnewmovie" component={CreatNewMovie} />
                <Route path="/movies" component={Movies} />
                <Route exact path="/" component={Home} />
            </switch>
        </>
    );
}

export default App;
