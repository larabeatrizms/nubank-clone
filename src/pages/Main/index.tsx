import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated, Dimensions } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import {
  PanGestureHandler,
  State,
  PanGestureHandlerStateChangeEvent,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';

import { scrollInterpolator, animatedStyles } from '../../utils/animation';

import {
  Container,
  Content,
  CardList,
  CardContainer,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
  StyledPagination,
} from './styles';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

const DATA = [1, 2, 3];

const Main: React.FC = () => {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event: PanGestureHandlerStateChangeEvent) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 450 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 450 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  const panRef = useRef(null);
  const listRef = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <CardList>
          <PanGestureHandler
            ref={panRef}
            simultaneousHandlers={listRef}
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}>
            <CardContainer
              style={{
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [-350, 0, 450],
                      outputRange: [-50, 0, 450],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}>
              <Animated.View>
                <NativeViewGestureHandler
                  ref={listRef}
                  simultaneousHandlers={panRef}>
                  <Carousel
                    data={DATA}
                    renderItem={() => (
                      <Card>
                        <CardHeader>
                          <Icon name="attach-money" size={28} color="#666" />
                          <Icon name="visibility-off" size={28} color="#666" />
                        </CardHeader>
                        <CardContent>
                          <Title>Saldo disponível</Title>
                          <Description>R$ {index}</Description>
                        </CardContent>
                        <CardFooter>
                          <Annotation>
                            Transferência de R$ 20,00 recebida de Diego Schell
                            Fernandes hoje às 6:00h.
                          </Annotation>
                        </CardFooter>
                      </Card>
                    )}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    onSnapToItem={(indexItem) => setIndex(indexItem)}
                    scrollInterpolator={scrollInterpolator}
                    slideInterpolatedStyle={animatedStyles}
                    useScrollView={true}
                  />
                </NativeViewGestureHandler>
              </Animated.View>
            </CardContainer>
          </PanGestureHandler>
        </CardList>
      </Content>

      <StyledPagination
        dotsLength={DATA.length}
        activeDotIndex={index}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.9}
      />
      <Tabs translateY={translateY} />
    </Container>
  );
};

export default Main;
