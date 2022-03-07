import Navbar from "../Navbar/navbar";
import Home from "../Home/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "../Create/create";
import BlogDetails from "../BlogDetails/blogDetails";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
