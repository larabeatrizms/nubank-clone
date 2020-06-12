import React, { useState } from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Logo, Title } from './styles';

import logo from '../../assets/Nubank_Logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Lara</Title>
      </Top>

      <Icon
        // name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
        name="keyboard-arrow-down"
        size={20}
        color="#FFF"
      />
    </Container>
  );
};

export default Header;
