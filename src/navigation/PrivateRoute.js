import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import getCrumbs from './GetCrumbs';
import routes from './Routes';
import Navbar from '../components/navbar/navbarContainer';
import Breadcrumbs from '../components/commons/Breadcrumbs/BreadcrumbsComponent';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.isAuthenticated) {
        const crumbs = getCrumbs(props, routes);
        return (
          <div>
            <Navbar />
            <Breadcrumbs crumbs={crumbs} />
            <Component {...props} />
          </div>
        );
      } else {
        return <Redirect to="/login" />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
