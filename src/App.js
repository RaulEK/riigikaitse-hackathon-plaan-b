import React from 'react';
import {Route, Switch} from "react-router-dom";
import LandingPage from "./Components/Landingpage";
import Doctor from "./Containers/Doctor";
import Header from "./Components/Header";
import ProblemForm from "./Components/ProblemForm";
import CalendarView from "./Components/CalendarView";

function App() {
    return (
        <div className="h-screen">
            <Header/>
            <div className="pt-24 h-full">
                <Switch>
                    <Route path="/form">
                        <ProblemForm/>
                    </Route>
                    <Route path="/kalender">
                        <CalendarView/>
                    </Route>
                    <Route path="/arst">
                        <Doctor/>
                    </Route>
                    <Route path="/">
                        <LandingPage/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;