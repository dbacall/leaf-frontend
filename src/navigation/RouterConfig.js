import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import routes from './Routes';
import Navbar from '../components/navbar/navbarContainer';
import Breadcrumbs from '../components/commons/Breadcrumbs/BreadcrumbsComponent';
import getCrumbs from './GetCrumbs';

const RouterConfig = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map(({ path, Component, privateRoute }, key) => {
            if (privateRoute) {
              console.log('here');
              return (
                <PrivateRoute
                  exact
                  path={path}
                  key={key}
                  component={Component}
                />
              );
            } else {
              return (
                <Route
                  exact
                  path={path}
                  key={key}
                  render={(props) => {
                    const crumbs = getCrumbs(props, routes);

                    return (
                      <div>
                        <Navbar />
                        {/* <div style={{ position: 'relative' }}> */}
                        <Breadcrumbs crumbs={crumbs} />
                        <Component {...props} />
                        {/* </div> */}
                      </div>
                    );
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
