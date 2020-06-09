import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 30px;
`;

export const Code = styled.View`
  overflow: hidden;
  background: #fff;
  padding: 10px;
  align-self: center;
`;
export const Nav = styled.View`
  width: 100%;
  margin-top: 30px;
  /* border-top-width: ${StyleSheet.hairlineWidth}px; */
  border-top-color: rgba(255, 255, 255, 0.4);
  border-top-width: 1px;
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.4);
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`;
