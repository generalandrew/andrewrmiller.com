import styled from 'styled-components';

import {
  Font
} from '../../../styles';

const Text = styled.span`
  font-family: ${ Font.Family.SansSerif };
  font-size: ${ Font.Size.Base };
  line-height: ${ Font.Size.BaseLine };
`;

Text.displayName = 'Text';

export default Text;
