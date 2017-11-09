import React from 'react';
import styled from 'styled-components';

import Body   from '../atoms/Body';
import Text   from '../atoms/Text';

import {
  Font,
  Size
} from '../../../styles';

const BodyStyled = Body.extend`
  padding: (${ Size.GutterHeight } * 3) ${ Size.GutterWidth });
`;

const PurposeQuote = styled(Text)`
  display: block;
  margin-bottom: 52px;
  margin-left: auto;
  margin-right: 16px;
  margin-top: 16px;
  text-align: right;
`;

const Header = (props) => {
  return (
    <BodyStyled>
      <PurposeQuote>
        With <strong>God</strong> as my witness
        <br />
        I am the captain of my <strong>soul</strong>
        <br />
        The master of my <strong>fate</strong>
      </PurposeQuote>
    </BodyStyled>
  );
};

export default Header;
