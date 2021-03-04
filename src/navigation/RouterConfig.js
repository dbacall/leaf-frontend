import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import routes from './Routes';
import Navbar from '../components/navbar/navbarContainer';
import Breadcrumbs from '../components/commons/Breadcrumbs/BreadcrumbsComponent';

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
                    console.log(props.match);
                    const crumbs = routes
                      // Get all routes that contain the current one.
                      .filter(({ path }) => props.match.path.includes(path))
                      // Swap out any dynamic routes with their param values.
                      // E.g. "/pizza/:pizzaId" will become "/pizza/1"
                      .map(({ path, ...rest }) => ({
                        path: Object.keys(props.match.params).length
                          ? Object.keys(props.match.params).reduce(
                              (path, param) =>
                                path.replace(
                                  `:${param}`,
                                  props.match.params[param]
                                ),
                              path
                            )
                          : path,
                        ...rest,
                      }));
                    console.log(`Generated crumbs for ${props.match.path}`);
                    crumbs.map(({ name, path }) => console.log({ name, path }));
                    return (
                      <div>
                        <Navbar />
                        <Breadcrumbs crumbs={crumbs} />
                        <Component {...props} />
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
