import React from 'react';
import styled from 'styled-components';

import Section from '../atoms/Section';
import Text from '../atoms/Text';
import Title from '../atoms/Title';

const ContentTeaser = (props) => {
  const { mock } = props;
  return (
    <Section>
      <Title>
        { mock.title }
      </Title>
      <Text>
        { mock.description }
      </Text>
    </Section>
  )
}

export default ContentTeaser;
