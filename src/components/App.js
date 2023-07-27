import React from 'react';
import HomePage from './pages/HomePage.js';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import MainNavigation from './Navigation/MainNavigation';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
