import React, { useRef, useState } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Animated, Dimensions, View } from 'react-native';

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
  CardView,
  CardContainerContent,
  CardLabel,
  Label,
  CardHeader,
  HeaderTitle,
  CardContent,
  Title,
  Detail,
  DetailCard,
  DetailNumberCard,
  Description,
  CardContainerFooter,
  CardFooter,
  Annotation,
  ButtonFooter,
  ButtonFooterText,
  StyledPagination,
} from './styles';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;

const DATA = [
  {
    headerIcon: 'credit-card',
    headerTitle: 'Cartão de crédito',
    contentTitle: 'FATURA ATUAL',
    contentText: 'R$ 563,93',
    footerIcon: 'layers',
    footerText:
      'Compra mais recente em Ebank*Spotify no valor de R$ 26,90 hoje',
  },
  {
    headerIcon: 'dollar-sign',
    headerTitle: 'NuConta',
    contentTitle: 'Saldo disponível',
    contentText: 'R$ 563,93',
    footerIcon: 'shopping-cart',
    footerText: 'Boleto de R$ 1.016,36 pago 10 mar',
  },
  {
    headerIcon: 'gift',
    headerTitle: '',
    contentTitle: 'Nubank Rewards',
    contentText:
      'Acumule pontos que nunca expiram e troque por passagens aéreas ou serviços que você realmente usa.',
    footerIcon: '',
    footerText: 'ATIVE O SEU REWARDS',
  },
];

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

  // useEffect(() => {
  //   Number(translateY) > 20 ? setMenuOpen(true) : setMenuOpen(false);
  // }, [translateY]);

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
                    renderItem={({ item }) => (
                      <Card>
                        <CardView>
                          <CardContainerContent>
                            <CardHeader>
                              <FeatherIcon
                                name={item.headerIcon}
                                size={24}
                                color="#666"
                              />
                              <HeaderTitle>{item.headerTitle}</HeaderTitle>
                              {item.headerIcon === 'dollar-sign' ? (
                                <FeatherIcon
                                  name="eye-off"
                                  size={24}
                                  color="#666"
                                />
                              ) : null}
                            </CardHeader>
                            <CardContent>
                              {item.contentTitle === 'Nubank Rewards' ? (
                                <View>
                                  <Description
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{
                                      textAlign: 'center',
                                      marginBottom: 8,
                                      fontSize: 22,
                                      fontWeight: 'bold',
                                      color: '#333',
                                    }}>
                                    {item.contentTitle}
                                  </Description>
                                  <Title style={{ textAlign: 'center' }}>
                                    {item.contentText}
                                  </Title>
                                </View>
                              ) : (
                                <View>
                                  <Title
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={{
                                      color:
                                        item.contentTitle === 'FATURA ATUAL'
                                          ? '#0fbdc8'
                                          : '#999',
                                    }}>
                                    {item.contentTitle}
                                  </Title>
                                  <Description // eslint-disable-next-line react-native/no-inline-styles
                                    style={{
                                      color:
                                        item.contentTitle === 'FATURA ATUAL'
                                          ? '#0fbdc8'
                                          : '#333',
                                    }}>
                                    {item.contentText}
                                  </Description>
                                  {item.contentTitle === 'FATURA ATUAL' ? (
                                    <Detail>
                                      <DetailCard>Limite disponível</DetailCard>
                                      <DetailNumberCard>
                                        R$ 290,54
                                      </DetailNumberCard>
                                    </Detail>
                                  ) : null}
                                </View>
                              )}
                            </CardContent>
                          </CardContainerContent>
                          {item.contentTitle === 'FATURA ATUAL' ? (
                            <CardLabel>
                              <Label color="#01ca37" />
                              <Label color="orange" />
                              <Label color="#0fbdc8" />
                            </CardLabel>
                          ) : null}
                        </CardView>

                        {item.contentTitle === 'Nubank Rewards' ? (
                          <ButtonFooter>
                            <ButtonFooterText>
                              {item.footerText}
                            </ButtonFooterText>
                          </ButtonFooter>
                        ) : (
                          <CardContainerFooter>
                            <CardFooter>
                              <FeatherIcon
                                name={item.footerIcon}
                                size={24}
                                color="#666"
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{ marginRight: 8 }}
                              />
                              <Annotation>{item.footerText}</Annotation>
                              <FeatherIcon
                                name="chevron-right"
                                size={24}
                                color="#999"
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{ marginRight: 8 }}
                              />
                            </CardFooter>
                          </CardContainerFooter>
                        )}
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
