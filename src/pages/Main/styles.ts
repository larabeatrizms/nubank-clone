import styled from 'styled-components/native';
import { Animated, Dimensions, Platform } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;
const ITEM_HEIGHT = 400;

export const Container = styled.View`
  flex: 1;
  background: #8b10ae;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const CardList = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
`;

export const CardContainer = styled(Animated.View)`
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_HEIGHT}px;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0px 20px;
  height: 100%;
`;

export const StyledPagination = styled(Pagination).attrs({
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  inactiveDotStyle: {},
})``;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;
`;
