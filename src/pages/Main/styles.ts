import styled from 'styled-components/native';
import { Animated, Dimensions, Platform } from 'react-native';
import { Pagination } from 'react-native-snap-carousel';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;
const ITEM_HEIGHT = 400;

interface LabelProps {
  color: string;
}

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

export const CardView = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const CardContainerContent = styled.View`
  flex: 1;
`;

export const CardLabel = styled.View`
  border-radius: 2px;
  width: 5px;
  margin: 30px 16px 30px 0;
`;

export const Label = styled.View`
  flex: 1;
  background: ${(props: LabelProps) => props.color};
  /* background: #01ca37; */
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

export const HeaderTitle = styled.Text`
  color: #999;
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

export const Detail = styled.View`
  flex-direction: row;
`;

export const DetailCard = styled.Text`
  align-self: flex-end;
  margin-right: 6px;
  color: #666;
`;

export const DetailNumberCard = styled.Text`
  color: #01ca37;
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 34px;
  margin-top: 3px;
  color: #333;
`;

export const CardContainerFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Annotation = styled.Text`
  width: 250px;
  font-size: 12px;
  color: #333;
`;

export const ButtonFooter = styled.TouchableOpacity`
  width: 80%;
  align-self: center;
  border-width: 1px;
  border-color: #8b10ae;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-bottom: 15px;
`;

export const ButtonFooterText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #8b10ae;
`;
