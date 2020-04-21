import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Categories, Comparison, Products, Error } from './pages';

const routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route exact path="/category/:category_id/" component={Products} />
        <Route
            path="/category/:category_id/comparison/:item1_id,:item2_id"
            component={Comparison}
        />
        <Route component={Error} />
    </Switch>
);
export default routes;
