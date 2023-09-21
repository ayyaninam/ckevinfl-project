import React, { useEffect, useState } from "react";
import "./App.css"
import Header from "./Components/Header";
import HomePage from "./Components/homePage/HomePage";
import Register from "./Components/Register";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,

} from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import {AuthWrapper, AuthWrapperSec} from "./Components/AuthWrapper";
import Users from "./Components/Users";
import LandingPage from "./LandingPage";

function App() {

  const [userLogged, setUserLogged] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(userLogged));
  }, [userLogged]);


  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact element={<Navigate to="/nfl" replace={true} />} /> */}
        {/* <Route path="/" exact element={<HomePage />} /> */}
        <Route element={<AuthWrapper />}>
        <Route path="/users" exact element={<Users/>} />
        </Route>
        
        {/* <Route path="/login" exact element={<LoginPage />} /> */}

        <Route element={<AuthWrapperSec />}>
        <Route path="/register" exact element={<Register />} />
        </Route>


        <Route element={<AuthWrapperSec />}>
              <Route path={"/login"} element={<LoginPage />} />
              </Route>


        <Route element={<AuthWrapper />}>
              <Route path={"/homepage"} element={<HomePage />} />
            </Route>

            <Route path={"/"} element={<LandingPage />} />



        {/* <Route path="/nba" exact element={<NbaDataPage/>} />
        <Route path="/nhl" exact element={<NhlDataPage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
