import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';

import { Container, TabsContainer, TabItem, TabText } from './styles';

interface Props {
  translateY: Animated.Value;
}

const Tabs: React.FC<Props> = ({ translateY }) => {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }}>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Indicar amigos</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default Tabs;
