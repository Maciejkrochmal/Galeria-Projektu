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
import {HOME, PRACOWNIA, AUTHOR, GALERIE, GALERIEDEFAULT} from "./components/LinkPath";
import {Author} from "./components/Pracownia/Author";
import {GaleryMain} from "./components/Galery/GaleryMain";
import {GaleryDefault} from "./components/Galery/GaleryPublic/GaleryDefault";

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
           <Route path={AUTHOR}>
               <Author/>
           </Route>
           <Route path={GALERIE}>
               <GaleryMain/>
           </Route>
           <Route path="/:handle">
               <GaleryDefault ss={'lala'}/>
           </Route>
       </Switch>
   </Router>
  );
}

export default App;
