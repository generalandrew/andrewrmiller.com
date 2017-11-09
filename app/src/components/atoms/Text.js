import styled from 'styled-components';

import {
  Font
} from '../../../styles';

const Text = styled.span`
  font-family: ${ Font.Family.SansSerif };
  font-size: ${ Font.Size.Base };
  line-height: ${ Font.Size.BaseLine };
  strong {
    font-weight: 700;
  }
`;

Text.displayName = 'Text';

export default Text;
