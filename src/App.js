import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import LandingPage from "./Components/Landingpage";
import Doctor from "./Containers/Doctor";
import Header from "./Components/Header";

function App() {
    return (
        <div className="h-screen">
            <Header/>
            <Switch>
                <Route path="/arst">
                    <Doctor/>
                </Route>
                <Route path="/">
                    <LandingPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
