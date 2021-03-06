import React from 'react';
import styled from 'styled-components';

import LinkOut from '../atoms/LinkOut';
import Section from '../atoms/Section';
import Text from '../atoms/Text';
import Title from '../atoms/Title';

import {
  Font,
  Media
} from '../../../styles';

const ContentTitle = Title.extend`
  margin-top: 42px;
  padding-left: 10px;
  @media(min-width: ${Media.Phablet}) {
    padding-left: 20px;
  }
`;
const DateTime = Text.extend`
  font-family: ${ Font.Family.Monospace }
`;

const TextBlock = Text.extend`
  margin-top: 16px;
`;

const ContentTeaser = (props) => {
  const { project } = props;
  return (
    <Section>
      <ContentTitle>
        { project.title }
      </ContentTitle>
      <DateTime>
        { project.date }
      </DateTime>
      <TextBlock>
        { project.description }
      </TextBlock>
      <TextBlock>
        <LinkOut href={ project.link } target="_blank">
          { project.link }
        </LinkOut>
      </TextBlock>
    </Section>
  )
}

export default ContentTeaser;
