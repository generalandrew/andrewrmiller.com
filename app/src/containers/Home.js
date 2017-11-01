import React from 'react';
import styled from 'styled-components';

import ContentTeaser  from '../components/organisms/ContentTeaser';
import Page           from '../components/atoms/Page';
import Text from '../components/atoms/Text'

const mock = {
  collaborators: [
    {
      link: 'http://google.com',
      who: 'Chris Juneja'
    }
  ],
  description: 'Stuff about this',
  title: 'Thing 1',
  type: 'Project',
  when: 'October 7th 2017',
};

const Quote = Text.extend`
  line-height: 2;
`;

const QuoteAuthor = Text.extend`
  text-align: right;
  font-style: italic;
`;

const Home = (props) => {
  return (
    <Page>
      <Quote>
        There is a fascination of watching a figment of the imagination emerge through the aid of science to a plan on paper. Then it moves to realization in stone or metal or energy. Then in brings jobs and homes to men. Then in elevates the standards of living and adds to the comforts of life. That is the engineer's high privilege.
      </Quote>
      <QuoteAuthor>
        - Herbert Hover
      </QuoteAuthor>
      <ContentTeaser mock={ mock }/>
    </Page>
  );
};

export default Home;
