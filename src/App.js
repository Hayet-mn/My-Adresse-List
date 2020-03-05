import React from 'react';
import AdresseList from './components/adresseList';
import Profile from './components/profile';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <h1 className="title">MY Adress Book</h1>
          <Switch>
            <Route exact path="/" component={AdresseList} />
            <Route path="/profile/:id" component={Profile} />
          </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
