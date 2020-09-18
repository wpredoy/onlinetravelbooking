import React, { createContext, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Spot from './component/Spot/Spot';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Travelspotdetail from './component/Travelspotdetail/Travelspotdetail';
import Nomatch from './component/Nomatch/Nomatch';
import Resortinformation from './component/Resortinformation/Resortinformation';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const newContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <newContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Spot></Spot>
          </Route>
          <Route path="/spot">
            <Spot></Spot>
          </Route>
          <Route path="/travelspotdetail/:spotid">
            <Travelspotdetail></Travelspotdetail>
          </Route>
          <PrivateRoute path="/resortinfromation">
            <Resortinformation></Resortinformation>
          </PrivateRoute>
          <Route path="/login">
                <Login></Login>
          </Route>
          <Route exact path="/">
            <Spot></Spot>
          </Route>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>
    </newContext.Provider>
  );
}

export default App;
