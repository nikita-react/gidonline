import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../constants';
import App from '../components/App';
import Container from '../components/Container';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={routes.gidonline}
          component={() => (
            <App>
              <Container />
            </App>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
