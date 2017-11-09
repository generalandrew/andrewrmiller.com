import styled from 'styled-components';

import {
  Font
} from '../../../styles';

const Title = styled.h1`
  font-family: ${ Font.Family.SansSerif };
  font-size: ${ Font.Size.Heading1 };
`;

Title.displayName = 'Title';

export default Title;
