import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import App from "./App";
import HomeContainer from "./components/home/HomeContainer"


export const AppRoute = () => {
    return <BrowserRouter>
        <Switch>
            <App>
                <Route path="/" component={HomeContainer} />,
            </App>
        </Switch>
    </BrowserRouter>
};
