import React  from 'react';
import styled from 'styled-components';

import {
  Color,
  Size
} from '../../../styles';

import Body     from '../atoms/Body';
import LinkOut  from '../atoms/LinkOut';
import Page     from '../atoms/Page';
import Text     from '../atoms/Text';


const BodyStyled = Body.extend`
  bottom: 0;
  background: ${ Color.White };
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
  padding-bottom: 0px;
  text-align: center;
`

const PageFooter = (props) => {
  return (
    <BodyStyled>
      <FooterContainer>
        <Text>Andrew Miller</Text>
        <LinkOut href="https://github.com/generalandrew" target="_blank">
          github
        </LinkOut>
        <LinkOut href="https://www.linkedin.com/in/andrewrichmiller/" target="_blank">
          LinkedIn
        </LinkOut>
      </FooterContainer>
    </BodyStyled>
  );
};

export default PageFooter;
