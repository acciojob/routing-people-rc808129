import { Route, Switch } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import React from "react";

function App() {
  return (
   
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/users/:id" component={UserDetails} />
      </Switch>
   
  );
}

export default App;
