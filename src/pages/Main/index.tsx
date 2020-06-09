import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  );
};

export default Main;
