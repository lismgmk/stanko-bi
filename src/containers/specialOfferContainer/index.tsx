import { Grid, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography'
import { CustomContainer, CustomWrapperBox } from 'containers/commonContainerStyles/style'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import React, { useState } from 'react'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { offerSlides } from '../../staticData'
import { PS_BACKGROUND_SECONDARY_GREY } from '../../theme'
import { ContainerGrid, CustomImage, NextButton, sxIconOfferButton, sxResponsiveOfferContainerWeight } from './style'

export const SpecialOfferContainer = () => {
  const [swiper, setSwiper] = useState<any>()
  const prevRef = React.useRef() as React.MutableRefObject<HTMLInputElement>
  const nextRef = React.useRef() as React.MutableRefObject<HTMLInputElement>

  React.useEffect(() => {
    if (swiper) {
      console.log('Swiper instance:', swiper)
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current
      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, [swiper])
  return (
    <CustomWrapperBox bgColor={PS_BACKGROUND_SECONDARY_GREY}>
      <CustomContainer maxWidth={'xl'} sx={sxResponsiveOfferContainerWeight}>
        <div className={`swiper-container s1`}>
          <div className="swiper-button" ref={prevRef}>
            <NextButton sx={{ left: 240 }}> prev </NextButton>
          </div>
          <Swiper
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
            onInit={(swiper) => {
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            slidesPerView={1}
            pagination={{
              type: 'fraction',
              renderFraction: function (currentClass, totalClass) {
                return (
                  '<div style="color:red; position:absolute; top:-150px">' +
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
                    <Grid sx={{ width: '50%' }} item container>
                      {/*<Grid item container xs={12} mobile={12} sm={6} md={6} lg={6} xl={6}>*/}
                      <Typography variant={'h3'}>{elem.title}</Typography>
                      <Typography sx={{ fontWeight: 700 }} variant={'h3'}>
                        {elem.titleBolt}
                      </Typography>
                      <Grid item>
                        <IconButton sx={sxIconOfferButton}>
                          <Typography variant={'telNumberHeader'}>Оставить заявку</Typography>
                        </IconButton>
                      </Grid>
                    </Grid>
                    <CustomImage>
                      {/*<CustomImage xs={12} mobile={12} sm={6} md={6} lg={6} xl={6} item>*/}
                      <Image src={elem.pathImg} layout="fill" objectFit="cover" alt={'card_1'} />
                    </CustomImage>
                  </ContainerGrid>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className="swiper-button" ref={nextRef}>
            <NextButton>next</NextButton>
          </div>
        </div>
      </CustomContainer>
    </CustomWrapperBox>
  )
}
