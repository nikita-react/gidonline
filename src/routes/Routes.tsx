import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../urls';
import App from '../components/App';
import Container from '../components/Container';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route
            exact
            path={routes.basic.gidonline}
            component={() => <Container />}
          />
        </Switch>
      </App>
    </BrowserRouter>
  );
};
export default Routes;
