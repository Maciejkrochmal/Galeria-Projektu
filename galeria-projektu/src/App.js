import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.sass';
import {NavBar} from "./components/HomePage/NavBar";
import {Caro} from "./components/HomePage/Carousel";
import {HomeMiddle} from "./components/HomePage/HomeMiddle";
import {Pracownia} from "./components/Pracownia/Pracownia";
import {HOME, PRACOWNIA} from "./components/LinkPath";

function App() {
  return (
   <Router>
       <NavBar/>
       <Switch>
           <Route path={HOME} exact >
               <Caro/>
               <HomeMiddle/>
           </Route>
           <Route path={PRACOWNIA}>
               <Pracownia/>
           </Route>
       </Switch>
   </Router>
  );
}

export default App;
