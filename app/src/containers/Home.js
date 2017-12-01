import React from 'react';
import styled from 'styled-components';

import ContentTeaser  from '../components/organisms/ContentTeaser';
import Page           from '../components/atoms/Page';
import Text from '../components/atoms/Text'

import ProjectData from '../ProjectData';

const Quote = Text.extend`
  line-height: 2;
`;

const QuoteAuthor = Text.extend`
  text-align: right;
  font-style: italic;
  margin-bottom: 24px;
`;

const StyledText = Text.extend`
  margin-top: 16px;
`;

const StyledBoldText = StyledText.extend`
  font-weight: 700;
  margin-top: 36px;
`;

const Content = ProjectData.map((project) =>
  <ContentTeaser key={ project.title } project={ project }/>
);
const Home = (props) => {
  return (
    <Page>
      <Quote>
        There is a fascination of watching a figment of the imagination emerge through the aid of science to a plan on paper. Then it moves to realization in stone or metal or energy. Then in brings jobs and homes to men. Then in elevates the standards of living and adds to the comforts of life. That is the engineer's high privilege.
      </Quote>
      <QuoteAuthor>
        - Herbert Hover
      </QuoteAuthor>
      <StyledText>
        What am I really good at?
      </StyledText>
      <StyledText>
        I enjoy embrassing the pain necessary to accomplish my goal.
      </StyledText>
      <StyledBoldText>
        Enough small talk, here is what I'm allowed to show you.
      </StyledBoldText>
      <div>
      { Content }
      </div>
    </Page>
  );
};

export default Home;
