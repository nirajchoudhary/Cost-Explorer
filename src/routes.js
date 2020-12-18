import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import App from "./App";
import ProductContainer from "./components/Product"


export const AppRoute = () => {
    return <BrowserRouter>
        <Switch>
            <App>
                <Route path="/" component={ProductContainer} />,
            </App>
        </Switch>
    </BrowserRouter>
};
