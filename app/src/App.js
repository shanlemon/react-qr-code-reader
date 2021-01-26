import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/HomeRoute';
import Navbar from './components/Navbar.js';
import styled from 'styled-components';

const GlobalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainWrapper = styled.div`
  flex: 1;
  padding: 0 50px;
`;

function App() {
  return (
    <Router>
      <GlobalWrapper>
        <Navbar />
        <MainWrapper>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </MainWrapper>
      </GlobalWrapper>
    </Router>
  );
}

export default App;
