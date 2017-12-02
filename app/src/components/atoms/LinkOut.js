import styled from 'styled-components';

import {
  Color,
  Font
} from '../../../styles';

const LinkOut = styled.a`
  color: ${ Color.Link };
  font-family: ${ Font.Family.SansSerif };
  font-size: ${ Font.Size.Base };
  line-height: ${ Font.Size.BaseLine };
  text-decoration: none;
`;

LinkOut.displayName = 'LinkOut';

export default LinkOut;
