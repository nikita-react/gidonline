import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../urls';
import App from '../components/App';
import Container from '../components/Container';
import FilterMovies from '../components/FilterMovies';
import RenderMovies from '../components/RenderMovies';

const Routes: React.FC = () => {
  const page = window.location.pathname.split('').pop();
  const [currentPage, setCurrentPag] = useState<string>(page);

  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route
            exact
            path={routes.basic.gidonline}
            component={() => (
              <Container>
                <FilterMovies />
                <RenderMovies
                  setCurrentPag={setCurrentPag}
                  currentPage={currentPage}
                />
              </Container>
            )}
          />
          <Route
            exact
            path={`${routes.basic.pagination}${page}`}
            component={() => (
              <Container>
                <FilterMovies />
                <RenderMovies
                  setCurrentPag={setCurrentPag}
                  currentPage={currentPage}
                />
              </Container>
            )}
          />
        </Switch>
      </App>
    </BrowserRouter>
  );
};
export default Routes;
