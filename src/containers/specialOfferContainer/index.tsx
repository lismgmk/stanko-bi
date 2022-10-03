import { Grid, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import { CustomWrapperBox } from 'containers/commonContainerStyles/style'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import React, { useState } from 'react'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { offerSlides } from '../../staticData'
import { SliderArrowLeftSvg } from '../../svgIcons/SliderArrowLeftSvg'
import { SliderArrowRightSvg } from '../../svgIcons/SliderArrowRightSvg'
import { PS_BACKGROUND_SECONDARY_GREY, PS_TEXT_PRIMARY_BLACK, PS_TEXT_PRIMARY_BLACK_20 } from '../../theme'
import {
  BoxWidthPercent,
  ContainerGrid,
  CustomImage,
  EmblemsImage,
  NextButton,
  sxIconOfferButton,
  TextContainer,
  UnderBgBoxOffer,
  MainImgBgOffer,
  ContentContainerOffer,
  PrevButton,
} from './style'

export const SpecialOfferContainer = () => {
  const [swiper, setSwiper] = useState<any>()
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const prevRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const nextRef = React.useRef() as React.MutableRefObject<HTMLInputElement>

  React.useEffect(() => {
    if (swiper) {
      console.log('Swiper instance:', swiper.activeIndex)
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current
      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, [swiper])
  return (
    <CustomWrapperBox bgColor={PS_BACKGROUND_SECONDARY_GREY}>
      <div className={`swiper-container s1`} style={{ position: 'relative' }}>
        <div className="swiper-button" ref={prevRef}>
          <PrevButton>
            <SliderArrowLeftSvg sx={{ color: activeIndex === 1 ? PS_TEXT_PRIMARY_BLACK : PS_TEXT_PRIMARY_BLACK_20 }} />
          </PrevButton>
        </div>
        <div className="swiper-button" ref={nextRef}>
          <NextButton>
            <SliderArrowRightSvg sx={{ color: activeIndex === 1 ? PS_TEXT_PRIMARY_BLACK_20 : PS_TEXT_PRIMARY_BLACK }} />
          </NextButton>
        </div>

        <Swiper
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
            disabledClass: 'disabled_swiper_button',
          }}
          onInit={(swiper) => {
            swiper.navigation.init()
            swiper.navigation.update()
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          slidesPerView={1}
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
          pagination={{
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
              return (
                '<div style="margin-bottom: 19px; line-height: 20px; font-weight:700; font-size:16px">' +
                '<span class="' +
                currentClass +
                '"></span>' +
                ' of ' +
                '<span class="' +
                totalClass +
                '"></span>' +
                '</div>'
              )
            },
          }}
          createElements
          onSwiper={setSwiper}
        >
          {offerSlides.map((elem) => {
            return (
              <SwiperSlide key={nanoid()}>
                <ContainerGrid container>
                  <CustomImage>
                    <Image src={elem.pathImg} layout="fill" objectFit="cover" alt={'card_1'} />
                  </CustomImage>
                  <BoxWidthPercent>
                    <UnderBgBoxOffer />
                    <MainImgBgOffer imageBg={elem.pathImg} />
                    <ContentContainerOffer item container>
                      <TextContainer>
                        <Typography variant={'h3'}>{elem.title}</Typography>
                        <Typography sx={{ fontWeight: 700 }} variant={'h3'}>
                          {elem.titleBolt}
                        </Typography>
                      </TextContainer>
                      <Grid container justifyContent="space-between">
                        <Grid item>
                          <IconButton sx={sxIconOfferButton}>
                            <Typography variant={'telNumberHeader'}>Оставить заявку</Typography>
                          </IconButton>
                        </Grid>
                        <Grid item>
                          <EmblemsImage>
                            <Image src={elem.pathImgEmblems} alt={'card_emblems'} />
                          </EmblemsImage>
                        </Grid>
                      </Grid>
                    </ContentContainerOffer>
                  </BoxWidthPercent>
                </ContainerGrid>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </CustomWrapperBox>
  )
}
