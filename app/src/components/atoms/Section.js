import styled from 'styled-components';

import {
  Size
} from '../../../styles';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  max-width: ${ Size.ReadingWidth };
  width: 100%;
`;

Section.displayName = 'Section';

export default Section;
