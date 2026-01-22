import { HashRouter, Route, Switch } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import React from "react";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/users/:id" component={UserDetails} />
      </Switch>
    </HashRouter>
  );
}

export default App;
