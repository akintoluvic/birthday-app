import {
  BrowserRouter as Router, Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailsPage from "./pages/DetailsPage";
import Home from "./pages/Home";
import AddBirthday from "./pages/AddBirthday";

function App() {
  return (
    <Router>
      <div className="App min-h-screen">
        <Navbar />
        <Switch>
          <Route path="/new">
            <AddBirthday />
          </Route>
          <Route path="/details">
            <DetailsPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
