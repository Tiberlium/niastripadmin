import react from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Managewisata, Wisata } from "./Pages";

class App extends react.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Wisata />
          </Route>
          <Route path="/Managewisata">
            <Managewisata />
          </Route>
          <Route path="/Managewisata/:id">
            <Managewisata />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
