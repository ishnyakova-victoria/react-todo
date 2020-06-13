import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { View } from './View/View';
import { List } from './List/List';
import { Form } from './Form/Form';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/add">
            <Form />
          </Route>
          <Route path="/edit/:todoId">
            <Form />
          </Route>
          <Route path="/view/:todoId">
            <View />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
