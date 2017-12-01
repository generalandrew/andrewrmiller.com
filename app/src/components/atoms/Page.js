import styled from 'styled-components';

import {
  Size
} from '../../../styles';

const Page = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 80px;
margin-left: auto;
margin-right: auto;
max-width: ${Size.ReadingWidth};
padding-left: 16px;
padding-right: 16px;
width: 100%;
`;

export default Page;
