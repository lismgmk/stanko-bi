import { Grid, Box, CardContent, Icon } from '@mui/material'
import Typography from '@mui/material/Typography'
import { nanoid } from 'nanoid'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PrevButton, NextButton } from '../../containers/specialOfferContainer/style'
import { advantages } from '../../staticData'
import { BadgeSvg } from '../../svgIcons/BadgeSvg'
import { CertificateSvg } from '../../svgIcons/CertificateSvg'
import { ExperienceCertificateSvg } from '../../svgIcons/ExperienceCertificateSvg'
import { GoalSvg } from '../../svgIcons/GoalSvg'
import { MoneySackSvg } from '../../svgIcons/MoneySackSvg'
import { QualitySvg } from '../../svgIcons/QualitySvg'
import { ReceiptSvg } from '../../svgIcons/ReceiptSvg'
import { RunningManSvg } from '../../svgIcons/RunningManSvg'
import { SliderArrowLeftSvg } from '../../svgIcons/SliderArrowLeftSvg'
import { SliderArrowRightSvg } from '../../svgIcons/SliderArrowRightSvg'
import { PS_TEXT_PRIMARY_BLACK, PS_TEXT_PRIMARY_BLACK_20 } from '../../theme'
import { AdvantagesCard } from './style'

export const AdvantagesBox: NextPage = () => {
  const icons: any = {
    CertificateSvg,
    MoneySackSvg,
    RunningManSvg,
    ExperienceCertificateSvg,
    BadgeSvg,
    GoalSvg,
    ReceiptSvg,
    QualitySvg,
  }

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
    <div className={`swiper-container s2`} style={{ position: 'relative' }}>
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
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
        modules={[Navigation]}
        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        onSwiper={setSwiper}
      >
        {advantages.map((elem) => {
          return (
            <SwiperSlide key={nanoid()}>
              <AdvantagesCard>
                <CardContent sx={{ p: 2.7 }}>
                  <Typography variant={'h4'}>{elem.title}</Typography>
                  <Box sx={{ pt: 2 }}>
                    <Grid container justifyContent={'space-between'} key={nanoid()}>
                      <Grid item>
                        <Typography variant={'advantagesText'}>{elem.text}</Typography>
                      </Grid>
                      <Grid item>
                        {/*<CertificateSvg></CertificateSvg>*/}
                        <Icon>{elem.icon[icons]}</Icon>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </AdvantagesCard>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
