import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import LandingPage from "./Components/Landingpage";
import ProblemForm from "./Components/ProblemForm";

function App() {
    return (
        <div className="h-screen">
            <Switch>
                <Route path="/form">
                    <ProblemForm/>
                </Route>
                <Route path="/arst">
                    <h1>Tere tulemast Arstile</h1>
                </Route>
                <Route path="/">
                    <LandingPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
