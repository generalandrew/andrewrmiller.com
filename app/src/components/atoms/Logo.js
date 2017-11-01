import styled from 'styled-components';

import {
  Size
} from '../../../styles';

const Logo = styled.h1`
  display: flex;
  font-size: ${ Size.Logo };
`;

Logo.displayName = 'Logo';

export default Logo;
