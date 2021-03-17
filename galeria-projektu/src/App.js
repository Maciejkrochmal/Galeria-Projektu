import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.sass';
import {NavBar} from "./components/NavBar";
import {Caro} from "./components/Carousel";

function App() {
  return (
   <Router>
       <NavBar/>
       <Switch>
           <Route path='/' exact >
               <Caro/>
           </Route>
       </Switch>
   </Router>
  );
}

export default App;
