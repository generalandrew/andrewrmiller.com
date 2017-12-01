import React from 'react';
import styled from 'styled-components';

import {
  Size
} from '../../../styles';

import Body from '../atoms/Body';
import Page from '../atoms/Page';
import Text from '../atoms/Text';


const BodyStyled = Body.extend`
  bottom: 0;
  background-image: linear-gradient(to bottom, #FFFFFF, #EEEEEE);
  left: 0;
  right: 0;
  position: fixed;
`;

const FooterContainer = Page.extend`
  align-items: center;
  flex-direction: row;
  height: 45px;
  justify-content: space-between;
  max-width: ${ Size.ReadingWidth };
  text-align: center;
`

const PageFooter = (props) => {
  return (
    <BodyStyled>
      <FooterContainer>
        <Text>Andrew Miller</Text>
        <a href="https://github.com/generalandrew" target="_blank">
          github
        </a>
      </FooterContainer>
    </BodyStyled>
  );
};

export default PageFooter;
