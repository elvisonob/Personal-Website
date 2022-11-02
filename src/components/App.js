import React from 'react';
import HomePage from './HomePage.js';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Portfolio from './Portfolio.js';

const App = () => {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
};

export default App;
