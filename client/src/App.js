import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container } from 'react-bulma-components';

import "./App.css";


import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPages';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';



function App() {
  return (
    <Router>
    <Container>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={ "/contact"}>
          <ContactPage />
        </Route>
        
        <Route exact path={ "/portfolio"}>
          <PortfolioPage />
        </Route>
        
        <Route exact path={"/resume"}>
          <ResumePage />
        </Route>
        
        
      </Switch>
    </Container>
  </Router>
  );
}

export default App;