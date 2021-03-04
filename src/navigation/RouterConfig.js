import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import routes from './Routes';

const RouterConfig = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map(({ path, Component, privateRoute }, key) => {
            if (privateRoute) {
              return (
                <PrivateRoute
                  exact
                  path={path}
                  key={key}
                  render={(props) => {
                    return <Component {...props} />;
                  }}
                />
              );
            } else {
              return (
                <Route
                  exact
                  path={path}
                  key={key}
                  render={(props) => {
                    return <Component {...props} />;
                  }}
                />
              );
            }
          })}
        </Switch>
      </div>
    </Router>
  );
};

export default RouterConfig;
