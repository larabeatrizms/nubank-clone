import styled from 'styled-components/native';

import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
`;
