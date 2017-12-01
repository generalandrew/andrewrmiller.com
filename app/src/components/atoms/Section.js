import styled from 'styled-components';

import {
  Color,
  Size
} from '../../../styles';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: ${ Size.ReadingWidth };
  padding-bottom: 28px;
  position: relative;
  width: 100%;
  &:before, &:after {
    bottom: 0px;
    content: '';
    height: 2px;
    position: absolute;
    width: 50%;
  }
  &:before {
    background-image: linear-gradient(to right, ${ Color.White }, ${ Color.Grey });
  }
  &:after{
    background-image: linear-gradient(to left, ${ Color.White }, ${ Color.Grey });
    left: 50%;
  }
`;

Section.displayName = 'Section';

export default Section;
