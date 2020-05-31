import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login"
import HomeUser from "./Pages/HomeUser"
import Simulate from "./Pages/Simulate"
import PerfilUser from "./Pages/PerfilUser"
import Preferences from "./Pages/Preferences"
import Tutorial from "./Pages/Tutorial"
import UserGaming from "./Pages/UserGaming"
import Register from "./Pages/Register"
import Welcome from "./Pages/Welcome"



const App =() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login  />
        </Route>

        <Route exact path="/simulate">
          <Simulate />
        </Route>
        
        <Route exact path="/home">
          <HomeUser />
        </Route>
        
        <Route exact path ="/perfil" >
          <PerfilUser />
        </Route>

        <Route exact path ="/preferencias" >
          <Preferences />
        </Route>
      
        <Route exact path ="/tutorial" >
          <Tutorial />
        </Route>

        <Route exact path ="/perfilxp" >
          <UserGaming />
        </Route>

        <Route exact path="/register">
          <Register/>
        </Route>

        <Route exact path="/welcome">
          <Welcome />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
