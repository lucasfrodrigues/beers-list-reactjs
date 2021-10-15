import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ListBeers } from '../pages/ListBeers';
import { Registration } from '../pages/Registration';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route component={ListBeers} path="/" exact />
            <Route component={Registration} path="/registration" />
        </Switch>
    )
}

