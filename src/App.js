import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { Provider } from "react-redux";
import stores from "./stores";
import "./App.css";

import CategoryMovie from "./view/CategoryMovie";
import Movie from "./view/Movie";

function App() {
  let history = useHistory();
  return (
    <div className="wrapper">
      <Provider store={stores}>
        <BrowserRouter history={history}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path="/" exact component={Movie} />
              <Route path="/category" exact component={CategoryMovie} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
