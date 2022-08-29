import { Grid, Box, CardContent } from '@mui/material'
import Typography from '@mui/material/Typography'
import { nanoid } from 'nanoid'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, { Navigation } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import { cards } from '../../staticData'
import { CustomCard, CustomCardMedia } from './style'

SwiperCore.use([Navigation])

export const CardsBox: NextPage = () => {
  return (
    <Grid container spacing={1} justifyContent={'space-between'} alignItems={'center'}>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
        navigation={true}
      >
        {cards.map((elem) => {
          return (
            <SwiperSlide key={nanoid()}>
              <CustomCard>
                <CustomCardMedia>
                  <Image src={elem.pathImg} layout="fill" objectFit="cover" alt={'card_1'} />
                </CustomCardMedia>
                <CardContent sx={{ p: 2.7 }}>
                  <Typography variant={'cardsTitle'}>{elem.title}</Typography>
                  <Box sx={{ pt: 2 }}>
                    {elem.article.map((i) => {
                      return (
                        <Grid container justifyContent={'space-between'} key={nanoid()}>
                          <Typography variant={'cardsText'}>{i.option}</Typography>
                          <Typography variant={'cardsText'}>{i.value}</Typography>
                        </Grid>
                      )
                    })}
                  </Box>
                  <Typography variant={'cardsPrice'}>{elem.price}</Typography>
                </CardContent>
              </CustomCard>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Grid>
  )
}
