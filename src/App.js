import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavbarComponent from "./Components/Navbar";
import AddMovie from "./Components/AddMovie";
import MovieDetails from "./Components/MovieDetails";
import SearchResult from "./Components/SearchResult";


import Movies from "./Pages/Movies";
import Users from './Pages/Users';
import NotFound from './Pages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/page=:page" exact component={Movies} />
        <Route path="/movies/search=:txt" exact component={SearchResult} />
        <Route path="/addMovie" exact component={AddMovie} />
        <Route path="/details/:id" exact component={MovieDetails} />
        <Route path="/users" exact component={Users} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
