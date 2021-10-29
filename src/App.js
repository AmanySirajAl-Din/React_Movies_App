import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavbarComponent from "./components/Navbar/Navbar";
import AddMovies from "./components/AddMovies";
import MovieDetails from "./components/MovieDetails";

import Movies from "./pages/Movies";
import Users from './pages/Users';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/addMovies" exact component={AddMovies} />
        <Route path="/details/:id" exact component={MovieDetails} />
        <Route path="/users" exact component={Users} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
