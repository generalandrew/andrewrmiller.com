import React, { Component } from 'react';
import reset  from 'styled-reset';
import styled, { injectGlobal } from 'styled-components';

import Footer from '../components/molecules/PageFooter';
import Header from '../components/molecules/PageHeader';
import Home   from './Home';

import {
  Color
} from '../../styles';

const AppStyled = styled.div`
  background-color: ${Color.White};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`;

injectGlobal`
  ${reset}
  html, body, #root {
      min-height: 100%;
  }
`;

const App = (props) => {
  return (
    <AppStyled>
      <Header />
      <Home />
      <Footer />
    </AppStyled>

  );
};

export default App
